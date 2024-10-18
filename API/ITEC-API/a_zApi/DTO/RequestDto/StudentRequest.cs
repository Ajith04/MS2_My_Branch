using a_zApi.Enitity;
using Microsoft.VisualBasic;

namespace a_zApi.DTO.RequestDto
{
    public class StudentRequest
    {
        public string NicNo { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Date { get; set; }
        public string MobileNo { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
       
    }
}
