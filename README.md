# Reactivities

Reactivities is a full web application 

* .Net Core in the backend
  *  RESTful API
  *  Entity Framework (ORM) with MySQL and CQRS pattern (MediatR)
  *  FluentValidator.AspNetCore - for validation
* React with Typescript
  * Semantic UI React
  * React Hooks
  * packages:
    * react-final-form final-form (v6.3.0)
    * react-widgets, date-fns
      * `npm install react-widgets@4.4.11 react-widgets-date-fns@4.0.26 date-fns@2.0.0-alpha.13`
      * `npm install @types/react-widgets`
    * revalidate



In the Future:

* photo uploader
* and much more



## Architecture and Implementation

<img src="https://i.ibb.co/QcWmGBN/Reactivies-Arch2.png" alt="Reactivies-Arch2" border="0">

Demo

<img src="https://i.ibb.co/HVQ0n1h/reactivities-gif2.gif" alt="reactivities-gif2" border="0">

### API

uses the following packages:

* EntityFrameworkCore.Design

##### Controllers

```csharp
namespace API.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase {
        
        private readonly DataContext _context;

        public ValuesController(DataContext context) {  _context = context; }
        
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get() {
            var values = await _context.Values.ToListAsync();
            return Ok(values);
        }
        
        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> Get(int id) {
            var value = await _context.Values.FindAsync(id);
            return Ok(value);
        }
```

`[controller]` is a **placeholder** for the first part of the class below so we can access at `api/values`

###### DI

we can get the DB by using DI

```csharp
ValuesController(DataContext context) {  _context = context; }
```

Here we have a constructor that receives our `DataContext` object



###### Async

Our Get should be async

```csharp
// GET api/values
[HttpGet]
public async Task<ActionResult<IEnumerable<Value>>> Get() {
    var values = await _context.Values.ToListAsync();
	return Ok(values);
}
```

* We wrap the result in a `Task` 
* add `async` before the return type
* use the `await` keyword
* use async functions such as: `ToListAsync` or `FindAsync`
* return an `Ok` which returns a 200 result



### Domain

Are the entities such as

`Activity.cs`

```csharp
namespace Domain {
    public class Activity {
        public Guid Id { get; set; } // This is PK 
        public string Title { get; set; }
        public string Description { get; set; }
        ...
    }
}
```

A `Guid` allows us to create an ID either from the server or client side.



### Persistence

* `DataContext.cs`  
* `Seed.cs`

uses the following packages

* EntityFrameworkCore
* EntityFrameworkCore.Sqlite



##### DataContext.cs

```csharp
namespace Persistence {
    public class DataContext : DbContext {
        public DataContext(DbContextOptions options) : base(options) { }
        
        public DbSet<Value> Values { get; set; }
        public DbSet<Activity> Activities { get; set; }

        //Seeds data
        protected override void OnModelCreating(ModelBuilder modelBuilder)  {
            modelBuilder.Entity<Value>()
                .HasData(
                    new Value {Id = 1, Name = "Value 101"},
                    new Value {Id = 2, Name = "Value 102"},
                    new Value {Id = 3, Name = "Value 103"}
                );
        }
    }
}
```

A `DbContext` instance represents a session with the database and can be used to query and save instances of your entities.

Look at this line of code

```csharp
public DbSet<Activity> Activities { get; set; }
```

Here we will create a table named `Activities` and `DbSet<Activity>` will give entities of type `Activity`

##### Registering

Now in `Startup.cs` which is in **API** we registers the given context as a service and use ***Dependency Injection***

```csharp
public void ConfigureServices(IServiceCollection services)  {
    
            services.AddDbContext<DataContext>(opt =>  {
                opt.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
            });
```

so we'll use `AddDbContext` to add our `DataContext` class

and finally we will migrate

```
Reactivities$ dotnet ef migrations add IntialCreate -p Persistence/ -s API/
```

* `-p`  to tell where our DataContext is, which is **Persistence/**
* `-s` : where our started project which contains connection strings. This is in **API/**





##### Creating DB and Seeding Data

In `Program.cs` which is in **API/**

```csharp
namespace API {
    public class Program {
        public static void Main(string[] args) {
            var host = CreateHostBuilder(args).Build();

            using (var scope = host.Services.CreateScope())  {
                var services = scope.ServiceProvider;
                
                try {  //check if db exists
                    var context = services.GetRequiredService<DataContext>();
                    context.Database.Migrate();
                    Seed.SeedData(context);
                }
                catch (Exception ex)  {... }
            }
            host.Run();
        }
```

`Seed.SeedData` will call `Pesistence/Seed.cs`

```csharp
namespace Persistence {
    public class Seed {
        public static void SeedData(DataContext context) {
            if (!context.Activities.Any()) {
                var activities = new List<Activity>() {
                    new Activity {
                        Title = "Past Activity 1",
                        Date = DateTime.Now.AddMonths(-2),
                        Description = "Activity 2 months ago",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                    },
                    ...
                };
                
                context.Activities.AddRange(activities);
                context.SaveChanges();
            }
        }
    }
}
```

Which will seed data in our DB