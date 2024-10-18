using a_zApi.Enitity;

namespace a_zApi.IRepository
{
    public interface ICourseRepository
    {
        Task CreateCourse(Course course);
        Task<List<Course>> GetAllCourse();
        Task<Course> GetCourseById(string CourseId);
        Task UpdateCourse(string CourseId, Course course);
        Task DeleteCourseById(string CourseId);
    }
}
