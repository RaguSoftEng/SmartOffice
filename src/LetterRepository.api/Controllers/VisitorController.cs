using System;
using System.Threading.Tasks;
using LetterRepository.api.IRepository;
using LetterRepository.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LetterRepository.api.Controllers {
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]
    public class VisitorController : ControllerBase {
        private readonly IVisitorRepository visitorRepository;

        public VisitorController (IVisitorRepository visitorRepository) {
            this.visitorRepository = visitorRepository;
        }

        [HttpGet ("{start}/{limit}/{filter}/{depId}/{frmDate}/{toDate}")]
        public async Task<Results> Get (int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate) {
            return await this.visitorRepository.Get (start, limit, filter, depId, frmDate, toDate);
        }

        [HttpGet ("{id}")]
        public async Task<Visitor> Get (long id) {
            return await this.visitorRepository.Get (id);
        }

        [HttpPost ("{id}")]
        public async Task<dynamic> Post ([FromBody] Visitor visitor, long id) {
            return await this.visitorRepository.Update (id, visitor);
        }

        [HttpGet ("chart/{departmentId}/{filterType}/{frmDate}/{toDate}")]
        public dynamic getDepartmentWiseVisitorsCount (long departmentId, int filterType, DateTime frmDate, DateTime toDate) {
            if (filterType == 1) {
                if (departmentId > 0) {
                    return this.visitorRepository.getDepartmentWiseVisitorsCountYearly (departmentId, frmDate, toDate);
                } else {
                    return this.visitorRepository.getDepartmentWiseVisitorsCountYearly (frmDate, toDate);
                }
            } else if (filterType == 2) {
                if (departmentId > 0) {
                    return this.visitorRepository.getDepartmentWiseVisitorsCountMonthly (departmentId, frmDate, toDate);
                } else {
                    return this.visitorRepository.getDepartmentWiseVisitorsCountMonthly (frmDate, toDate);
                }
            } else {
                if (departmentId > 0) {
                    return this.visitorRepository.getDepartmentWiseVisitorsCountDaily (departmentId, frmDate, toDate);
                } else {
                    return this.visitorRepository.getDepartmentWiseVisitorsCountDaily (frmDate, toDate);
                }
            }
        }

        [HttpGet ("pendingWorks/{departmentid}")]
        public Task<dynamic> getPendinWorksByDepartment (long departmentid) {
            return this.visitorRepository.getPendinWorksByDepartment (departmentid);
        }

        [HttpGet ("pendingWorksChart")]
        public Task<dynamic> getDepartmentWisePendingWorksCount () {
            return this.visitorRepository.getDepartmentWisePendingWorksCount ();
        }

        [HttpPost ("worksStatus/{id}")]
        public async Task<dynamic> UpdateWorksStatus (long id) {
            return await this.visitorRepository.UpdateWorksStatus (id);
        }
    }
}
