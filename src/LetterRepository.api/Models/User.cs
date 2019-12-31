using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models {
    public class User {
        [BsonId]
        public ObjectId ObId { get; set; }
        public long Id { get; set; }
        public int Title { get; set; }
        public string FullName { get; set; }
        public string DisplayName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public int UserLevel { get; set; }
        public DateTime CreatedDate { get; set; }
        public long DepartmentId { get; set; }
        public string Password { get; set; }
        public int Status { get; set; }
    }
}
