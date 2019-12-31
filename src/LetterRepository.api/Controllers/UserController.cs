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
    public class UserController : ControllerBase {
        private readonly IUserRepository _UserRespository;

        public UserController (IUserRepository userRespository) {
            this._UserRespository = userRespository;
        }

        [HttpGet ("{start}/{limit}/{filter}")]
        public async Task<Results> Get (int start, int limit, string filter) {
            return await _UserRespository.Get (start, limit, filter);
        }

        [HttpGet ("{id}")]
        public async Task<dynamic> Get (long id) {
            return await _UserRespository.Get (id);
        }

        [HttpPost ("{id}")]
        public async Task<dynamic> Post ([FromBody] User user, long id) {
            if (id > 0) {
                return await _UserRespository.Update (id, user);
            } else {
                return await _UserRespository.Add (user);
            }
        }

        [HttpPut ("put/{id}")]
        public async Task<dynamic> Put ([FromBody] User user, long id) {
            return await _UserRespository.Update (id, user);
        }

        [HttpDelete ("{id}")]
        public async Task<dynamic> Delete (long id) {
            await _UserRespository.Remove (id);
            return new { Status = "Ok" };
        }
    }
}
