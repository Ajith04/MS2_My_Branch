using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.IRepository;
using Microsoft.Data.SqlClient;
using Microsoft.Identity.Client;

namespace a_zApi.Repository
{
    public class PaymentRepo : IPaymentRepo
    {
        private readonly string _connectionString;
        public PaymentRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task addPayment(PaymentRequest paymentrequest)
        {
            string query = "insert into Payment values (@studentId, @payment, @date)";

            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                using(SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@studentId", paymentrequest.StudentId);
                    command.Parameters.AddWithValue("@payment", paymentrequest.Fee);
                    command.Parameters.AddWithValue("@date", paymentrequest.Date);

                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();

                }
            }
        }

        public async Task<PaymentResponse> getPayment(string studentId)
        {
            var paymentDetails = new PaymentResponse();

            string query = "select Students.StudentId, Students.FirstName, Students.Mobile, sum(Enrollments.CourseFee)-sum(payment.payment) as DueAmount from Students right join Enrollments on Students.StudentId = Enrollments.StudentId right join Payment on Students.StudentId = Payment.StudentId where Students.StudentId = @studentId group by Students.StudentId, Students.FirstName, Students.Mobile;";

            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                using(SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@studentId", studentId);
                    await connection.OpenAsync();

                    using(SqlDataReader reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync()) {
                            paymentDetails = new PaymentResponse()
                            {
                                StudentId = reader.GetString(0),
                                FirstName = reader.GetString(1),
                                Mobile = reader.GetString(2),
                                DueAmount = reader.GetInt32(3)
                            };
                            return paymentDetails;
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
            }
        }
    }
}
