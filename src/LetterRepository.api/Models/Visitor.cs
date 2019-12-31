using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models {
    public class Visitor {
        [BsonId]
        public ObjectId ObId { get; set; }
        public long Id { get; set; }
        public int Title { get; set; }
        public string FullName { get; set; }
        public string NicNo { get; set; }
        public string Address { get; set; }
        public string ContactNo { get; set; }
        public string Purpose { get; set; }
        public long DepartmentId { get; set; }

        [BsonDateTimeOptions (Kind = DateTimeKind.Local)]
        public DateTime VisitDate { get; set; }
        public int SeqId { get; set; }
        public string VisitorToken { get; set; }
        public bool IsWorkDone { get; set; }
        public string Progress { get; set; }
    }
}
