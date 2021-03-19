using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DependencyInjection.Models
{
    public class NewsBroadcast
    {
        public DateTime Date { get; set; }
        
        public string[] TopStories { get; set; }
    }
}
