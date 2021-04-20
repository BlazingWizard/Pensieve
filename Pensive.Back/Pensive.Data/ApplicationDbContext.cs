using Microsoft.EntityFrameworkCore;
using Pensive.Data.Entities;

namespace Pensive.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        
        

        public DbSet<Review> Reviews { get; set; }
    }
}