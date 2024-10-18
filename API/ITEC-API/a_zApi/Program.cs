using a_zApi.IRepository;
using a_zApi.IServices;
using a_zApi.Repository;
using a_zApi.Services;

var builder = WebApplication.CreateBuilder(args);








var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddSingleton<IStudentRepository>(provider =>new StudentRepository(connectionString));
builder.Services.AddScoped<IStudentService, StudentService>();


builder.Services.AddSingleton<ICourseRepository>(provider => new CourseRepository(connectionString));
builder.Services.AddScoped<ICourseService, CourseService>();




// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());


app.UseHttpsRedirection();

app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
