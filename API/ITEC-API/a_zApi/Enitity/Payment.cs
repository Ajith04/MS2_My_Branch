using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace a_zApi.Enitity
{
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }
        [ForeignKey ("Student")]
        public string StudentId { get; set; }
        public virtual Student Students { get; set; }

        public int Fee {  get; set; }
        public DateTime Date {  get; set; }

    }
}
