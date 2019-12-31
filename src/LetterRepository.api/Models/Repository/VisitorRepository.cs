using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using LetterRepository.api.DbModels;
using LetterRepository.api.IRepository;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace LetterRepository.api.Models.Repository {
    public class VisitorRepository : IVisitorRepository {

        private readonly ObjectContext context = null;
        private readonly ICommonRepository common = null;
        public VisitorRepository (IOptions<Settings> settings, ICommonRepository common) {
            this.context = new ObjectContext (settings);
            this.common = common;
        }

        public async Task<Results> Get (int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate) {
            try {
                var visitors = new List<Visitor> ();
                var data = new Results ();
                if (filter != "null") {
                    visitors = await this.context.Visitor.Find (x =>
                            (
                                x.DepartmentId.Equals (depId) &&
                                x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays (-1)
                            ) &&
                            (
                                x.FullName.Contains (filter) ||
                                x.Address.Contains (filter) ||
                                x.NicNo.Contains (filter) ||
                                x.ContactNo.Contains (filter) ||
                                x.Purpose.Contains (filter) ||
                                x.VisitorToken.Contains (filter)
                            )
                        )
                        .Skip (start)
                        .Limit (limit)
                        .ToListAsync ();
                } else {
                    visitors = await this.context.Visitor.Find (x =>
                            x.DepartmentId.Equals (depId) &&
                            x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays (-1)
                        )
                        .Skip (start)
                        .Limit (limit)
                        .ToListAsync ();
                }

                if (visitors is null) {
                    visitors = new List<Visitor> ();
                } else {
                    if (visitors.Count > 0) {
                        visitors.ForEach (v => {
                            var title = this.context.ListValue.Find (e => e.ListId == 4 && e.ListValueId == v.Title).FirstOrDefault ();
                            if (title != null && title.Value != "") {
                                v.FullName = title.Value + "." + v.FullName;
                            }
                        });
                    }
                }

                data.Details = visitors;
                data.Columns = new List<dynamic> {
                    new {
                    ColumnName = "FullName",
                    DisplayName = "Name",
                    IsVisible = true,
                    DisplayOrder = 1
                    },
                    new {
                    ColumnName = "VisitDate",
                    DisplayName = "Visited Date",
                    IsVisible = true,
                    DisplayOrder = 2
                    },
                    new {
                    ColumnName = "VisitorToken",
                    DisplayName = "Visitor Token",
                    IsVisible = true,
                    DisplayOrder = 3
                    },
                    new {
                    ColumnName = "NicNo",
                    DisplayName = "Nic No",
                    IsVisible = true,
                    DisplayOrder = 4
                    },
                    new {
                    ColumnName = "ContactNo",
                    DisplayName = "Contact No",
                    IsVisible = true,
                    DisplayOrder = 5
                    }
                };
                data.Url = "visitorsdiary";
                data.FormId = 1004;
                return data;
            } catch (System.Exception) {

                throw;
            }
        }

        public dynamic getDepartmentWiseVisitorsCountDaily (long departmentid, DateTime frmDate, DateTime toDate) {
            try {
                dynamic result = new ExpandoObject ();
                var department = this.context.Department.Find (x => x.Id == departmentid).FirstOrDefault ();
                result.Details = this.context.Visitor.Aggregate ()
                    .Match (x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays (-1) && x.DepartmentId == departmentid)
                    .Group (x => new {
                            DepartmentId = x.DepartmentId,
                                VisitDate = new BsonDocument { { "Month", new BsonDocument ("$month", "$VisitDate") }, { "Day", new BsonDocument ("$dayOfMonth", "$VisitDate") }, { "Year", new BsonDocument ("$year", "$VisitDate") }, { "Role", "$Role" },
                                }
                        },
                        x => new {
                            DepartmentId = x.First ().DepartmentId,
                                VisitDate = x.First ().VisitDate,
                                Count = x.Sum (s => 1)
                        }
                    )
                    .ToList ();

                result.Department = department.DepartmentCode;

                return result;
            } catch (System.Exception) {

                throw;
            }
        }

        public dynamic getDepartmentWiseVisitorsCountDaily (DateTime frmDate, DateTime toDate) {
            try {
                dynamic result = new ExpandoObject ();
                var data = this.context.Visitor.Aggregate ()
                    .Match (x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays (-1))
                    .Group (new BsonDocument { { "_id", new BsonDocument { { "month", new BsonDocument ("$month", "$VisitDate") }, { "day", new BsonDocument ("$dayOfMonth", "$VisitDate") }, { "year", new BsonDocument ("$year", "$VisitDate") } } }, { "Count", new BsonDocument ("$sum", 1) } })
                    .ToList ();

                if (data.Count > 0) {
                    result.Details = this.prepareChartData (data);
                } else {
                    result.Details = new List<dynamic> ();
                }

                result.Department = "All Departments";

                return result;
            } catch (System.Exception) {

                throw;
            }
        }

        public dynamic getDepartmentWiseVisitorsCountMonthly (long departmentid, DateTime frmDate, DateTime toDate) {
            try {
                dynamic result = new ExpandoObject ();
                var department = this.context.Department.Find (x => x.Id == departmentid).FirstOrDefault ();
                result.Details = this.context.Visitor.Aggregate ()
                    .Match (x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays (-1) && x.DepartmentId == departmentid)
                    .Group (x => new {
                            DepartmentId = x.DepartmentId,
                                VisitDate = new BsonDocument { { "Month", new BsonDocument ("$month", "$VisitDate") }, { "Year", new BsonDocument ("$year", "$VisitDate") }, { "Role", "$Role" },
                                }
                        },
                        x => new {
                            DepartmentId = x.First ().DepartmentId,
                                VisitDate = x.First ().VisitDate,
                                Count = x.Sum (s => 1)
                        }
                    )
                    .ToList ();

                result.Department = department.DepartmentCode;

                return result;
            } catch (System.Exception) {

                throw;
            }
        }

        public dynamic getDepartmentWiseVisitorsCountMonthly (DateTime frmDate, DateTime toDate) {
            try {
                dynamic result = new ExpandoObject ();
                var data = this.context.Visitor.Aggregate ()
                    .Match (x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays (-1))
                    .Group (new BsonDocument { { "_id", new BsonDocument { { "month", new BsonDocument ("$month", "$VisitDate") }, { "year", new BsonDocument ("$year", "$VisitDate") } } }, { "Count", new BsonDocument ("$sum", 1) } })
                    .ToList ();

                if (data.Count > 0) {
                    result.Details = this.prepareChartData (data);
                } else {
                    result.Details = new List<dynamic> ();
                }

                result.Department = "All Departments";

                return result;
            } catch (System.Exception) {

                throw;
            }
        }

        public dynamic getDepartmentWiseVisitorsCountYearly (long departmentid, DateTime frmDate, DateTime toDate) {
            try {
                dynamic result = new ExpandoObject ();
                var department = this.context.Department.Find (x => x.Id == departmentid).FirstOrDefault ();
                result.Details = this.context.Visitor.Aggregate ()
                    .Match (x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays (-1) && x.DepartmentId == departmentid)
                    .Group (x => new {
                            DepartmentId = x.DepartmentId,
                                VisitDate = new BsonDocument { { "Year", new BsonDocument ("$year", "$VisitDate") }, { "Role", "$Role" },
                                }
                        },
                        x => new {
                            DepartmentId = x.First ().DepartmentId,
                                VisitDate = x.First ().VisitDate,
                                Count = x.Sum (s => 1)
                        }
                    )
                    .ToList ();

                result.Department = department.DepartmentCode;

                return result;
            } catch (System.Exception) {

                throw;
            }
        }

        public dynamic getDepartmentWiseVisitorsCountYearly (DateTime frmDate, DateTime toDate) {
            try {
                dynamic result = new ExpandoObject ();
                var data = this.context.Visitor.Aggregate ()
                    .Match (x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays (-1))
                    .Group (new BsonDocument { { "_id", new BsonDocument { { "year", new BsonDocument ("$year", "$VisitDate") } } }, { "Count", new BsonDocument ("$sum", 1) } })
                    .ToList ();

                if (data.Count > 0) {
                    result.Details = this.prepareChartData (data);
                } else {
                    result.Details = new List<dynamic> ();
                }

                result.Department = "All Departments";

                return result;
            } catch (System.Exception) {

                throw;
            }
        }

        public async Task<dynamic> getDepartmentWisePendingWorksCount () {
            try {
                dynamic result = new List<dynamic> ();
                var visitor = await this.context.Visitor.Aggregate ()
                    .Group (
                        x => new {
                            DepartmentId = x.DepartmentId
                        },
                        x => new {
                            DepartmentId = x.First ().DepartmentId,
                                Count = x.Sum (s => 1)
                        }
                    )
                    .ToListAsync ();

                if (visitor.Count > 0) {
                    visitor.ForEach (v => {
                        var department = this.context.Department.Find (x => x.Id == v.DepartmentId).FirstOrDefault ();
                        result.Add (new {
                            Department = department.DepartmentCode,
                                Count = v.Count
                        });
                    });
                }
                return result;
            } catch (System.Exception) {

                throw;
            }
        }

        public async Task<dynamic> getPendinWorksByDepartment (long departmentid) {
            try {
                var result = await this.context.Visitor.Aggregate ()
                    .Match (x => x.DepartmentId == departmentid && x.IsWorkDone == false)
                    .ToListAsync ();

                return result;
            } catch (System.Exception) {

                throw;
            }
        }

        public async Task<dynamic> UpdateWorksStatus (long VisitorId) {
            try {
                var update = Builders<Visitor>.Update.Set (e => e.IsWorkDone, true);
                var result = await this.context.Visitor.FindOneAndUpdateAsync (e => e.Id == VisitorId, update);

                if (result != null) {
                    return new {
                    status = "Ok",
                    id = VisitorId
                    };
                } else {
                    throw new ApplicationException ("Failed update the visitor...!");
                }
            } catch (System.Exception) {

                throw;
            }
        }

        private dynamic prepareChartData (dynamic array) {
            try {
                var result = new List<dynamic> ();
                foreach (var item in array) {
                    result.Add (new {
                        VisitDate = item["_id"],
                            Count = item["Count"]
                    });
                }
                return result;
            } catch (System.Exception) {

                throw;
            }
        }
        public async Task<Visitor> Get (long id) {
            try {
                var user = await this.context.Visitor.Find (x => x.Id == id).FirstOrDefaultAsync ();
                if (user is null) {
                    throw new ApplicationException ("Visitor not found...!");
                }
                return user;
            } catch (System.Exception) {

                throw;
            }
        }

        public async Task<dynamic> Update (long id, Visitor visitor) {
            try {
                if (id != 0) {
                    var update = Builders<Visitor>.Update.Set (e => e.ContactNo, visitor.ContactNo)
                        .Set (e => e.DepartmentId, visitor.DepartmentId)
                        .Set (e => e.NicNo, visitor.NicNo)
                        .Set (e => e.Purpose, visitor.Purpose);
                    var result = await this.context.Visitor.FindOneAndUpdateAsync (e => e.Id == id, update);

                    if (result != null) {
                        return new {
                        status = "Ok",
                        id = id
                        };
                    } else {
                        throw new ApplicationException ("Failed update the visitor...!");
                    }
                } else {
                    if (!(visitor is null)) {
                        try {

                            var lastObj = this.context.Visitor.Find (x => x.VisitDate >= DateTime.Now.Date && x.VisitDate < DateTime.Now.Date.AddDays (1))
                                .SortByDescending (d => d.SeqId)
                                .Limit (1)
                                .FirstOrDefault ();
                            var seqId = 1;
                            if (!(lastObj is null)) {
                                seqId = lastObj.SeqId + 1;
                            }
                            var dep = this.context.Department.Find (x => x.Id == visitor.DepartmentId).FirstOrDefault ();
                            var year = visitor.VisitDate.Year;
                            var month = visitor.VisitDate.Month;
                            var day = visitor.VisitDate.Day;
                            var token = dep.DepartmentCode + "/" + year + month + day + "/" + seqId;
                            var newId = this.common.GetNewId (1004);
                            visitor.Id = newId;
                            visitor.SeqId = seqId;
                            visitor.VisitorToken = token;
                            await this.context.Visitor.InsertOneAsync (visitor);
                            return new {
                                status = "Ok",
                                    id = newId
                            };
                        } catch (System.Exception) {

                            throw;
                        }
                    } else {
                        throw new ArgumentNullException (nameof (visitor));
                    }
                }
            } catch (System.Exception) {

                throw;
            }
        }
    }
}
