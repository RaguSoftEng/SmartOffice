using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LetterRepository.api.Models
{
    public class Login
    {
        [BsonId]
        public ObjectId LoginId { get; set; }
        public User User { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public int Status { get; set; }
        public string Token { get; set; }
    }
}
