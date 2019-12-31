using System.Threading.Tasks;
using LetterRepository.api.IRepository;
using LetterRepository.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LetterRepository.api.Controllers {
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase {
        private readonly IDepartmentRepository _departmentRepository;

        public DepartmentController (IDepartmentRepository departmentRepository) {
            _departmentRepository = departmentRepository;
        }

        [HttpGet ("{start}/{limit}/{filter}")]
        public async Task<Results> Get (int start, int limit, string filter) {
            return await _departmentRepository.Get (start, limit, filter);
        }

        [HttpGet ("{id}")]
        public async Task<Department> Get (long id) {
            return await _departmentRepository.Get (id);
        }

        [HttpGet ("ListValue")]
        public async Task<dynamic> ListValue (long id) {
            return await _departmentRepository.GetAsListValue ();
        }

        [HttpPost ("{id}")]
        public async Task<dynamic> Post ([FromBody] Department obj, long id) {
            if (id > 0) {
                return await _departmentRepository.Update (id, obj);

            } else {
                return await _departmentRepository.Add (obj);
            }
        }

        [HttpPut ("put/{id}")]
        public async Task<dynamic> Put (long id, [FromBody] Department obj) {
            return await _departmentRepository.Update (id, obj);
        }

        [HttpDelete ("{id}")]
        public async Task<dynamic> Delete (long id) {
            await _departmentRepository.Remove (id);
            return new { Status = "Ok" };
        }

    }
}
