using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.IServices
{
    public interface IEnrollmentService
    {
        Task createEnrollment(EnrollmentRequest enrollmentrequest);
        Task addRegFee(RegFeeRequest regfeerequest);
        Task createStudentAccount(StudentAccountRequest studentaccountrequest);


    }
}
