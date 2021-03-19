using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DependencyInjection.Models;

namespace DependencyInjection.Services
{
    public class CnnNewsService : INewsService
    {
        public NewsBroadcast Get()
        {
            return new NewsBroadcast
            {
                Date = DateTime.Now,
                TopStories = new string[]
                {
                    "MSFT stock hits all time high"
                }
            };
        }
    }
}
