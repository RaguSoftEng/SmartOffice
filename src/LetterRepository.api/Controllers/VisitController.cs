using System;
using System.Threading.Tasks;
using LetterRepository.api.IRepository;
using LetterRepository.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace LetterRepository.api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class VisitController : ControllerBase
    {
        private readonly IVisitRepository visitRepository;

        public VisitController(IVisitRepository _visitRepository)
        {
            this.visitRepository = _visitRepository;
        }

        [HttpGet("{filter}/{isWorkDone}/{visitorId}/{depId}/{frmDate}/{toDate}")]
        public async Task<Results> Get(string filter, bool isWorkDone, long visitorId, long depId, DateTime frmDate, DateTime toDate)
        {
            return await this.visitRepository.Get(filter, isWorkDone, visitorId, depId, frmDate, toDate);
        }

        [HttpGet("{id}")]
        public async Task<Visit> Get(string id)
        {
            var obId = (!String.IsNullOrEmpty(id))? new ObjectId(id):ObjectId.Empty;
            return await this.visitRepository.Get(obId);
        }

        [HttpPost("{id}")]
        public async Task<dynamic> Post([FromBody] Visit visit, [FromQueryAttribute] string id)
        {
            var obId = (!String.IsNullOrEmpty(id))? new ObjectId(id):ObjectId.Empty;
            return await this.visitRepository.Update(obId, visit);
        }

        [HttpGet("chart/{departmentId}/{filterType}/{frmDate}/{toDate}")]
        public dynamic getDepartmentWiseVisitorsCount(long departmentId, int filterType, DateTime frmDate, DateTime toDate)
        {
            if (filterType == 1)
            {
                if (departmentId > 0)
                {
                    return this.visitRepository.getDepartmentWiseVisitorsCountYearly(departmentId, frmDate, toDate);
                }
                else
                {
                    return this.visitRepository.getDepartmentWiseVisitorsCountYearly(frmDate, toDate);
                }
            }
            else if (filterType == 2)
            {
                if (departmentId > 0)
                {
                    return this.visitRepository.getDepartmentWiseVisitorsCountMonthly(departmentId, frmDate, toDate);
                }
                else
                {
                    return this.visitRepository.getDepartmentWiseVisitorsCountMonthly(frmDate, toDate);
                }
            }
            else
            {
                if (departmentId > 0)
                {
                    return this.visitRepository.getDepartmentWiseVisitorsCountDaily(departmentId, frmDate, toDate);
                }
                else
                {
                    return this.visitRepository.getDepartmentWiseVisitorsCountDaily(frmDate, toDate);
                }
            }
        }

        [HttpGet("pendingWorks/{departmentid}")]
        public Task<dynamic> getPendinWorksByDepartment(long departmentid)
        {
            return this.visitRepository.getPendinWorksByDepartment(departmentid);
        }

        [HttpGet("pendingWorksChart")]
        public Task<dynamic> getDepartmentWisePendingWorksCount()
        {
            return this.visitRepository.getDepartmentWisePendingWorksCount();
        }

        [HttpPost("worksStatus/{id}")]
        public async Task<dynamic> UpdateWorksStatus(string id)
        {
            var obId = (!String.IsNullOrEmpty(id))? new ObjectId(id):ObjectId.Empty;
            return await this.visitRepository.UpdateWorksStatus(obId);
        }
    }
}