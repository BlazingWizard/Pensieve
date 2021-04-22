using System.Collections.Generic;
using System.Threading.Tasks;
using Pensive.Data.Entities;

namespace Pensive.Data.Repositories.Interfaces
{
    public interface IReviewRepository
    {
        Task<Review> GetByIdAsync(int id);

        Task<List<Review>> GetAllAsync();

        Task CreateAsync(Review review);
        Task DeleteAsync(Review toReviewEntity);
        Task UpdateAsync(Review reviewModel);
    }
}