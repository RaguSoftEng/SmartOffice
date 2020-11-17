using System;
using System.Threading.Tasks;
using LetterRepository.api.Models;

namespace LetterRepository.api.IRepository
{
    public interface IVisitorRepository
    {
        Results Get(int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate, int filtertype);
        Task<Visitor> Get(long id);
        Task<Visitor> FindByNIC(string nic);
        Task<dynamic> Update(long id, Visitor visitor);
    }
}
