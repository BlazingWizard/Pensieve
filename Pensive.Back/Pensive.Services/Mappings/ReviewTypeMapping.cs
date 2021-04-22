using Pensive.Data.Entities;
using Pensive.Services.Models;

namespace Pensive.Services.Mappings
{
    public static class ReviewTypeMapping
    {
        public static ReviewTypeModel ToReviewTypeModel(this ReviewType reviewType)
        {
            return new()
            {
                Name = reviewType.Name,
                Code = reviewType.Code
            };
        }
    }
}