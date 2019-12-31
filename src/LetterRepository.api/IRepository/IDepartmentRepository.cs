using System.Threading.Tasks;
using LetterRepository.api.Models;

namespace LetterRepository.api.IRepository
{
    public interface IDepartmentRepository
    {
        Task<Results> Get(int start, int limit, string filter);
        Task<dynamic> GetAsListValue();
        Task<Department> Get(long id);
        Task<dynamic> Add(Department department);
        Task<dynamic> Update(long id, Department department);
        Task<dynamic> Remove(long id);
    }
}
