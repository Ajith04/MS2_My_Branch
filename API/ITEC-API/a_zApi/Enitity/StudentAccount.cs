using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.ComponentModel.DataAnnotations.Schema;

namespace a_zApi.Enitity
{
    public class StudentAccount
    {
        [ForeignKey("Student")]
        public string StudentId { get; set; }
        public virtual Student Students { get; set; }

        public string Password { get; set; }
    }
}
