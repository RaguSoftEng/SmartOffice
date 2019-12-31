using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LetterRepository.api.DbModels;
using LetterRepository.api.IRepository;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LetterRepository.api.Models.Repository {
    public class CommonRepository : ICommonRepository {
        private readonly ObjectContext _context = null;
        public CommonRepository (IOptions<Settings> settings) {
            _context = new ObjectContext (settings);
        }
        public long GetNewId (int formId) {
            var res = this._context.Sequence.Find (a => a.formId == formId).FirstOrDefault ();
            if (res is null) {
                this._context.Sequence.InsertOne (new Sequence {
                    formId = formId,
                        SeqId = 0
                });
            }
            var filter = Builders<Sequence>.Filter.Eq (a => a.formId, formId);
            var update = Builders<Sequence>.Update.Inc (a => a.SeqId, 1);
            var sequence = this._context.Sequence.FindOneAndUpdate (filter, update,
                new FindOneAndUpdateOptions<Sequence, Sequence> {
                    IsUpsert = true,
                    ReturnDocument = ReturnDocument.After
                });

            return sequence.SeqId;
        }

        public async Task<IEnumerable<Pair>> GetListValues (int listId, bool isaParameter) {
            try {
                var list = new List<Pair> ();
                if (isaParameter) {
                    var res = await this._context.ListValue.Find (x => x.ListId == listId).ToListAsync ();

                    if (!(res is null)) {
                        res.ForEach (a => {
                            list.Add (new Pair {
                                Id = a.ListValueId.ToString (),
                                    Value = a.Value
                            });
                        });
                    }
                } else if (listId == 1001) {
                    var department = await this._context.Department.Find (x => true).ToListAsync ();
                    if (!(department is null)) {
                        department.ForEach (a => {
                            list.Add (new Pair {
                                Id = a.Id.ToString (),
                                    Value = a.DepartmentCode + "[" + a.DepartmentName + "]"
                            });
                        });
                    } else {
                        list.Add (new Pair {
                            Id = "0",
                                Value = "Admin"
                        });
                    }
                } else if (listId == 1003) {
                    var letter = await this._context.Letter.Find (x => true).ToListAsync ();
                    if (!(letter is null)) {
                        letter.ForEach (a => {
                            list.Add (new Pair {
                                Id = a.Id.ToString (),
                                    Value = a.LetterCode
                            });
                        });
                    } else {
                        list.Add (new Pair {
                            Id = "0",
                                Value = "--none--"
                        });
                    }
                }
                return list;
            } catch (System.Exception) {
                throw;
            }
        }
        public async Task<IEnumerable<ParameterList>> GetParameterList () {
            var lists = new List<ParameterList> ();
            try {
                lists = await this._context.ParameterList.Find (x => x.IsVisible == true).ToListAsync ();
                return lists;
            } catch (System.Exception) {

                throw;
            }
        }

        public async Task<dynamic> updateListValue (ListValue obj) {
            try {
                if (obj.ListValueId > 0) {
                    var update = Builders<ListValue>.Update.Set (e => e.Value, obj.Value);
                    var result = await _context.ListValue.FindOneAndUpdateAsync (e => e.ListId == obj.ListId && e.ListValueId == obj.ListValueId, update);

                    if (result != null) {
                        return new {
                        status = "Ok",
                        id = obj.ListValueId
                        };
                    } else {
                        throw new ApplicationException ("Failed Update the user...!");
                    }
                } else {
                    var id = this.GetNewId (obj.ListId);
                    obj.ListValueId = id;
                    await _context.ListValue.InsertOneAsync (obj);
                    return new {
                        status = "Ok",
                            id = id
                    };
                }
            } catch (System.Exception) {

                throw;
            }
        }
    }
}
