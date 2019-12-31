using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models {
    public class Sequence {
        [BsonId]
        public ObjectId Id { get; set; }
        public int formId { get; set; }
        public long SeqId { get; set; }
    }
}
