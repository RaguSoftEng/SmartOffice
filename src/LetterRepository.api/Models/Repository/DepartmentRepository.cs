using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LetterRepository.api.DbModels;
using LetterRepository.api.IRepository;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LetterRepository.api.Models.Repository {
    public class DepartmentRepository : IDepartmentRepository {
        private readonly ObjectContext context = null;
        private readonly ICommonRepository _common = null;

        public DepartmentRepository (IOptions<Settings> settings, ICommonRepository common) {
            this.context = new ObjectContext (settings);
            this._common = common;
        }
        public async Task<dynamic> Add (Department department) {
            if (!(department is null)) {
                try {
                    var id = this._common.GetNewId (1001);
                    department.Id = id;
                    await context.Department.InsertOneAsync (department);
                    return new {
                        status = "Ok",
                            id = id
                    };
                } catch (System.Exception) {

                    throw;
                }
            } else {
                throw new ArgumentNullException (nameof (department));
            }
        }

        public async Task<Results> Get (int start, int limit, string filter) {
            try {
                var department = new List<Department> ();
                var data = new Results ();

                if (filter != "null") {
                    department = await context.Department.Find (x => x.DepartmentCode.Contains (filter) ||
                            x.DepartmentName.Contains (filter) ||
                            x.ExtendedDescription.Contains (filter)
                        )
                        .Skip (start)
                        .Limit (limit)
                        .ToListAsync ();

                } else {
                    department = await context.Department.Find (x => true)
                        .Skip (start)
                        .Limit (limit)
                        .ToListAsync ();
                }
                if (department is null) {
                    department = new List<Department> ();
                }
                data.Details = department;
                data.Columns = new List<dynamic> {
                    new {
                    ColumnName = "DepartmentCode",
                    DisplayName = "Department Code",
                    IsVisible = true,
                    DisplayOrder = 1
                    },
                    new {
                    ColumnName = "DepartmentName",
                    DisplayName = "Department Name",
                    IsVisible = true,
                    DisplayOrder = 2
                    }
                };
                data.Url = "department";
                data.FormId = 1001;
                return data;
            } catch (System.Exception) {
                throw;
            }
        }

        public async Task<Department> Get (long id) {
            try {
                var department = await context.Department.Find (x => x.Id == id).FirstOrDefaultAsync ();
                if (department is null) {
                    throw new ApplicationException ("Department not found...!");
                }
                return department;
            } catch (System.Exception) {
                throw;
            }
        }

        public async Task<dynamic> Update (long id, Department department) {
            try {
                var update = Builders<Department>.Update.Set (e => e.ExtendedDescription, department.ExtendedDescription)
                    .Set (e => e.DepStatus, department.DepStatus);
                var result = await context.Department.FindOneAndUpdateAsync (e => e.Id == id, update);

                if (result != null) {
                    return new {
                    status = "Ok",
                    id = id
                    };
                } else {
                    throw new ApplicationException ("Failed Update the department...!");
                }
            } catch (System.Exception) {
                throw;
            }
        }

        public async Task<dynamic> Remove (long id) {
            try {
                var update = Builders<Department>.Update.Set (e => e.DepStatus, 0);
                var result = await context.Department.FindOneAndUpdateAsync (e => e.Id == id, update);

                if (result != null) {
                    return new {
                    stats = "done"
                    };
                } else {
                    throw new ApplicationException ("Failed delete the department...!");
                }
            } catch (System.Exception) {
                throw;
            }
        }

        public async Task<dynamic> GetAsListValue () {
            try {
                var department = new List<Department> ();
                var List = new List<dynamic> ();

                department = await context.Department.Find (x => true).ToListAsync ();

                if (!(department is null)) {
                    department.ForEach (a => {
                        List.Add (new {
                            Id = a.Id,
                                Value = a.DepartmentCode + "[" + a.DepartmentName + "]"
                        });
                    });
                } else {
                    List = new List<dynamic> {
                        new {
                        Id = "0",
                        Value = "Admin"
                        }
                    };
                }

                return List;
            } catch (System.Exception) {
                throw;
            }
        }
    }
}
