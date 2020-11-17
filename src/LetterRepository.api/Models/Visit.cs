using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models
{
    public class Visit
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ObId { get; set; }
        public long VisitorId { get; set; }
        public long Purpose { get; set; }
        public string Description { get; set; }
        public long DepartmentId { get; set; }
        [BsonIgnore]
        public string Department { get; set; }

        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime VisitDate { get; set; }
        public int SeqId { get; set; }
        public string VisitorToken { get; set; }
        public bool IsWorkDone { get; set; }
        public string Progress { get; set; }
    }
}