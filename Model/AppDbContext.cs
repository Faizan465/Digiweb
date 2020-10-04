using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using reactappdemo.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace reactappdemo.Model
{
    public class AppDbContext:DbContext
    {
public AppDbContext (DbContextOptions<AppDbContext> options): base(options){}

   public DbSet<Contact> Contacts { get; set; }
   public DbSet<Contact> Contact { get; set; }


     protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Contact>().HasData(new Contact { Id = 1, Name = "shirt", Message = "Web Design"});
            modelBuilder.Entity<Contact>().HasData(new Contact { Id = 2, Name = "tshirt", Message = "Web Development" });
           


        }
    }
   
   

}