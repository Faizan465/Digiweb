using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using reactappdemo.Model;
namespace reactappdemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class EmployeeController : Controller
    {

        private readonly AppDbContext _context;
        public EmployeeController(AppDbContext context)
        {
            _context = context;    
        }
        // GET: api/Default
        [HttpGet("GetallEmployee")]
        public IEnumerable<Contact> Get()
        {
            return _context.Contact.ToList();
        }

        // GET: api/Default/5
        [HttpGet("{id}")]
        public  Contact Get(int Id)
        {
            var contact =   _context.Contact.SingleOrDefault(x => x.Id == Id);
           
            return contact;
           
           
        }

        
        [HttpPost]
        public void Post(Contact contact)
        {

            _context.Add(contact);

                _context.SaveChanges();

          
           
        }

        // PUT: api/Default/5
       



    }
}