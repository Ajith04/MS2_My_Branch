namespace a_zApi.DTO.RequestDto
{
    public class CourseRequest
    {
        public string CourseId {  get; set; }
        public string CourseName { get; set; }
        public IFormFile CourseImage { get; set; }
        public string Duration { get; set; }
        public int Fee { get; set; }
        public string Instructor { get; set; }
        public string Syllabus { get; set; }
    }
}
