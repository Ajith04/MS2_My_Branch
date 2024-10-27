using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using a_zApi.IServices;

namespace a_zApi.Services
{
    public class StudentService:IStudentService
    {
        private readonly IStudentRepository _istudentRepository;
        public StudentService(IStudentRepository istudentRepository)
        {
            _istudentRepository = istudentRepository;
        }
        public async Task CreateStudent(StudentRequest studentRequest)
        {
            var inputStudent = new Student();
            inputStudent.NicNo = studentRequest.NicNo;
            inputStudent.FirstName = studentRequest.FirstName;
            inputStudent.LastName = studentRequest.LastName;
            inputStudent.Date = studentRequest.Date;
            inputStudent.MobileNo = studentRequest.MobileNo;
            inputStudent.Email = studentRequest.Email;
            inputStudent.Address = studentRequest.Address;
            inputStudent.Intake = studentRequest.Intake;

            await _istudentRepository.CreateStudent(inputStudent);
           
        }

        public async Task<List<StudentResponse>> GetAllStudent()
        {
            var data=await _istudentRepository.GetAllStudent();
            return data;
        }
        public async Task<StudentResponse> GetStudentById(string NicNo)
        {
            var data = await _istudentRepository.GetStudentById(NicNo);

            if(data == null)
            {
                return null;
            }
            else
            {
                return data;
            }
        }
        
        public async Task UpdateStudent(string NicNo, StudentUpdateRequest studentRequest)
        {
            var updateStudent = new Student();
            
            updateStudent.FirstName = studentRequest.FirstName;
            updateStudent.LastName  =studentRequest.LastName;
            updateStudent.MobileNo = studentRequest.MobileNo;
            updateStudent.Email = studentRequest.Email;
            updateStudent.Address = studentRequest.Address;

            await _istudentRepository.UpdateStudent(NicNo, updateStudent);
          
        }

        public async Task DeleteStudentById(string NicNo)
        {
            await _istudentRepository.DeleteStudentById(NicNo);
            
        }
    }
}
