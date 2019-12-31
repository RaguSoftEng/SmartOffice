using System.Collections.Generic;
using System.Threading.Tasks;
using LetterRepository.api.IRepository;
using LetterRepository.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LetterRepository.api.Controllers {
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]
    public class CommonController : ControllerBase {
        private readonly ICommonRepository _commonRepository;

        public CommonController (ICommonRepository commonRepository) {
            this._commonRepository = commonRepository;
        }

        [HttpGet ("listvalue/{listId}/{isaParameter}")]
        public async Task<IEnumerable<Pair>> GetListValues (int listId, bool isaParameter) {
            return await this._commonRepository.GetListValues (listId, isaParameter);
        }

        [HttpGet ("ParameterLists")]
        public async Task<IEnumerable<ParameterList>> GetParameterList () {
            return await this._commonRepository.GetParameterList ();
        }

        [HttpPost ("{id}")]
        public async Task<dynamic> updateListValue (ListValue obj, int id) {
            return await this._commonRepository.updateListValue (obj);
        }
    }
}
