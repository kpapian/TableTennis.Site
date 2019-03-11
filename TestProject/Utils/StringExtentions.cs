using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject.Utils
{
    public static class StringExtentions
    {
        public static async Task<T> Deserialize<T>(this string str, string path)
        {
            String json = await File.ReadAllTextAsync(path);
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
}
