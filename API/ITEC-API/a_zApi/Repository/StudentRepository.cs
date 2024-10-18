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
                var command = new SqlCommand("INSERT INTO Students(StudentId,FirstName,LastName,JoinDate,Mobile,Email,Address)VALUES(@NicNo,@FirstName,@LastName,@Date,@MobileNo,@Email,@Address)", connection);
                command.Parameters.AddWithValue("@NicNo", student.NicNo);
                command.Parameters.AddWithValue("@FirstName",student.FirstName);
                command.Parameters.AddWithValue("@LastName",student.LastName);
                command.Parameters.AddWithValue("@Date", student.Date);
                command.Parameters.AddWithValue("@MobileNo", student.MobileNo);
                command.Parameters.AddWithValue("@Email", student.Email);
                command.Parameters.AddWithValue("@Address",student.Address);

                await connection.OpenAsync();
                await command.ExecuteNonQueryAsync();
            }
           
        }

        public async Task<List<Student>> GetAllStudent()
        {
            var students = new List<Student>(); 
            using( var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("select * from Students",connection);
                await connection.OpenAsync();
                using(var reader=await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        students.Add(new Student
                        {
                            NicNo=reader.GetString(0),
                            FirstName=reader.GetString(1),
                            LastName=reader.GetString(2),
                            Date=reader.GetDateTime(3),
                            MobileNo=reader.GetString(4),
                            Email=reader.GetString(5),
                            Address=reader.GetString(6),

                        });
                    }
                }
                return students;
            }
        }
        public async Task<Student> GetStudentById(string NicNo)
        {
            Student student=null;
            using( var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("SELECT * FROM Students WHERE StudentId=@NicNo", connection);
                command.Parameters.AddWithValue("@NicNo", NicNo);
                await connection.OpenAsync();
                using(var reader = await command.ExecuteReaderAsync())
                {
                    if(await reader.ReadAsync())
                    {
                        student = new Student
                        {
                            NicNo = reader.GetString(0),
                            FirstName = reader.GetString(1),
                            LastName = reader.GetString(2),
                            Date = reader.GetDateTime(3),
                            MobileNo = reader.GetString(4),
                            Email = reader.GetString(5),
                            Address = reader.GetString(6)
                        };

                    }
                }
                return student;
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
