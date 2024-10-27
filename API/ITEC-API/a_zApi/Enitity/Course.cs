using System.ComponentModel.DataAnnotations;

namespace a_zApi.Enitity
{
    public class Course
    {
        [Key]
        public string CourseId { get; set; }
        public string CourseName { get; set; }
        public byte[] CourseImage { get; set; }
        public string Duration {  get; set; }
        public int Fee { get; set; }
        public string Instructor {  get; set; }
        public string Syllabus { get; set; }
    }
}
