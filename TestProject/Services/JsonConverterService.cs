using Newtonsoft.Json;
using System;
using System.IO;
using System.Threading.Tasks;
using TestProject.IServices;

namespace TestProject.Services
{
    public class JsonConverterService : IConverterService
    {
        public async Task<T> Deserialize<T>(String path)
        {
            String json = await File.ReadAllTextAsync(path);
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
}
