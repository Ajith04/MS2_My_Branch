using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace a_zApi.Enitity
{
    public class Modules
    {
        public string Title { get; set; }
        public string Course { get; set; }
        public string Batch {  get; set; }
        public DateTime Date { get; set; }
        public byte[] Module {  get; set; }
        public string Description { get; set; }
    }
}
