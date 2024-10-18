using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;

namespace a_zApi.IServices
{
    public interface IStudentService
    {
        Task CreateStudent(StudentRequest studentRequest);
        Task<List<StudentResponse>> GetAllStudent();
        Task<StudentResponse> GetStudentById(string NicNo);
        Task UpdateStudent(string NicNo, StudentUpdateRequest studentRequest);
        Task DeleteStudentById(string NicNo);
    }
}
