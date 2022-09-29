using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using emp_dept;
using emp_dept.Data;

namespace emp_dept.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeptsController : ControllerBase
    {
        private readonly DataContext _context;

        public DeptsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Depts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dept>>> GetDepts()
        {
            return await _context.Depts.ToListAsync();
        }

        // GET: api/Depts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Dept>> GetDept(int id)
        {
            var dept = await _context.Depts.FindAsync(id);

            if (dept == null)
            {
                return NotFound();
            }

            return dept;
        }

        // PUT: api/Depts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDept(int id, Dept dept)
        {
            if (id != dept.DeptId)
            {
                return BadRequest();
            }

            _context.Entry(dept).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeptExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Depts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Dept>> PostDept(Dept dept)
        {
            _context.Depts.Add(dept);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDept", new { id = dept.DeptId }, dept);
        }

        // DELETE: api/Depts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDept(int id)
        {
            var dept = await _context.Depts.FindAsync(id);
            if (dept == null)
            {
                return NotFound();
            }

            _context.Depts.Remove(dept);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeptExists(int id)
        {
            return _context.Depts.Any(e => e.DeptId == id);
        }
    }
}
