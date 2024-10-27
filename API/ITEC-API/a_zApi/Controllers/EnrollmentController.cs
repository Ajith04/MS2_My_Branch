using a_zApi.DTO.RequestDto;
using a_zApi.Enitity;
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

        [HttpPost ("add-reg-fee")]
        public async Task<IActionResult> addRegFee(RegFeeRequest regfeerequest)
        {
            await _ienrollmentservice.addRegFee (regfeerequest);
            return Ok();
        }

        [HttpPost ("add-student-account")]
        public async Task<IActionResult> createStudentAccount(StudentAccountRequest studentaccountrequest)
        {
            await _ienrollmentservice.createStudentAccount (studentaccountrequest);
            return Ok();
        }

        
    }


}
