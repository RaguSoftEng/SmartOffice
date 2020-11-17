using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models
{
    public class ParameterList
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ObId { get; set; }
        public int ListId { get; set; }
        public string Description { get; set; }
        public bool IsVisible { get; set; } = true;
    }
}
