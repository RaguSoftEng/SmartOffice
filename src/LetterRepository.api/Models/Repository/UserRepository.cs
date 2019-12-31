using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LetterRepository.api.DbModels;
using LetterRepository.api.IRepository;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace LetterRepository.api.Models.Repository {
    public class UserRepository : IUserRepository {
        private readonly ObjectContext _context = null;
        private readonly ICommonRepository _common = null;

        public UserRepository (IOptions<Settings> settings, ICommonRepository common) {
            this._context = new ObjectContext (settings);
            this._common = common;
        }
        public async Task<dynamic> Add (User user) {
            if (!(user is null)) {
                try {
                    var id = this._common.GetNewId (1002);
                    user.Id = id;
                    await _context.Users.InsertOneAsync (user);
                    return new {
                        status = "Ok",
                            id = id
                    };
                } catch (System.Exception) {

                    throw;
                }
            } else {
                throw new ArgumentNullException (nameof (user));
            }
        }

        public async Task<Results> Get (int start, int limit, string filter) {
            try {
                var user = new List<User> ();
                var data = new Results ();
                if (filter != "null") {
                    user = await _context.Users.Find (x => x.FullName.Contains (filter) ||
                            x.UserName.Contains (filter)
                        )
                        .Skip (start)
                        .Limit (limit)
                        .ToListAsync ();
                } else {
                    user = await _context.Users.Find (x => true)
                        .Skip (start)
                        .Limit (limit)
                        .ToListAsync ();
                }

                if (!(user is null)) {
                    user.ForEach (x => {
                        x.Password = null;
                        var title = this._context.ListValue.Find (e => e.ListId == 4 && e.ListValueId == x.Title).FirstOrDefault ();
                        x.FullName = title.Value + "." + x.FullName;
                    });
                } else {
                    user = new List<User> ();
                }
                data.Details = user;
                data.Columns = new List<dynamic> {
                    new {
                    ColumnName = "FullName",
                    DisplayName = "Name",
                    IsVisible = true,
                    DisplayOrder = 1
                    },
                    new {
                    ColumnName = "Email",
                    DisplayName = "Email",
                    IsVisible = true,
                    DisplayOrder = 2
                    },
                    new {
                    ColumnName = "UserName",
                    DisplayName = "UserName",
                    IsVisible = true,
                    DisplayOrder = 3
                    },
                    new {
                    ColumnName = "CreatedDate",
                    DisplayName = "Created Date",
                    IsVisible = true,
                    DisplayOrder = 4
                    }
                };
                data.Url = "user";
                data.FormId = 1002;
                return data;
            } catch (System.Exception) {

                throw;
            }
        }

        public async Task<User> Get (long id) {
            try {
                var user = await _context.Users.Find (x => x.Id == id).FirstOrDefaultAsync ();
                if (!(user is null)) {
                    user.Password = null;
                } else {
                    throw new ApplicationException ("User not found...!");
                }
                return user;
            } catch (System.Exception) {

                throw;
            }
        }

        public async Task<dynamic> Update (long id, User user) {
            try {
                var update = Builders<User>.Update.Set (e => e.Status, user.Status);
                var result = await _context.Users.FindOneAndUpdateAsync (e => e.Id == id, update);

                if (result != null) {
                    return new {
                    status = "Ok",
                    id = id
                    };
                } else {
                    throw new ApplicationException ("Failed Update the user...!");
                }
            } catch (System.Exception) {

                throw;
            }
        }
        public async Task<DeleteResult> Remove (long id) {
            try {
                return await _context.Users.DeleteOneAsync (X => X.Id == id);
            } catch (System.Exception) {

                throw;
            }
        }
    }
}
