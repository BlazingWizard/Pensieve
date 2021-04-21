using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Pensive.Data.Repositories.Interfaces;
using Pensive.Services.Interfaces;
using Pensive.Services.Mappings;
using Pensive.Services.Models;

namespace Pensive.Services.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewService(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        public async Task<ReviewModel> GetAsync(int id)
        {
            var review = await _reviewRepository.GetByIdAsync(id);
            return review?.ToReviewModel();
        }

        public async Task<List<ReviewModel>> GetAllAsync()
        {
            var reviewList = await _reviewRepository.GetAllAsync();
            return reviewList.Select(r => r.ToReviewModel()).ToList();
        }
    }
}