using a_zApi.DTO.RequestDto;
using a_zApi.IRepository;
using Microsoft.Data.SqlClient;

namespace a_zApi.Repository
{
    public class EnrollmentRepo : IEnrollmentRepo
    {

        private readonly string _connectionString;
        public EnrollmentRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task createEnrollment(EnrollmentRequest enrollmentrequest)
        {
            string query = "insert into Enrollments values (@studentId, @courseId, @enrollDate, @courseFee, @batch)";

            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@studentId", enrollmentrequest.StudentId);
                    command.Parameters.AddWithValue("@courseId", enrollmentrequest.CourseId);
                    command.Parameters.AddWithValue("@enrollDate", enrollmentrequest.EnrollmentDate);
                    command.Parameters.AddWithValue("@courseFee", enrollmentrequest.Fee);
                    command.Parameters.AddWithValue("@batch", enrollmentrequest.Batch);

                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();


                }
            }
        }
    }
}
