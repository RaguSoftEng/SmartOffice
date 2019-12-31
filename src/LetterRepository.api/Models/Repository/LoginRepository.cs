using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using LetterRepository.api.DbModels;
using LetterRepository.api.IRepository;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;

namespace LetterRepository.api.Models.Repository {
    public class LoginRepository : ILoginRepository {
        private readonly ObjectContext context = null;
        private readonly AppSettings appSettings = null;
        private readonly ICommonRepository common = null;
        public LoginRepository (IOptions<Settings> settings, IOptions<AppSettings> appSettings, ICommonRepository common) {
            this.context = new ObjectContext (settings);
            this.appSettings = appSettings.Value;
            this.common = common;
            if (this.context.ParameterList.Find (x => true).ToList ().Count == 0) {
                this.context.ParameterList.InsertMany (new List<ParameterList> {
                    new ParameterList {
                        ListId = 1,
                            Description = "Post types"
                    },
                    new ParameterList {
                        ListId = 2,
                            Description = "Letter categories"
                    },
                    new ParameterList {
                        ListId = 3,
                            Description = "User Levels"
                    },
                    new ParameterList {
                        ListId = 4,
                            Description = "Titles"
                    }
                });

                this.common.updateListValue (new ListValue {
                    ListId = 4,
                        ListValueId = 0,
                        Value = "Mr"
                });
                this.common.updateListValue (new ListValue {
                    ListId = 3,
                        ListValueId = 0,
                        Value = "SystemAdmin"
                });

            }
            if (this.context.Users.Find (x => true).ToList ().Count == 0) {
                this.context.Users.InsertOne (new User {
                    Title = 1,
                        UserLevel = 1,
                        FullName = "System Admin",
                        DisplayName = "System Admin",
                        Email = "SysAdmin@email.com",
                        Password = "sysadmin@123",
                        UserName = "SysAdmin@email.com",
                        CreatedDate = DateTime.Now.Date
                });
            }
        }

        public async Task<IEnumerable<Login>> Get () {
            try {
                return await context.Logins.Find (x => true).ToListAsync ();
            } catch (System.Exception) {

                throw;
            }
        }

        public async Task<Login> Get (long id) {
            try {
                var login = Builders<Login>.Filter.Eq ("LoginId", id);
                return await context.Logins.Find (login).FirstOrDefaultAsync ();
            } catch (System.Exception) {

                throw;
            }
        }

        public dynamic Authenticate (string UserName, string password) {
            try {
                var user = context.Users.Find (x => x.UserName == UserName && x.Password == password).FirstOrDefault ();
                // return null if user not found
                if (user == null)
                    throw new ApplicationException ("UserName or password you have entered is incorrect...!");
                else {

                    var logout = Builders<Login>.Update.Set (e => e.Status, 0)
                        .Set (e => e.End, DateTime.Now);
                    context.Logins.FindOneAndUpdate (e => e.User.Id == user.Id && e.Status != 0, logout);

                    var login = new Login {
                        User = user,
                        Start = DateTime.Now,
                        End = DateTime.Parse ("1753-01-01"),
                        Status = 1,
                        Token = ""
                    };
                    this.context.Logins.InsertOne (login);

                    // authentication successful so generate jwt token
                    var tokenHandler = new JwtSecurityTokenHandler ();
                    var key = Encoding.ASCII.GetBytes (appSettings.Secret);
                    var tokenDescriptor = new SecurityTokenDescriptor {
                        Subject = new ClaimsIdentity (new Claim[] {
                        new Claim (ClaimTypes.Name, login.LoginId.ToString ()),
                        new Claim ("userid", user.Id.ToString ())
                        }),
                        Expires = DateTime.UtcNow.AddDays (1),
                        SigningCredentials = new SigningCredentials (new SymmetricSecurityKey (key), SecurityAlgorithms.HmacSha256Signature)
                    };
                    var token = tokenHandler.CreateToken (tokenDescriptor);
                    login.Token = tokenHandler.WriteToken (token);

                    var update = Builders<Login>.Update.Set (e => e.Token, login.Token);
                    context.Logins.FindOneAndUpdate (e => e.LoginId == login.LoginId, update);

                    return new {
                        DisplayName = user.DisplayName,
                            Token = login.Token
                    };
                }
            } catch (System.Exception e) {

                throw e;
            }
        }

        public dynamic Logout (string token) {
            try {
                var update = Builders<Login>.Update.Set (e => e.Status, 0)
                    .Set (e => e.End, DateTime.Now);
                this.context.Logins.FindOneAndUpdate (e => e.Token == token, update);

                return new {
                    status = "done"
                };
            } catch (System.Exception) {

                throw;
            }
        }
    }
}
