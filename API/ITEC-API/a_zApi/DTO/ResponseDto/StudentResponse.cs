﻿using a_zApi.Enitity;
using Microsoft.VisualBasic;

namespace a_zApi.DTO.ResponseDto
{
    public class StudentResponse
    {
        public string NicNo { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Date { get; set; }
        public string MobileNo { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Intake { get; set; }
        public string CourseName { get; set; }
        public string Batch {  get; set; }

    }
}
