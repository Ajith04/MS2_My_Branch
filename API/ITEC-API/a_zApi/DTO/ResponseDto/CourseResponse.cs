namespace a_zApi.DTO.ResponseDto
{
    public class CourseResponse
    {
        public string CourseId { get; set; }
        public string CourseName { get; set; }
        public byte[] CourseImage { get; set; }
        public string Duration { get; set; }
        public decimal Fee { get; set; }
        public string Instructor { get; set; }
        public string Syllabus { get; set; }
    }
}
