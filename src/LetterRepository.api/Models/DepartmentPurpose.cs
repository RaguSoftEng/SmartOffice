using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models
{
    public class DepartmentPurpose
    {
          [BsonId]
        public ObjectId ObId { get; set; }
        public long Id { get; set; }
        public long DepartmentId { get; set; }
        public string Purpose { get; set; }
    }
}