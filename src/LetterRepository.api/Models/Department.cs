using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models {
    public class Department {
        [BsonId]
        public ObjectId ObId { get; set; }
        public long Id { get; set; }
        public long ParentId { get; set; }
        public string DepartmentCode { get; set; }
        public string DepartmentName { get; set; }
        public string ExtendedDescription { get; set; }
        public int DepStatus { get; set; }
    }
}
