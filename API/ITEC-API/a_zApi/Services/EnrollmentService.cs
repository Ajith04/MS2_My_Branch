using a_zApi.DTO.RequestDto;
using a_zApi.IRepository;
using a_zApi.IServices;

namespace a_zApi.Services
{
    public class EnrollmentService : IEnrollmentService
    {
        private readonly IEnrollmentRepo _ienrollmentrepo;

        public EnrollmentService(IEnrollmentRepo ienrollmentrepo)
        {
            _ienrollmentrepo = ienrollmentrepo;
        }

        public async Task createEnrollment(EnrollmentRequest enrollmentrequest)
        {
            await _ienrollmentrepo.createEnrollment(enrollmentrequest);
        }
    }
}
