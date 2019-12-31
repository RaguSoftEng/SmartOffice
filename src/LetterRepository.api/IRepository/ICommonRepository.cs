using System.Collections.Generic;
using System.Threading.Tasks;
using LetterRepository.api.Models;

namespace LetterRepository.api.IRepository {
    public interface ICommonRepository {
        Task<IEnumerable<ParameterList>> GetParameterList ();
        Task<IEnumerable<Pair>> GetListValues (int listId, bool isaParameter);
        Task<dynamic> updateListValue (ListValue obj);
        long GetNewId (int formId);
    }
}
