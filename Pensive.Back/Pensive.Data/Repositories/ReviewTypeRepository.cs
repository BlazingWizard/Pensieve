using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Pensive.Data.Entities;
using Pensive.Data.Repositories.Interfaces;

namespace Pensive.Data.Repositories
{
    public class ReviewTypeRepository : IReviewTypeRepository
    {
        private readonly ApplicationDbContext _context;

        public ReviewTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<ReviewType>> GetAllAsync()
        {
            return await _context.ReviewTypes.ToListAsync();
        }

        public async Task<ReviewType> GetByCodeAsync(string code)
        {
            return await _context.ReviewTypes.FirstOrDefaultAsync(type => type.Code == code.Trim());
        }
    }
}