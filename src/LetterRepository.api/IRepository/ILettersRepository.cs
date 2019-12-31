using System;
using System.Threading.Tasks;
using LetterRepository.api.Models;

namespace LetterRepository.api.IRepository
{
    public interface ILettersRepository
    {
        Task<Results> Get(int start, int limit, string filter, long depId, DateTime frmDate, DateTime toDate);
        Task<Letter> Get(long id);
        Task<dynamic> Add(Letter letter);
        Task<dynamic> Update(long id, Letter letter);
        Task<dynamic> Remove(long id);
    }
}
