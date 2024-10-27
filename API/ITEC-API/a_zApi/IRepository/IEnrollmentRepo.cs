using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;

namespace a_zApi.IRepository
{
    public interface IEnrollmentRepo
    {
        Task createEnrollment(EnrollmentRequest enrollmentrequest);
        Task addRegFee(RegFeeRequest regfeerequest);
        Task createStudentAccount(StudentAccountRequest studentaccountrequest);

    }
}
