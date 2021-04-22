using System.Collections.Generic;
using System.Threading.Tasks;
using Pensive.Data.Entities;

namespace Pensive.Data.Repositories.Interfaces
{
    public interface IReviewTypeRepository
    {
        public Task<List<ReviewType>> GetAllAsync();

        public Task<ReviewType> GetByCodeAsync(string code);
    }
}