using a_zApi.DTO.RequestDto;

namespace a_zApi.IRepository
{
    public interface IEnrollmentRepo
    {
        Task createEnrollment(EnrollmentRequest enrollmentrequest);
    }
}
