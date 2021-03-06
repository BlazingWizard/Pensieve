using System.Collections.Generic;
using System.Threading.Tasks;
using Pensive.Data.Entities;
using Pensive.Services.Models;

namespace Pensive.Services.Interfaces
{
    public interface IReviewService
    {
        Task<ReviewModel> GetAsync(int id);

        Task<List<ReviewModel>> GetAllAsync();
        
        Task<ReviewModel> CreateAsync(ReviewModel reviewModel);

        Task UpdateAsync(ReviewModel reviewModel);

        Task DeleteAsync(int id);
    }
}