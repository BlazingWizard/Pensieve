using System.Collections.Generic;
using System.Threading.Tasks;
using Pensive.Services.Models;

namespace Pensive.Services.Interfaces
{
    public interface IReviewTypeService
    {
        public Task<List<ReviewTypeModel>> GetAllAsync();
        public Task<ReviewTypeModel> GetByCode(string code);
    }
}