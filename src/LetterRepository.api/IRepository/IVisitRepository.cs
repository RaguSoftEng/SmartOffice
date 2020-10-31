using System;
using System.Threading.Tasks;
using LetterRepository.api.Models;
using MongoDB.Bson;

namespace LetterRepository.api.IRepository
{
    public interface IVisitRepository
    {
        Task<Results> Get (string filter,bool isWorkDone,long visitorId, long depId, DateTime frmDate, DateTime toDate);
        Task<Visit> Get (ObjectId id);
        Task<dynamic> Update (ObjectId id, Visit visitor);
        dynamic getDepartmentWiseVisitorsCountDaily (DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountDaily (long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountMonthly (long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountMonthly (DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountYearly (long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountYearly (DateTime frmDate, DateTime toDate);
        Task<dynamic> UpdateWorksStatus (ObjectId visitId);
        Task<dynamic> getPendinWorksByDepartment (long departmentid);
        Task<dynamic> getDepartmentWisePendingWorksCount ();     

        Task<Results> getDepartmentWiseVisitors (long depId, DateTime frmDate, DateTime toDate);    
    }
}