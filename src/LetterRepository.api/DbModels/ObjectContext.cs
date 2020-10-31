using LetterRepository.api.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LetterRepository.api.DbModels
{
    public class ObjectContext
    {
        public IConfiguration Configuration { get; }
        private IMongoDatabase _database = null;

        public ObjectContext(IOptions<Settings> settings)
        {
            Configuration = settings.Value.iConfigurationRoot;
            settings.Value.ConnectionString = Configuration.GetSection("MongoDb:ConnectionString").Value;
            settings.Value.Database = Configuration.GetSection("MongoDb:Database").Value;

            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }
        public IMongoCollection<User> Users
        {
            get
            {
                return _database.GetCollection<User>("User");
            }
        }

        public IMongoCollection<Login> Logins
        {
            get
            {
                return _database.GetCollection<Login>("Login");
            }
        }

        public IMongoCollection<ListValue> ListValue
        {
            get
            {
                return _database.GetCollection<ListValue>("ListValue");
            }
        }

        public IMongoCollection<Department> Department
        {
            get
            {
                return _database.GetCollection<Department>("Department");
            }
        }
        public IMongoCollection<DepartmentPurpose> DepartmentPurpose
        {
            get
            {
                return _database.GetCollection<DepartmentPurpose>("DepartmentPurpose");
            }
        }

        public IMongoCollection<Sequence> Sequence
        {
            get
            {
                return _database.GetCollection<Sequence>("Sequence");
            }
        }

        public IMongoCollection<Letter> Letter
        {
            get
            {
                return _database.GetCollection<Letter>("Letter");
            }
        }

        public IMongoCollection<ParameterList> ParameterList
        {
            get
            {
                return _database.GetCollection<ParameterList>("ParameterList");
            }
        }
        public IMongoCollection<Visitor> Visitor
        {
            get
            {
                return _database.GetCollection<Visitor>("Visitor");
            }
        }
        public IMongoCollection<Visit> Visit
        {
            get
            {
                return _database.GetCollection<Visit>("Visit");
            }
        }

        public IMongoCollection<OldVisitor> OldVisitor
        {
            get
            {
                return _database.GetCollection<OldVisitor>("OldVisitor");
            }
        }
    }
}
