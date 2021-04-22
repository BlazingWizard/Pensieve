using Pensive.Data.Entities;
using Pensive.Services.Models;

namespace Pensive.Services.Mappings
{
    public static class ReviewMappings
    {
        public static ReviewModel ToReviewModel(this Review review)
        {
            return new()
            {
                Id = review.Id,
                Title = review.Title,
                ReviewType = review.Type.Name
            };
        }

        public static Review ToReviewEntity(this ReviewModel reviewModel, ReviewType reviewType = null)
        {
            return new()
            {
                Id = reviewModel.Id,
                Title = reviewModel.Title,
                Type = reviewType
            };
        }
    }
}