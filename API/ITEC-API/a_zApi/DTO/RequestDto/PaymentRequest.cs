using a_zApi.Enitity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace a_zApi.DTO.RequestDto
{
    public class PaymentRequest
    {
        public string StudentId { get; set; }
        public int Fee { get; set; }
        public DateTime Date { get; set; }
    }
}
