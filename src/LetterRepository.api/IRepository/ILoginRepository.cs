using System.Collections.Generic;
using System.Threading.Tasks;
using LetterRepository.api.Models;

namespace LetterRepository.api.IRepository
{
    public interface ILoginRepository
    {
        Task<IEnumerable<Login>> Get();
        Task<Login> Get(long userId);
        dynamic Authenticate(string username, string password);
        dynamic Logout(string token);
    }
}
