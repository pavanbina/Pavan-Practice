using ExploringCore.Models;
using Microsoft.EntityFrameworkCore;

namespace ExploringCore.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
                
        }
        public DbSet<Category> categories { get; set; }
    }
}
