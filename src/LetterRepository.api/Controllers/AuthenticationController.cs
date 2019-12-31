using LetterRepository.api.IRepository;
using LetterRepository.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LetterRepository.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly ILoginRepository _loginRespository;

        public AuthenticationController(ILoginRepository loginRespository)
        {
            _loginRespository = loginRespository;
        }

        [AllowAnonymous]
        [HttpGet("authenticate")]
        public dynamic Authenticate(string UserName, string Password)
        {
            //[FromBody]dynamic userParam
            var user = _loginRespository.Authenticate(UserName, Password);
            return user;
        }

        [HttpGet("Logout")]
        public dynamic Logout(string token)
        {
            return _loginRespository.Logout(token);
        }
    }
}
