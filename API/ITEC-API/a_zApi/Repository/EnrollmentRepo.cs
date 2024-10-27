using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;
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

        public async Task addRegFee(RegFeeRequest regfeerequest)
        {
            string query = "insert into RegistrationFee values (@studentId, @regFee)";

            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                using(SqlCommand command = new SqlCommand(query, connection)) {

                    command.Parameters.AddWithValue("@studentId", regfeerequest.StudentId);
                    command.Parameters.AddWithValue("@regFee", regfeerequest.RegistrationFee);

                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();
                }
            }
        }


        public async Task createStudentAccount(StudentAccountRequest studentaccountrequest)
        {
            string query = "insert into UserAccounts values (@studentId, @password)";

            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@studentId", studentaccountrequest.StudentId);
                    command.Parameters.AddWithValue("@password", studentaccountrequest.Password);

                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();
                }
            }
        }



    }
}
