using System;
using System.Threading.Tasks;
using LetterRepository.api.Models;
using MongoDB.Bson;

namespace LetterRepository.api.IRepository
{
    public interface IVisitRepository
    {
        Task<Results> Get(string filter, bool isWorkDone, long visitorId, long depId, DateTime frmDate, DateTime toDate);
        Task<Visit> Get(string id);
        Task<dynamic> Update(string id, Visit visitor);
        dynamic getDepartmentWiseVisitorsCountDaily(DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountDaily(long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountMonthly(long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountMonthly(DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountYearly(long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountYearly(DateTime frmDate, DateTime toDate);
        Task<dynamic> UpdateWorksStatus(string visitId);
        Task<dynamic> getPendinWorksByDepartment(long departmentid);
        Task<dynamic> getDepartmentWisePendingWorksCount();
        Task<Results> getDepartmentWiseVisitors(long depId, DateTime frmDate, DateTime toDate);
        Results VisitReports(int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate, int filtertype);
    }
}