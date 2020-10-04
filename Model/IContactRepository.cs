using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using reactappdemo.Model;
namespace reactappdemo.Model
{
    public interface IContactRepository
    {
         

         void Save(Contact contact );
    }
}