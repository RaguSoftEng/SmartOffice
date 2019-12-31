using System.Text;
using LetterRepository.api.DbModels;
using LetterRepository.api.IRepository;
using LetterRepository.api.Models;
using LetterRepository.api.Models.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace LetterRepository.api {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            services.Configure<Settings> (o => { o.iConfigurationRoot = Configuration; });
            services.AddTransient<IUserRepository, UserRepository> ()
                .AddTransient<ILoginRepository, LoginRepository> ()
                .AddTransient<IDepartmentRepository, DepartmentRepository> ()
                .AddTransient<ICommonRepository, CommonRepository> ()
                .AddTransient<ILettersRepository, LettersRepository> ()
                .AddTransient<IVisitorRepository, VisitorRepository> ();

            var appSettingsSection = Configuration.GetSection ("AppSettings");
            services.Configure<AppSettings> (appSettingsSection);

            var appSettings = appSettingsSection.Get<AppSettings> ();
            var key = Encoding.ASCII.GetBytes (appSettings.Secret);

            services.AddAuthentication (x => {
                    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer (x => {
                    x.RequireHttpsMetadata = false;
                    x.SaveToken = true;
                    x.TokenValidationParameters = new TokenValidationParameters {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey (key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            services.AddCors ();
            services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_2)
                .AddJsonOptions (options => {
                    options.SerializerSettings.ContractResolver = new DefaultContractResolver ();
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseExceptionHandler (a => a.Run (async context => {
                    var feature = context.Features.Get<IExceptionHandlerPathFeature> ();
                    var exception = feature.Error;

                    var result = JsonConvert.SerializeObject (new { ExceptionMessage = exception.Message });
                    context.Response.ContentType = "application/json";
                    await context.Response.WriteAsync (result);
                }));
                // app.UseDeveloperExceptionPage();
                // app.UseExceptionHandler();
            } else {
                app.UseExceptionHandler (a => a.Run (async context => {
                    var feature = context.Features.Get<IExceptionHandlerPathFeature> ();
                    var exception = feature.Error;

                    var result = JsonConvert.SerializeObject (new { ExceptionMessage = exception.Message });
                    context.Response.ContentType = "application/json";
                    await context.Response.WriteAsync (result);
                }));
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts ();
            }
            app.UseCors (x => x
                .AllowAnyOrigin ()
                .AllowAnyMethod ()
                .AllowAnyHeader ()
                .AllowCredentials ());
            app.UseAuthentication ();
            app.UseHttpsRedirection ();
            app.UseMvc ();
        }
    }
}
