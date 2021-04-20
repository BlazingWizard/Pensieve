using System.Collections.Generic;
using System.Threading.Tasks;
using Pensive.Services.Models;

namespace Pensive.Services.Interfaces
{
    public interface IReviewService
    {
        Task<ReviewModel> GetAsync(int id);

        Task<List<ReviewModel>> GetAllAsync();
    }
}