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

            await _istudentRepository.CreateStudent(inputStudent);
           
        }

        public async Task<List<StudentResponse>> GetAllStudent()
        {
            var data=await _istudentRepository.GetAllStudent();

            var response=new List<StudentResponse>();

            foreach (var student in data)
            {
                var res = new StudentResponse();
               res.NicNo = student.NicNo;
                res.FirstName=student.FirstName;
                res.LastName=student.LastName;
                res.Date=student.Date;
                res.MobileNo=student.MobileNo;
                res.Email=student.Email;
                res.Address=student.Address;
                response.Add(res);
            }

            return response;
        }
        public async Task<StudentResponse> GetStudentById(string NicNo)
        {
            var data = await _istudentRepository.GetStudentById(NicNo);

            var response = new StudentResponse();
            response.NicNo=data.NicNo;
            response.FirstName=data.FirstName;
            response.LastName=data.LastName;
            response.Date=data.Date;
            response.MobileNo=data.MobileNo;
            response.Email=data.Email;
            response.Address=data.Address;
           
            return response;

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
