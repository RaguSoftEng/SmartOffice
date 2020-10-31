using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LetterRepository.api.DbModels;
using LetterRepository.api.IRepository;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LetterRepository.api.Models.Repository
{
    public class VisitorRepository : IVisitorRepository
    {

        private readonly ObjectContext context = null;
        private readonly ICommonRepository common = null;
        public VisitorRepository(IOptions<Settings> settings, ICommonRepository common)
        {
            this.context = new ObjectContext(settings);
            this.common = common;
            this.validateOldVisitor();
        }

        public Results Get(int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate)
        {
            try
            {

                var depVisitors = new List<Visit>();
                if (depId != 0)
                {
                    depVisitors = this.context.Visit.Find(x =>
                                        x.DepartmentId == depId
                                        && x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)
                                        ).ToList();
                }
                else
                {
                    depVisitors = this.context.Visit.Find(x => x.VisitDate <= toDate.Date & x.VisitDate >= frmDate.Date.AddDays(-1)).ToList();
                }

                var visitors = new List<Visitor>();
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
                            //  .Skip(start)
                            //  .Limit(limit)
                            .FirstOrDefault();
                    }
                    else
                    {
                        visitor = this.context.Visitor.Find(x => x.Id == depVisitor.VisitorId)
                            // .Skip(start)
                            //  .Limit(limit)
                            .FirstOrDefault();
                    }

                    var title = this.context.ListValue.Find(e => e.ListId == 4 && e.ListValueId == visitor.Title).FirstOrDefault();
                    if (title != null && title.Value != "")
                    {
                        visitor.FullName = title.Value + "." + visitor.FullName;
                    }

                    visitors.Add(visitor);
                }


                var data = new Results();

                if (visitors is null)
                {
                    visitors = new List<Visitor>();
                }
                // else
                // {
                //     if (visitors.Count > 0)
                //     {
                //         visitors.ForEach(v =>
                //         {
                //             var title = this.context.ListValue.Find(e => e.ListId == 4 && e.ListValueId == v.Title).FirstOrDefault();
                //             if (title != null && title.Value != "")
                //             {
                //                 v.FullName = title.Value + "." + v.FullName;
                //             }
                //         });
                //     }
                // }

                data.Details = visitors;
                data.Columns = new List<dynamic> {
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
                    }
                };
                data.Url = "visitorsdiary";
                data.FormId = 1004;
                return data;
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        public async Task<Visitor> Get(long id)
        {
            try
            {
                var user = await this.context.Visitor.Find(x => x.Id == id).FirstOrDefaultAsync();
                if (user is null)
                {
                    throw new ApplicationException("Visitor not found...!");
                }
                return user;
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        public async Task<Visitor> FindByNIC(string nic)
        {
            try
            {
                return await this.context.Visitor.Find(x => x.NicNo.ToLower() == nic.ToLower()).FirstOrDefaultAsync();
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        public async Task<dynamic> Update(long id, Visitor visitor)
        {
            try
            {
                if (id != 0)
                {
                    var update = Builders<Visitor>.Update.Set(e => e.ContactNo, visitor.ContactNo)
                        .Set(e => e.NicNo, visitor.NicNo);
                    var result = await this.context.Visitor.FindOneAndUpdateAsync(e => e.Id == id, update);

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
                    if (!(visitor is null))
                    {
                        try
                        {
                            var newId = this.common.GetNewId(1004);
                            visitor.Id = newId;
                            visitor.CreatedDate = DateTime.Now;
                            await this.context.Visitor.InsertOneAsync(visitor);
                            return new
                            {
                                status = "Ok",
                                id = newId
                            };
                        }
                        catch (System.Exception)
                        {

                            throw;
                        }
                    }
                    else
                    {
                        throw new ArgumentNullException(nameof(visitor));
                    }
                }
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        private void validateOldVisitor()
        {
            try
            {
                var OldVisitors = this.context.OldVisitor.Find(_ => true).ToList();
                var vistitors = new List<Visitor>();
                var visits = new List<Visit>();
                if (OldVisitors.Count > 0)
                {
                    OldVisitors.ForEach(V =>
                    {
                        vistitors.Add(new Visitor
                        {
                            Id = V.Id,
                            Address = V.Address,
                            ContactNo = V.ContactNo,
                            CreatedDate = V.VisitDate,
                            FullName = V.FullName,
                            NicNo = V.NicNo,
                            Title = V.Title
                        });
                        visits.Add(new Visit
                        {
                            VisitorId = V.Id,
                            DepartmentId = V.DepartmentId,
                            IsWorkDone = V.IsWorkDone,
                            Progress = V.Progress,
                            Description = V.Purpose,
                            SeqId = V.SeqId,
                            VisitDate = V.VisitDate,
                            VisitorToken = V.VisitorToken,
                            Purpose = 0
                        });
                    });

                    if (vistitors.Count > 0)
                    {
                        this.context.Visitor.InsertManyAsync(vistitors);
                    }
                    if (visits.Count > 0)
                    {
                        this.context.Visit.InsertManyAsync(visits);
                    }

                    this.context.OldVisitor.DeleteManyAsync(_ => true);
                }
            }
            catch (System.Exception)
            {

                throw;
            }
        }
    }
}
