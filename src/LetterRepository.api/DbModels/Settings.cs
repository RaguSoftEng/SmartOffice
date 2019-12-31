using Microsoft.Extensions.Configuration;

namespace LetterRepository.api.DbModels {
    public class Settings {
        public string ConnectionString { get; set; }
        public string Host { get; set; }
        public string Port { get; set; }
        public string Database { get; set; }
        public IConfiguration iConfigurationRoot;
    }
}
