using System;
using System.Threading.Tasks;
using LetterRepository.api.Models;

namespace LetterRepository.api.IRepository {
    public interface IVisitorRepository {
        Task<Results> Get (int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate);
        Task<Visitor> Get (long id);
        Task<dynamic> Update (long id, Visitor visitor);
        dynamic getDepartmentWiseVisitorsCountDaily (DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountDaily (long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountMonthly (long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountMonthly (DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountYearly (long departmentid, DateTime frmDate, DateTime toDate);
        dynamic getDepartmentWiseVisitorsCountYearly (DateTime frmDate, DateTime toDate);
        Task<dynamic> UpdateWorksStatus (long VisitorId);
        Task<dynamic> getPendinWorksByDepartment (long departmentid);
        Task<dynamic> getDepartmentWisePendingWorksCount ();
    }
}
