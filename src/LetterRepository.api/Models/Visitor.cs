using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models
{
    public class Visitor
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ObId { get; set; }
        public long Id { get; set; }
        public int Title { get; set; }
        public string FullName { get; set; }
        public string NicNo { get; set; }
        public string Address { get; set; }
        public string ContactNo { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime CreatedDate { get; set; }
    }
}
