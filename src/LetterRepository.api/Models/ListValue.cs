using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models
{
    public class ListValue
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ObId { get; set; }
        public long ListValueId { get; set; }
        public int ListId { get; set; }
        public string Value { get; set; }

    }
}
