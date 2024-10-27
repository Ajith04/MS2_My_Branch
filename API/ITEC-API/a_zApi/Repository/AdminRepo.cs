using a_zApi.Enitity;
using a_zApi.IRepository;
using Microsoft.Data.SqlClient;

namespace a_zApi.Repository
{
    public class AdminRepo : IAdminRepo
    {
        private readonly string _connectionstring;

        public AdminRepo(string Connectionstring)
        {
            _connectionstring = Connectionstring;
        }

        public async Task<Admin> getAdmin()
        {
            string query = "select * from Admin";
            Admin admin = null;

            using (SqlConnection connection = new SqlConnection(_connectionstring))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    await connection.OpenAsync();

                    using(SqlDataReader reader = await command.ExecuteReaderAsync())
                    {
                        if(await reader.ReadAsync())
                        {
                            admin = new Admin()
                            {
                                UserName = reader.GetString(0),
                                Password = reader.GetString(1)
                            };
                        }
                    }
                    return admin;
                }
            }
        }

        public async Task editAdmin(string newPassword)
        {
            string query = "update Admin set Password = @password where UserName = @userName";

            using (SqlConnection connection = new SqlConnection(_connectionstring))
            {
                using(SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@password", newPassword);
                    command.Parameters.AddWithValue("@userName", "admin");

                    await connection.OpenAsync();
                    await command.ExecuteReaderAsync();
                }
            }
        }

    }
}
