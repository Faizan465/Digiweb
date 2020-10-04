using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using reactappdemo.Model;
namespace reactappdemo.Model

{
    public class ContactRepository: IContactRepository 
    {

       private readonly AppDbContext _dbContext; 
       public ContactRepository(AppDbContext dbContext)
       {
           _dbContext =dbContext;
       }
      public void Save(Contact contact){


         _dbContext.Add(contact);
         _dbContext.SaveChanges();

      
      }

        internal Contact Save()
        {
            throw new NotImplementedException();
        }
    }
}