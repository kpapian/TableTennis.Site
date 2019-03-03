using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject.IServices
{
    public interface IConverterService
    {
        Task<T> Deserialize<T>(string path);
    }
}
