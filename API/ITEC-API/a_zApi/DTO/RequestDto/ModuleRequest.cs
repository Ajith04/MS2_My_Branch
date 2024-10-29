namespace a_zApi.DTO.RequestDto
{
    public class ModuleRequest
    {
        public string Title { get; set; }
        public string Course { get; set; }
        public string Batch { get; set; }
        public DateTime Date { get; set; }
        public IFormFile Module { get; set; }
        public string Description { get; set; }
    }
}
