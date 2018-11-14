using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebApplication3.Models;

[assembly: HostingStartup(typeof(WebApplication3.Areas.Identity.IdentityHostingStartup))]
namespace WebApplication3.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<WebApplication3Context>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("WebApplication3ContextConnection")));

            });
        }
    }
}