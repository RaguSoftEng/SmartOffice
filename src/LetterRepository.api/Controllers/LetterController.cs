using System;
using System.Linq;
using System.Threading.Tasks;
using LetterRepository.api.IRepository;
using LetterRepository.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LetterRepository.api.Controllers {
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]
    public class LetterController : ControllerBase {
        private readonly ILettersRepository letterRepository;
        public LetterController (ILettersRepository LetterRepository) {
            this.letterRepository = LetterRepository;
        }

        [HttpGet ("{start}/{limit}/{filter}/{depId}/{frmDate}/{toDate}")]
        public async Task<Results> Get (int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate) {
            return await this.letterRepository.Get (start, limit, filter, depId, frmDate, toDate);
        }

        [HttpGet ("{id}")]
        public async Task<Letter> Get (long id) {
            return await this.letterRepository.Get (id);
        }

        [HttpPost ("{id}")]
        public async Task<dynamic> Post ([FromBody] Letter letter, long id) {
            if (id > 0) {
                return await this.letterRepository.Update (id, letter);
            } else {
                var currentUser = HttpContext.User;
                if (currentUser.HasClaim (c => c.Type == "userid")) {
                    var userId = currentUser.Claims.FirstOrDefault (c => c.Type == "userid").Value;
                    letter.CreatedUserId = Convert.ToInt64 (userId);
                }
                return await this.letterRepository.Add (letter);
            }
        }

        [HttpDelete ("{id}")]
        public async Task<dynamic> Delete (long id) {
            await this.letterRepository.Remove (id);
            return new { Status = "Ok" };
        }
    }
}
