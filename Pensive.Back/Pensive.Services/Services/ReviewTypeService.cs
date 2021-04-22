using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Pensive.Data.Repositories.Interfaces;
using Pensive.Services.Interfaces;
using Pensive.Services.Mappings;
using Pensive.Services.Models;

namespace Pensive.Services.Services
{
    public class ReviewTypeService : IReviewTypeService
    {
        private readonly IReviewTypeRepository _reviewTypeRepository;

        public ReviewTypeService(IReviewTypeRepository reviewTypeRepository)
        {
            _reviewTypeRepository = reviewTypeRepository;
        }

        public async Task<List<ReviewTypeModel>> GetAllAsync()
        {
            var reviewTypeList = await _reviewTypeRepository.GetAllAsync();
            return reviewTypeList.Select(type => type.ToReviewTypeModel()).ToList();
        }

        public async Task<ReviewTypeModel> GetByCode(string code)
        {
            var reviewType = await _reviewTypeRepository.GetByCodeAsync(code);
            return reviewType?.ToReviewTypeModel();
        }
    }
}