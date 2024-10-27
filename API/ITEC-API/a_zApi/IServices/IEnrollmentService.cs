using a_zApi.DTO.RequestDto;

namespace a_zApi.IServices
{
    public interface IEnrollmentService
    {
        Task createEnrollment(EnrollmentRequest enrollmentrequest);
    }
}
