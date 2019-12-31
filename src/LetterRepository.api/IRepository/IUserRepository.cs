using System.Threading.Tasks;
using LetterRepository.api.Models;
using MongoDB.Driver;

namespace LetterRepository.api.IRepository
{
    public interface IUserRepository
    {
        Task<Results> Get(int start, int limit, string filter);
        Task<User> Get(long id);
        Task<dynamic> Add(User User);
        Task<dynamic> Update(long id, User User);
        Task<DeleteResult> Remove(long id);
    }
}
