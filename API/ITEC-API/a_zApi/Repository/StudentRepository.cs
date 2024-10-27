using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using Microsoft.Data.SqlClient;
using System.Numerics;
using System.Security.Cryptography;

namespace a_zApi.Repository
{
    public class StudentRepository:IStudentRepository
    {
        private readonly string _connectionString;
        public StudentRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public async Task CreateStudent(Student student)
        {
            using(var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("INSERT INTO Students(StudentId,FirstName,LastName,JoinDate,Mobile,Email,Address,Intake)VALUES(@NicNo,@FirstName,@LastName,@Date,@MobileNo,@Email,@Address,@Intake)", connection);
                command.Parameters.AddWithValue("@NicNo", student.NicNo);
                command.Parameters.AddWithValue("@FirstName",student.FirstName);
                command.Parameters.AddWithValue("@LastName",student.LastName);
                command.Parameters.AddWithValue("@Date", student.Date);
                command.Parameters.AddWithValue("@MobileNo", student.MobileNo);
                command.Parameters.AddWithValue("@Email", student.Email);
                command.Parameters.AddWithValue("@Address",student.Address);
                command.Parameters.AddWithValue("@Intake", student.Intake);

                await connection.OpenAsync();
                await command.ExecuteNonQueryAsync();
            }
           
        }

        public async Task<List<StudentResponse>> GetAllStudent()
        {
            var students = new List<StudentResponse>(); 
            using( var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("select Students.*, Courses.CourseName, Enrollments.Batch from Students left join Enrollments on Students.StudentId = Enrollments.StudentId left join Courses on Enrollments.CourseId = Courses.CourseId;",connection);
                await connection.OpenAsync();
                using(var reader=await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        students.Add(new StudentResponse
                        {
                            NicNo=reader.GetString(0),
                            FirstName=reader.GetString(1),
                            LastName=reader.GetString(2),
                            Date=reader.GetDateTime(3),
                            MobileNo=reader.GetString(4),
                            Email=reader.GetString(5),
                            Address=reader.GetString(6),
                            Intake=reader.GetString(7),
                            CourseName = reader.GetString(8),
                            Batch = reader.GetString(9)
                            

                        });
                    }
                }
                return students;
            }
        }
        public async Task<StudentResponse> GetStudentById(string NicNo)
        {
            StudentResponse student =null;
            using( var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("select Students.*, Courses.CourseName, Enrollments.Batch from Students left join Enrollments on Students.StudentId = Enrollments.StudentId left join Courses on Enrollments.CourseId = Courses.CourseId where Students.StudentId = @studentId;", connection);
                command.Parameters.AddWithValue("@studentId", NicNo);
                await connection.OpenAsync();
                using(var reader = await command.ExecuteReaderAsync())
                {
                    if(await reader.ReadAsync())
                    {
                        student = new StudentResponse
                        {
                            NicNo = reader.GetString(0),
                            FirstName = reader.GetString(1),
                            LastName = reader.GetString(2),
                            Date = reader.GetDateTime(3),
                            MobileNo = reader.GetString(4),
                            Email = reader.GetString(5),
                            Address = reader.GetString(6),
                            Intake = reader.GetString(7),
                            CourseName = reader.GetString(8),
                            Batch = reader.GetString(9)
                        };
                        return student;

                    }
                    else
                    {
                        return null;
                    }
                }
                
            }
        }
        
        
        public async Task UpdateStudent(string NicNo, Student student)
        {
            
            using(var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("UPDATE Students SET FirstName = @FirstName, LastName = @LastName, Mobile=@MobileNo, Email=@Email, Address=@Address WHERE StudentId = @NicNo", connection);
                command.Parameters.AddWithValue("@NicNo", NicNo);
                command.Parameters.AddWithValue("@FirstName", student.FirstName);
                command.Parameters.AddWithValue("@LastName", student.LastName);
                command.Parameters.AddWithValue("@MobileNo", student.MobileNo);
                command.Parameters.AddWithValue("@Email", student.Email);
                command.Parameters.AddWithValue("@Address", student.Address);

                await connection.OpenAsync();
                await command.ExecuteNonQueryAsync();
               
            }
            
        }

        public async Task DeleteStudentById(string NicNo)
        {
         
            using (var connection = new SqlConnection(_connectionString))
            {
                
                    var deleteCommand = new SqlCommand("DELETE FROM Students WHERE StudentId = @NicNo", connection);
                    deleteCommand.Parameters.AddWithValue("@NicNo", NicNo);
                    await connection.OpenAsync();
                    await deleteCommand.ExecuteNonQueryAsync();
            
            }
            
        }

    }
}
