using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using Microsoft.Data.SqlClient;
using Microsoft.Identity.Client;
using System.Data;

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

            string query = "SELECT Students.StudentId, Students.FirstName, Students.Mobile, Students.Email, (COALESCE((SELECT SUM(CourseFee) FROM Enrollments WHERE Enrollments.StudentId = Students.StudentId), 0) - COALESCE((SELECT SUM(Payment) FROM Payment WHERE Payment.StudentId = Students.StudentId), 0)) AS DueAmount FROM Students WHERE Students.StudentId = @studentId;";

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
                                Email = reader.GetString(3),
                                DueAmount = reader.GetInt32(4)
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


        public async Task<List<SinglePaymentResponse>> getAllpaymentsById(string studentId)
        {
            var paymentList = new List<SinglePaymentResponse>();
            string query = "select Payment, Date from Payment where StudentId = @studentId";

            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                using(SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@studentId", studentId);

                    await connection.OpenAsync();

                    using(SqlDataReader reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var singlePayment = new SinglePaymentResponse()
                            {
                                Amount = reader.GetInt32(0),
                                Date = reader.GetDateTime(1),
                            };
                            paymentList.Add(singlePayment);
                                
                        }
                        
                    }

                }
            }
            return paymentList;
        }



        public async Task<List<PaymentResponse>> getAllDue()
        {
            var paymentDetails = new List<PaymentResponse>();

            string query = "SELECT Students.StudentId, Students.FirstName, Students.Mobile, Students.Email, (COALESCE((SELECT SUM(CourseFee) FROM Enrollments WHERE Enrollments.StudentId = Students.StudentId), 0) - COALESCE((SELECT SUM(Payment) FROM Payment WHERE Payment.StudentId = Students.StudentId), 0)) AS DueAmount FROM Students;";

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    await connection.OpenAsync();

                    using (SqlDataReader reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                           var payment = new PaymentResponse()
                            {
                                StudentId = reader.GetString(0),
                                FirstName = reader.GetString(1),
                                Mobile = reader.GetString(2),
                                Email = reader.GetString(3),
                                DueAmount = reader.GetInt32(4)

                            };
                            paymentDetails.Add(payment);
                        }
                    }
                }
            }
            return paymentDetails;
        }
    }
}
