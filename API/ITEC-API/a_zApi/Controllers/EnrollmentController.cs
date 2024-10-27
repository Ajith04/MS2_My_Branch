using a_zApi.DTO.RequestDto;
using a_zApi.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnrollmentController : ControllerBase
    {
        private readonly IEnrollmentService _ienrollmentservice;

        public EnrollmentController(IEnrollmentService ienrollmentservice)
        {
              _ienrollmentservice = ienrollmentservice;
        }

        [HttpPost ("add-new-enrollment")]
        public async Task<IActionResult> createEnrollment(EnrollmentRequest enrollmentrequest)
        {
            await _ienrollmentservice.createEnrollment (enrollmentrequest);
            return Ok();
        }
    }
}
