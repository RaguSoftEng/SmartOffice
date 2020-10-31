using System;
using System.Threading.Tasks;
using LetterRepository.api.IRepository;
using LetterRepository.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LetterRepository.api.Controllers
{
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]
    public class VisitorController : ControllerBase {
        private readonly IVisitorRepository visitorRepository;

        public VisitorController (IVisitorRepository visitorRepository) {
            this.visitorRepository = visitorRepository;
        }

        [HttpGet ("{start}/{limit}/{filter}/{depId}/{frmDate}/{toDate}")]
        public Results Get (int start, int limit, string filter,long depId, DateTime frmDate, DateTime toDate) {
            return this.visitorRepository.Get (start, limit, filter,depId,frmDate,toDate);
        }

        [HttpGet ("{id}")]
        public async Task<Visitor> Get (long id) {
            return await this.visitorRepository.Get (id);
        }

        [HttpGet ("findbynic/{nic}")]
        public async Task<Visitor> FindByNIC(string nic) {
            return await this.visitorRepository.FindByNIC (nic);
        }

        [HttpPost ("{id}")]
        public async Task<dynamic> Post ([FromBody] Visitor visitor, long id) {
            return await this.visitorRepository.Update (id, visitor);
        }     
    }
}
