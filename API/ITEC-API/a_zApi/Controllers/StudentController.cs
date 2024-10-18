using a_zApi.DTO.RequestDto;
using a_zApi.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _istudentService;
        public StudentController(IStudentService istudentService)
        {
            _istudentService = istudentService;
        }


        [HttpPost("Create_Student")]
        public async Task<IActionResult> CreateStudent(StudentRequest studentRequest)
        {
            await _istudentService.CreateStudent(studentRequest);
            return Ok();
        }


        [HttpGet("Get_All_Student")]
        public async Task<IActionResult>GetAllStudent()
        {
            var data = await _istudentService.GetAllStudent();
            return Ok(data);
        }


        [HttpGet("Get_Student_By_Id")]
        public async Task<IActionResult> GetStudentById(string NicNo)
        {
            var data = await _istudentService.GetStudentById(NicNo);
            return Ok(data);
        }

        [HttpPatch("Update_Student")]
        public async Task<IActionResult> UpdateStudent(string NicNo, StudentUpdateRequest studentRequest)
        {
            await _istudentService.UpdateStudent(NicNo, studentRequest);
            return Ok();
        }

        [HttpDelete("Delete_Student-By-Id")]
        public async Task<IActionResult> DeleteStudentById(string NicNo)
        {
            await _istudentService.DeleteStudentById(NicNo);
            return Ok();
        }
    }
}
