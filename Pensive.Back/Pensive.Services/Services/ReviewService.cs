using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Pensive.Data.Entities;
using Pensive.Data.Repositories.Interfaces;
using Pensive.Services.Interfaces;
using Pensive.Services.Mappings;
using Pensive.Services.Models;

namespace Pensive.Services.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly IReviewTypeRepository _reviewTypeRepository;

        public ReviewService(IReviewRepository reviewRepository, IReviewTypeRepository reviewTypeRepository)
        {
            _reviewRepository = reviewRepository;
            _reviewTypeRepository = reviewTypeRepository;
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

        public async Task<ReviewModel> CreateAsync(ReviewModel reviewModel)
        {
            var reviewType = await GetReviewTypeByCode(reviewModel.Type);
            var review = await _reviewRepository.CreateAsync(reviewModel.ToReviewEntity(reviewType));
            return review.ToReviewModel();
        }

        public async Task UpdateAsync(ReviewModel reviewModel)
        {
            var reviewType = await GetReviewTypeByCode(reviewModel.Type);
            await _reviewRepository.UpdateAsync(reviewModel.ToReviewEntity(reviewType));
        }

        public async Task DeleteAsync(int id)
        {
            var review = await _reviewRepository.GetByIdAsync(id);
            if (review == null)
            {
                throw new Exception("Review not found");
            }

            await _reviewRepository.DeleteAsync(review);
        }

        private async Task<ReviewType> GetReviewTypeByCode(string code)
        {
            var reviewType = await _reviewTypeRepository.GetByCodeAsync(code);
            if (reviewType == null)
            {
                throw new ValidationException("Wrong review type code");
            }

            return reviewType;
        }
    }
}