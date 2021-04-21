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
        
        public DbSet<ReviewType> ReviewTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            CreateReviewTypes(modelBuilder);
            base.OnModelCreating(modelBuilder);
        }

        private void CreateReviewTypes(ModelBuilder modelBuilder)
        {
            var reviewTypes = new[]{
                new ReviewType() { Id = 1, Name = "Films", Code = "film"},
                new ReviewType() { Id = 2, Name = "TV shows", Code = "tvshow"},
                new ReviewType() { Id = 3, Name = "Games", Code = "game"}
            };
            modelBuilder.Entity<ReviewType>().HasData(reviewTypes);
        }
    }
}