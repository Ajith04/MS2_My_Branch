namespace a_zApi.DTO.RequestDto
{
    public class EnrollmentRequest
    {
        public string StudentId { get; set; }
        public string CourseId { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public int Fee { get; set; }
        public string Batch { get; set; }
    }
}
