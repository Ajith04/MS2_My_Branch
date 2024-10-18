using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;

namespace a_zApi.IServices
{
    public interface ICourseService
    {
        Task CreateCourse(CourseRequest courseRequest);
        Task<List<CourseResponse>> GetAllCourses();
        Task<CourseResponse> GetCourseById(string CourseId);
        Task UpdateCourse(string CourseId, CourseRequest courseRequest);
        Task DeleteCourseById(string CourseId);
        
    }
}
