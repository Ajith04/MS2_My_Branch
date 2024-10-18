using a_zApi.DTO.RequestDto;
using a_zApi.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _icourseService;
        public CourseController(ICourseService icourseService)
        {
            _icourseService= icourseService;
        }


        [HttpPost("Create_Course")]
        public async Task<IActionResult> CreateCourse(CourseRequest courseRequest)
        {
           
            await _icourseService.CreateCourse(courseRequest);
            return Ok();
        }


        [HttpGet("Get_All_Course")]
        public async Task<IActionResult> GetAllCourses()
        {
            var data=await _icourseService.GetAllCourses();
            return Ok(data);
        }


        [HttpGet("Get_Course_By_Id")]
        public async Task<IActionResult> GetCourseById(string CourseId)
        {
            var data = await _icourseService.GetCourseById(CourseId);
            return Ok(data);
        }


        [HttpPatch("Update_Course")]
        public async Task<IActionResult> UpdateCourse(string CourseId, CourseRequest courseRequest)
        {
            await _icourseService.UpdateCourse(CourseId, courseRequest);
            return Ok();
        }


        [HttpDelete("Delete_Course_By_Id")]
        public async Task<IActionResult> DeleteCourseById(string CourseId)
        {
            await _icourseService.DeleteCourseById(CourseId);
            return Ok();
        }
    }
    
}
