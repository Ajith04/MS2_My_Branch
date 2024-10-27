using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;

namespace a_zApi.IRepository
{
    public interface IStudentRepository
    {
        Task CreateStudent(Student student);
        Task<List<StudentResponse>> GetAllStudent();
        Task<StudentResponse> GetStudentById(string NicNo);
        Task UpdateStudent(string NicNo, Student student);
        Task DeleteStudentById(string NicNo);

    }
}
