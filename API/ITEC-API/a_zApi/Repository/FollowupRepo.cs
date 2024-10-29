using a_zApi.Controllers;
using a_zApi.DTO.RequestDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using Microsoft.Data.SqlClient;
using Microsoft.Identity.Client;

namespace a_zApi.Repository
{
    public class FollowupRepo : IFollowupRepo
    {
        private readonly string _connectionString;
        public FollowupRepo(string connectionString)
        {
            _connectionString = connectionString;
        }
        public async Task addFollowUp(FollowUp followup)
        {

        string query = "insert into Followup values (@name, @mobile, @course, @date, @email, @address, @description)";

            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                using(SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@name", followup.Name);
                    command.Parameters.AddWithValue("@mobile", followup.Mobile);
                    command.Parameters.AddWithValue("@course", followup.Course);
                    command.Parameters.AddWithValue("@date", followup.Date);
                    command.Parameters.AddWithValue("@email", followup.Email);
                    command.Parameters.AddWithValue("@address", followup.Address);
                    command.Parameters.AddWithValue("@description", followup.Description);

                    await connection.OpenAsync();
                    await command.ExecuteReaderAsync();

                }
            }
        }

        public async Task<List<FollowUp>> getAllFollowUp()
        {
            var followups = new List<FollowUp>();
            string query = "select * from FollowUp";

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using(SqlCommand command = new SqlCommand(query, connection))
                {
                    await connection.OpenAsync();
                    using(SqlDataReader reader = await command.ExecuteReaderAsync())
                    {
                        while(await  reader.ReadAsync()) {

                            followups.Add(new FollowUp
                            {
                                Name = reader.GetString(0),
                                Mobile = reader.GetString(1),
                                Course = reader.GetString(2),
                                Date = reader.GetDateTime(3),
                                Email = reader.GetString(4),
                                Address = reader.GetString(5),
                                Description = reader.GetString(6),
                            });
                        }
                    }
                }
            }

            return followups;
        }


        public async Task updateDescription(FollowUpChangeRequest followupchangerequest)
        {
            string query = "update FollowUp set Description = @description where Email = @email";

            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@description", followupchangerequest.Description);
                    command.Parameters.AddWithValue("@email", followupchangerequest.Email);
                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();

                }
            }
        }
    }
}
