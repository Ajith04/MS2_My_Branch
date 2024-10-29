namespace a_zApi.DTO.ResponseDto
{
    public class ModuleResponse
    {
        public string Title { get; set; }
        public string Course { get; set; }
        public string Batch { get; set; }
        public DateTime Date { get; set; }
        public byte[] Module { get; set; }
        public string Description { get; set; }
    }
}
