using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models
{
    public class Letter
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ObId { get; set; }
        public long Id { get; set; }
        public string LetterCode { get; set; }
        public string LetterRefNO { get; set; }
        public int LetterCategory { get; set; }
        public long DepartmentId { get; set; }
        // public Department DepartmentObj { get; set; }
        public long CreatedUserId { get; set; }
        // public User CreatedUser { get; set; }
        public DateTime CreatedDate { get; set; }
        public long ReferenceLetterId { get; set; }
        //  public Letter ReferenceLetter { get; set; }
        public string FromAddress { get; set; }
        public string ToAddress { get; set; }
        public string ToWhom { get; set; }
        public int SendOrReceive { get; set; }
        public int PostType { get; set; }
        public string Subject { get; set; }
        public string Progress { get; set; }
        public string LetterContant { get; set; }
        public DateTime SendOrReceiveDate { get; set; }
    }
}
