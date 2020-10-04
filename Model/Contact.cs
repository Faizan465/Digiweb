using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
namespace reactappdemo.Model
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Service { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}