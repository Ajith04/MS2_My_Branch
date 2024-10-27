using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace a_zApi.Enitity
{
    public class Enrollment
    {
        [Key]
        public int EnrollmentId { get; set; }
        [ForeignKey ("Student")]
        public string StudentId { get; set; }
        public virtual Student Students { get; set; }
        [ForeignKey ("Course")]
        public string CourseId { get; set; }
        public virtual Course Courses { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public int CourseFee { get; set; }
        public string Batch {  get; set; }


    }
}
