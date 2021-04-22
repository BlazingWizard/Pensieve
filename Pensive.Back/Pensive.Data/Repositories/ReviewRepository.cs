using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Pensive.Data.Entities;
using Pensive.Data.Repositories.Interfaces;

namespace Pensive.Data.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly ApplicationDbContext _context;

        public ReviewRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Review> GetByIdAsync(int id)
        {
            return await _context.Reviews
                .Include(review => review.Type)
                .FirstOrDefaultAsync(review => review.Id == id);
        }

        public async Task<List<Review>> GetAllAsync()
        {
            return await _context.Reviews
                .Include(review => review.Type)
                .ToListAsync();
        }

        public async Task CreateAsync(Review review)
        {
            await _context.Reviews.AddAsync(review);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Review review)
        {
            _context.Reviews.Remove(review);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Review reviewModel)
        {
            _context.Reviews.Update(reviewModel);
            await _context.SaveChangesAsync();
        }
    }
}