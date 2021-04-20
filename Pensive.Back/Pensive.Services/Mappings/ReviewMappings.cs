using Pensive.Data.Entities;
using Pensive.Services.Models;

namespace Pensive.Services.Mappings
{
    public static class ReviewMappings
    {
        public static ReviewModel ToReviewModel(this Review review)
        {
            return new ReviewModel()
            {
                Id = review.Id,
                Title = review.Title,
                ReviewType = review.Type.Name
            };
        }
    }
}