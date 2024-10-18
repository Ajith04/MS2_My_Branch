using a_zApi.Enitity;
using a_zApi.IRepository;
using Microsoft.Data.SqlClient;
using System.Data;

namespace a_zApi.Repository
{
    public class CourseRepository:ICourseRepository
    {
        private readonly string _connectionString;
        public CourseRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public async Task CreateCourse(Course course)
        {
            using(var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("INSERT INTO Courses (CourseId,CourseName,CourseImage,Duration,Fee,Instructor,Syllabus)VALUES(@CourseId,@CourseName,@courseImage,@Duration,@Fee,@Instructor,@Syllabus)", connection);
                command.Parameters.AddWithValue("@CourseId", course.CourseId);
                command.Parameters.AddWithValue("@CourseName", course.CourseName);
                command.Parameters.AddWithValue("@courseImage", course.CourseImage);
                command.Parameters.AddWithValue("@Duration", course.Duration);
                command.Parameters.AddWithValue("@Fee", course.Fee);
                command.Parameters.AddWithValue("@Instructor", course.Instructor);
                command.Parameters.AddWithValue("@Syllabus", course.Syllabus);

                await connection.OpenAsync();
                await command.ExecuteNonQueryAsync();

            }
        }
        public async Task<List<Course>>GetAllCourse()
        {
            var courses = new List<Course>();
            using(var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("select * from Courses", connection);
                await connection.OpenAsync();

                using(var reader=await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        courses.Add(new Course
                        {
                            CourseId = reader.GetString(0),
                            CourseName = reader.GetString(1),
                            CourseImage = reader["CourseImage"] as byte[],
                            Duration = reader.GetString(3),
                            Fee = reader.GetInt32(4),
                            Instructor = reader.GetString(5),
                            Syllabus = reader.GetString(6)

                        });

                    }
                }
                return courses;
            }
        }
        public async Task<Course> GetCourseById(string CourseId)
        {
            Course course=null;
            using(var connection=new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("SELECT * FROM Courses WHERE CourseId=@CourseId", connection);
                command.Parameters.AddWithValue("@CourseId", CourseId);

                await connection.OpenAsync();
                using(var reader= await command.ExecuteReaderAsync())
                {
                    if (await reader.ReadAsync())
                    {
                        course = new Course()
                        {
                            CourseId = reader.GetString(0),
                            CourseName = reader.GetString(1),
                            CourseImage = reader["CourseImage"] as byte[],
                            Duration = reader.GetString(3),
                            Fee = reader.GetInt32(4),
                            Instructor = reader.GetString(5),
                            Syllabus = reader.GetString(6)
                        };


                    }
                }
                return course;
            }
        }
       

        
        public async Task UpdateCourse(string CourseId, Course course)
        {
             
            using(var connection = new SqlConnection(_connectionString))
            {
                var command = new SqlCommand("UPDATE Courses SET CourseName = @CourseName, CourseImage = @courseImage, Duration = @Duration,Fee=@Fee,Instructor=@Instructor,Syllabus=@Syllabus WHERE CourseId = @CourseId", connection);
                command.Parameters.AddWithValue("@CourseId", CourseId);
                command.Parameters.AddWithValue("@CourseName", course.CourseName);
                command.Parameters.AddWithValue("@courseImage", course.CourseImage);
                command.Parameters.AddWithValue("@Duration", course.Duration);
                command.Parameters.AddWithValue("@Fee", course.Fee);
                command.Parameters.AddWithValue("@Instructor", course.Instructor);
                command.Parameters.AddWithValue("@Syllabus", course.Syllabus);

                await connection.OpenAsync();
                await command.ExecuteNonQueryAsync();
                

            }
            
           
        }


        public async Task DeleteCourseById(string CourseId)
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                var deleteCommand = new SqlCommand("DELETE FROM Courses WHERE CourseId=@CourseId", connection);
                deleteCommand.Parameters.AddWithValue("@CourseId", CourseId);
                await connection.OpenAsync();
                await deleteCommand.ExecuteNonQueryAsync();
            }

        }

    }
}
