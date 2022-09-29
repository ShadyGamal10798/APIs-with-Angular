using Microsoft.EntityFrameworkCore;

namespace emp_dept.Data
{
    public class DataContext:DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Dept> Depts { get; set; }
        public DbSet<Employee> Employees { get; set; }
    }
}
