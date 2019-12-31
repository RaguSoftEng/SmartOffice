using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LetterRepository.api.DbModels;
using LetterRepository.api.IRepository;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LetterRepository.api.Models.Repository {
    public class LettersRepository : ILettersRepository {
        private readonly ObjectContext _context = null;
        private readonly ICommonRepository _common = null;

        public LettersRepository (IOptions<Settings> settings, ICommonRepository common) {
            this._context = new ObjectContext (settings);
            this._common = common;
        }
        async Task<dynamic> ILettersRepository.Add (Letter letter) {
            if (!(letter is null)) {
                try {
                    var id = this._common.GetNewId (1003);
                    letter.Id = id;
                    letter.LetterCode = this.generateleterCode (id);
                    letter.SendOrReceiveDate = letter.SendOrReceiveDate.ToUniversalTime ();
                    await this._context.Letter.InsertOneAsync (letter);
                    return new {
                        status = "Ok",
                            id = id
                    };
                } catch (System.Exception) {

                    throw;
                }
            } else {
                throw new ArgumentNullException (nameof (letter));
            }
        }

        async Task<Results> ILettersRepository.Get (int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate) {
            try {
                var letter = new List<Letter> ();
                var data = new Results ();
                if (filter != "null") {
                    letter = await this._context.Letter.Find (x =>
                            (
                                x.DepartmentId.Equals (depId) &&
                                x.SendOrReceiveDate <= toDate & x.SendOrReceiveDate >= frmDate
                            ) &&
                            (
                                x.LetterCode.Contains (filter) ||
                                x.LetterRefNO.Contains (filter) ||
                                x.LetterContant.Contains (filter) ||
                                x.ToWhom.Contains (filter) ||
                                x.Subject.Contains (filter) ||
                                x.FromAddress.Contains (filter) ||
                                x.ToAddress.Contains (filter)
                            )
                        )
                        .Skip (start)
                        .Limit (limit)
                        .ToListAsync ();
                } else {
                    letter = await _context.Letter.Find (x =>
                            x.DepartmentId.Equals (depId) &&
                            x.SendOrReceiveDate <= toDate & x.SendOrReceiveDate >= frmDate
                        )
                        .Skip (start)
                        .Limit (limit)
                        .ToListAsync ();
                }

                if (letter is null) {
                    letter = new List<Letter> ();
                }

                data.Details = letter;
                data.Columns = new List<dynamic> {
                    new {
                    ColumnName = "LetterCode",
                    DisplayName = "Code",
                    IsVisible = true,
                    DisplayOrder = 1
                    },
                    new {
                    ColumnName = "LetterRefNO",
                    DisplayName = "LetterRefNO",
                    IsVisible = true,
                    DisplayOrder = 2
                    },
                    new {
                    ColumnName = "SendOrReceiveDate",
                    DisplayName = "Send/Received Date",
                    IsVisible = true,
                    DisplayOrder = 3
                    },
                    new {
                    ColumnName = "ToWhom",
                    DisplayName = "To-Whom",
                    IsVisible = true,
                    DisplayOrder = 4
                    },
                    new {
                    ColumnName = "Progress",
                    DisplayName = "Progress",
                    IsVisible = true,
                    DisplayOrder = 5
                    }
                };
                data.Url = "letter";
                data.FormId = 1003;
                return data;
            } catch (System.Exception) {

                throw;
            }
        }

        async Task<Letter> ILettersRepository.Get (long id) {
            try {
                var letter = await this._context.Letter.Find (x => x.Id == id).FirstOrDefaultAsync ();
                if (letter is null) {
                    throw new ApplicationException ("Letter not found...!");
                }
                return letter;
            } catch (System.Exception) {

                throw;
            }
        }

        async Task<dynamic> ILettersRepository.Remove (long id) {
            try {
                return await this._context.Letter.DeleteOneAsync (X => X.Id == id);
            } catch (System.Exception) {

                throw;
            }
        }

        async Task<dynamic> ILettersRepository.Update (long id, Letter letter) {
            try {
                var update = Builders<Letter>.Update.Set (e => e.Progress, letter.Progress)
                    .Set (e => e.SendOrReceiveDate, letter.SendOrReceiveDate.ToUniversalTime ());
                var result = await this._context.Letter.FindOneAndUpdateAsync (e => e.Id == id, update);

                if (result != null) {
                    return new {
                    status = "Ok",
                    id = id
                    };
                } else {
                    throw new ApplicationException ("Failed Update the letter...!");
                }
            } catch (System.Exception) {

                throw;
            }
        }

        string generateleterCode (long id) {
            try {
                var length = 10;
                var idlen = id.ToString ().Length;
                var newcode = "0000000000";
                if (idlen >= length) {
                    newcode = id.ToString ();
                } else {
                    newcode = newcode.Substring (0, (length - idlen)) + id.ToString ();
                }
                return newcode;
            } catch (System.Exception) {

                throw;
            }
        }
    }
}
