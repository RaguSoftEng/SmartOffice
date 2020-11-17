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

namespace LetterRepository.api.Models.Repository
{
    public class VisitRepository : IVisitRepository
    {
        private readonly ObjectContext context = null;
        private readonly ICommonRepository common = null;
        public VisitRepository(IOptions<Settings> settings, ICommonRepository common)
        {
            this.context = new ObjectContext(settings);
            this.common = common;
        }
        public dynamic getDepartmentWiseVisitorsCountDaily(long departmentid, DateTime frmDate, DateTime toDate)
        {
            try
            {
                dynamic result = new ExpandoObject();
                var department = this.context.Department.Find(x => x.Id == departmentid).FirstOrDefault();
                result.Details = this.context.Visit.Aggregate()
                    .Match(x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1) && x.DepartmentId == departmentid)
                    .Group(x => new
                    {
                        DepartmentId = x.DepartmentId,
                        VisitDate = new BsonDocument { { "Month", new BsonDocument ("$month", "$VisitDate") }, { "Day", new BsonDocument ("$dayOfMonth", "$VisitDate") }, { "Year", new BsonDocument ("$year", "$VisitDate") }, { "Role", "$Role" },
                                }
                    },
                        x => new
                        {
                            DepartmentId = x.First().DepartmentId,
                            VisitDate = x.First().VisitDate,
                            Count = x.Sum(s => 1)
                        }
                    )
                    .ToList();

                result.Department = department.DepartmentCode;

                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public dynamic getDepartmentWiseVisitorsCountDaily(DateTime frmDate, DateTime toDate)
        {
            try
            {
                dynamic result = new ExpandoObject();
                var data = this.context.Visit.Aggregate()
                    .Match(x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1))
                    .Group(new BsonDocument { { "_id", new BsonDocument { { "month", new BsonDocument("$month", "$VisitDate") }, { "day", new BsonDocument("$dayOfMonth", "$VisitDate") }, { "year", new BsonDocument("$year", "$VisitDate") } } }, { "Count", new BsonDocument("$sum", 1) } })
                    .Sort(new BsonDocument("_id", -1))
                    .ToList();

                if (data.Count > 0)
                {
                    result.Details = this.prepareChartData(data);
                }
                else
                {
                    result.Details = new List<dynamic>();
                }

                result.Department = "All Departments";

                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public dynamic getDepartmentWiseVisitorsCountMonthly(long departmentid, DateTime frmDate, DateTime toDate)
        {
            try
            {
                dynamic result = new ExpandoObject();
                var department = this.context.Department.Find(x => x.Id == departmentid).FirstOrDefault();
                result.Details = this.context.Visit.Aggregate()
                    .Match(x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1) && x.DepartmentId == departmentid)
                    .Group(x => new
                    {
                        DepartmentId = x.DepartmentId,
                        VisitDate = new BsonDocument { { "Month", new BsonDocument ("$month", "$VisitDate") }, { "Year", new BsonDocument ("$year", "$VisitDate") }, { "Role", "$Role" },
                                }
                    },
                        x => new
                        {
                            DepartmentId = x.First().DepartmentId,
                            VisitDate = x.First().VisitDate,
                            Count = x.Sum(s => 1)
                        }
                    )
                    .Sort(new BsonDocument("_id", -1))
                    .ToList();

                result.Department = department.DepartmentCode;

                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public dynamic getDepartmentWiseVisitorsCountMonthly(DateTime frmDate, DateTime toDate)
        {
            try
            {
                dynamic result = new ExpandoObject();
                var data = this.context.Visit.Aggregate()
                    .Match(x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1))
                    .Group(new BsonDocument { { "_id", new BsonDocument { { "month", new BsonDocument("$month", "$VisitDate") }, { "year", new BsonDocument("$year", "$VisitDate") } } }, { "Count", new BsonDocument("$sum", 1) } })
                    .Sort(new BsonDocument("_id", -1))
                    .ToList();

                if (data.Count > 0)
                {
                    result.Details = this.prepareChartData(data);
                }
                else
                {
                    result.Details = new List<dynamic>();
                }

                result.Department = "All Departments";

                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public dynamic getDepartmentWiseVisitorsCountYearly(long departmentid, DateTime frmDate, DateTime toDate)
        {
            try
            {
                dynamic result = new ExpandoObject();
                var department = this.context.Department.Find(x => x.Id == departmentid).FirstOrDefault();
                result.Details = this.context.Visit.Aggregate()
                    .Match(x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1) && x.DepartmentId == departmentid)
                    .Group(x => new
                    {
                        DepartmentId = x.DepartmentId,
                        VisitDate = new BsonDocument { { "Year", new BsonDocument ("$year", "$VisitDate") }, { "Role", "$Role" },
                                }
                    },
                        x => new
                        {
                            DepartmentId = x.First().DepartmentId,
                            VisitDate = x.First().VisitDate,
                            Count = x.Sum(s => 1)
                        }
                    )
                    .Sort(new BsonDocument("_id", -1))
                    .ToList();

                result.Department = department.DepartmentCode;

                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public dynamic getDepartmentWiseVisitorsCountYearly(DateTime frmDate, DateTime toDate)
        {
            try
            {
                dynamic result = new ExpandoObject();
                var data = this.context.Visit.Aggregate()
                    .Match(x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1))
                    .Group(new BsonDocument { { "_id", new BsonDocument { { "year", new BsonDocument("$year", "$VisitDate") } } }, { "Count", new BsonDocument("$sum", 1) } })
                   .Sort(new BsonDocument("_id", -1))
                    .ToList();

                if (data.Count > 0)
                {
                    result.Details = this.prepareChartData(data);
                }
                else
                {
                    result.Details = new List<dynamic>();
                }

                result.Department = "All Departments";

                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public async Task<dynamic> getDepartmentWisePendingWorksCount()
        {
            try
            {
                dynamic result = new List<dynamic>();
                var visitor = await this.context.Visit
                    .Aggregate()
                    .Match(x => x.IsWorkDone == false)
                    .Group(
                        x => new
                        {
                            DepartmentId = x.DepartmentId
                        },
                        x => new
                        {
                            DepartmentId = x.First().DepartmentId,
                            Count = x.Sum(s => 1)
                        }
                    )
                    .ToListAsync();

                if (visitor.Count > 0)
                {
                    visitor.ForEach(v =>
                    {
                        var department = this.context.Department.Find(x => x.Id == v.DepartmentId).FirstOrDefault();
                        result.Add(new
                        {
                            Department = department.DepartmentCode,
                            Count = v.Count
                        });
                    });
                }
                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public async Task<dynamic> getPendinWorksByDepartment(long departmentid)
        {
            try
            {
                var result = await this.context.Visit.Aggregate()
                    .Match(x => x.DepartmentId == departmentid && x.IsWorkDone == false)
                    .ToListAsync();

                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        public async Task<dynamic> UpdateWorksStatus(string visitId)
        {
            try
            {
                var update = Builders<Visit>.Update.Set(e => e.IsWorkDone, true)
                .Set(e => e.Progress, "Finished");
                var result = await this.context.Visit.FindOneAndUpdateAsync(e => e.ObId == visitId, update);

                if (result != null)
                {
                    return new
                    {
                        status = "Ok",
                        id = visitId
                    };
                }
                else
                {
                    throw new ApplicationException("Failed update the visitor...!");
                }
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        private dynamic prepareChartData(dynamic array)
        {
            try
            {
                var result = new List<dynamic>();
                foreach (var item in array)
                {
                    result.Add(new
                    {
                        VisitDate = item["_id"],
                        Count = item["Count"]
                    });
                }
                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public async Task<dynamic> Update(string id, Visit visit)
        {
            try
            {
                if (id != null)
                {
                    var update = Builders<Visit>.Update.Set(e => e.Purpose, visit.Purpose)
                    .Set(e => e.IsWorkDone, visit.IsWorkDone)
                    .Set(e => e.Progress, visit.Progress);
                    var result = await this.context.Visit.FindOneAndUpdateAsync(e => e.ObId == id, update);

                    if (result != null)
                    {
                        return new
                        {
                            status = "Ok",
                            id = id
                        };
                    }
                    else
                    {
                        throw new ApplicationException("Failed update the visitor...!");
                    }
                }
                else
                {
                    if (!(visit is null))
                    {
                        try
                        {

                            var lastObj = this.context.Visit.Find(x => x.VisitDate >= DateTime.Now.Date && x.VisitDate < DateTime.Now.Date.AddDays(1))
                                .SortByDescending(d => d.SeqId)
                                .Limit(1)
                                .FirstOrDefault();
                            var seqId = 1;
                            if (!(lastObj is null))
                            {
                                seqId = lastObj.SeqId + 1;
                            }
                            var dep = this.context.Department.Find(x => x.Id == visit.DepartmentId).FirstOrDefault();
                            var year = visit.VisitDate.Year;
                            var month = visit.VisitDate.Month;
                            var day = visit.VisitDate.Day;
                            var token = dep.DepartmentCode + "/" + year + month + day + "/" + seqId;
                            visit.SeqId = seqId;
                            visit.VisitorToken = token;
                            await this.context.Visit.InsertOneAsync(visit);
                            return new
                            {
                                status = "Ok",
                                id = visit.ObId
                            };
                        }
                        catch (System.Exception)
                        {

                            throw;
                        }
                    }
                    else
                    {
                        throw new ArgumentNullException(nameof(visit));
                    }
                }
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        public async Task<Results> Get(string filter, bool isWorkDone, long visitorId, long depId, DateTime frmDate, DateTime toDate)
        {
            try
            {
                var visits = new List<Visit>();
                var data = new Results();
                if (filter != "null")
                {
                    if (depId > 0)
                    {
                        visits = await this.context.Visit.Find(x =>
                            (
                                x.VisitorId == visitorId
                                && x.DepartmentId.Equals(depId)
                                && x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                                && x.IsWorkDone == isWorkDone
                            ) &&
                            (
                                x.Description.Contains(filter)
                            )
                        )
                        .ToListAsync();
                    }
                    else
                    {
                        visits = await this.context.Visit.Find(x =>
                            (
                                x.VisitorId == visitorId
                                && x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                                && x.IsWorkDone == isWorkDone
                            ) &&
                            (
                                x.Description.Contains(filter)
                            )
                        )
                        .ToListAsync();
                    }

                }
                else
                {
                    if (depId > 0)
                    {
                        visits = await this.context.Visit.Find(x =>
                        (
                            x.VisitorId == visitorId
                            && x.DepartmentId.Equals(depId)
                            && x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                            && x.IsWorkDone == isWorkDone
                        )).ToListAsync();
                    }
                    else
                    {
                        visits = await this.context.Visit.Find(x =>
                        (
                            x.VisitorId == visitorId
                            && x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                            && x.IsWorkDone == isWorkDone
                        )).ToListAsync();
                    }

                }

                if (visits is null)
                {
                    visits = new List<Visit>();
                }
                else
                {
                    if (visits.Count > 0)
                    {
                        visits.ForEach(v =>
                        {
                            var department = this.context.Department.Find(e => e.Id == v.DepartmentId).FirstOrDefault();
                            if (department != null)
                            {
                                v.Department = department.DepartmentCode;
                            }
                        });
                    }
                }

                data.Details = visits;
                data.Columns = new List<dynamic> {
                    new {
                    ColumnName = "Department",
                    DisplayName = "Department",
                    IsVisible = true,
                    DisplayOrder = 1
                    },
                    new {
                    ColumnName = "VisitDate",
                    DisplayName = "Visit Date",
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
                    ColumnName = "Progress",
                    DisplayName = "Progress",
                    IsVisible = true,
                    DisplayOrder = 4
                    }
                };
                data.Url = "visit";
                data.FormId = 1005;
                return data;
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        public async Task<Visit> Get(string id)
        {
            try
            {
                var visit = await this.context.Visit.Find(x => x.ObId == id).FirstOrDefaultAsync();
                if (visit is null)
                {
                    throw new ApplicationException("Visit not found...!");
                }
                else
                {
                    var department = this.context.Department.Find(e => e.Id == visit.DepartmentId).FirstOrDefault();
                    if (department != null)
                    {
                        visit.Department = department.DepartmentCode;
                    }
                }
                return visit;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public Task<Results> getDepartmentWiseVisitors(long depId, DateTime frmDate, DateTime toDate)
        {
            try
            {
                dynamic result = new ExpandoObject();
                var data = this.context.Visit.Find(x => x.DepartmentId == depId && x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1))
                    .ToList();

                if (data.Count > 0)
                {
                    result.Details = this.prepareChartData(data);
                }

                return result;
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        public Results VisitReports(int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate, int filtertype)
        {
            try
            {

                long count = 0;
                var depVisitors = new List<Visit>();
                if (depId != 0)
                {
                    // count = this.context.Visit.CountDocuments(x =>
                    //                     x.DepartmentId == depId
                    //                     && x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                    //                     && ((filtertype == 1) || x.IsWorkDone == (filtertype == 2))
                    //                  );
                    depVisitors = this.context.Visit.Find(x =>
                                            x.DepartmentId == depId
                                            && x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                                            && ((filtertype == 1) || x.IsWorkDone == (filtertype == 2))
                                        )
                                        // .Skip(start)
                                        // .Limit(limit)
                                        .ToList();
                }
                else
                {
                    // count = this.context.Visit.CountDocuments(x =>
                    //                     x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                    //                     && ((filtertype == 1) || x.IsWorkDone == (filtertype == 2))
                    //                  );
                    depVisitors = this.context.Visit.Find(x =>
                                            x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                                            && ((filtertype == 1) || x.IsWorkDone == (filtertype == 2))
                                        )
                                        // .Skip(start)
                                        // .Limit(limit)
                                        .ToList();
                }

                var results = new List<dynamic>();
                foreach (var depVisitor in depVisitors)
                {
                    var visitor = new Visitor();
                    if (filter != "null")
                    {

                        visitor = this.context.Visitor.Find(x =>
                            (x.Id == depVisitor.VisitorId)
                            &&
                            (
                                x.FullName.Contains(filter) ||
                                x.Address.Contains(filter) ||
                                x.NicNo.Contains(filter) ||
                                x.ContactNo.Contains(filter)
                            )
                            )
                            .FirstOrDefault();
                    }
                    else
                    {
                        visitor = this.context.Visitor.Find(x => x.Id == depVisitor.VisitorId).FirstOrDefault();
                    }

                    var title = this.context.ListValue.Find(e => e.ListId == 4 && e.ListValueId == visitor.Title).FirstOrDefault();
                    var fullName = "";
                    if (title != null && title.Value != "")
                    {
                        fullName = title.Value + "." + visitor.FullName;
                    }

                    var department = this.context.Department.Find(x => x.Id == depVisitor.DepartmentId).FirstOrDefault();
                    results.Add(new
                    {
                        FullName = fullName,
                        NicNo = visitor.NicNo,
                        ContactNo = visitor.ContactNo,
                        Department = department.DepartmentName,
                        NoOfDays = Convert.ToString((DateTime.Now - depVisitor.VisitDate).Days)
                    });
                }


                var data = new Results();

                data.Details = results;
                var columns = new List<dynamic> {
                    new {
                    ColumnName = "FullName",
                    DisplayName = "Name",
                    IsVisible = true,
                    DisplayOrder = 1
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
                    },
                    new {
                    ColumnName = "Department",
                    DisplayName = "Department",
                    IsVisible = true,
                    DisplayOrder = 6
                    }
                };

                if (filtertype == 3)
                {
                    columns.Add(new
                    {
                        ColumnName = "NoOfDays",
                        DisplayName = "No of days",
                        IsVisible = true,
                        DisplayOrder = 7
                    });
                }

                data.Columns = columns;

                data.Url = "visitorsdiary";
                data.FormId = 1004;
                data.Count = count;
                return data;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
    }
}