using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace a_zApi.Enitity
{
    public class RegFee
    {
       
        [ForeignKey ("Student")]
        public string StudentId { get; set; }
        public virtual Student Students { get; set; }

        public int RegistrationFee {  get; set; }
    }
}
