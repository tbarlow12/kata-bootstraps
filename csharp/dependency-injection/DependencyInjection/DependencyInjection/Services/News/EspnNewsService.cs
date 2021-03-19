using DependencyInjection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DependencyInjection.Services.News
{
    public class EspnNewsService : INewsService
    {
        public NewsBroadcast Get()
        {
            return new NewsBroadcast
            {
                Date = DateTime.Now,
                TopStories = new string[]
                {
                    "The Utah Jazz win their first franchise championship"
                }
            };
        }
    }
}
