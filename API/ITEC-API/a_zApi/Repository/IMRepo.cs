using a_zApi.DTO.RequestDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using Microsoft.Data.SqlClient;

namespace a_zApi.Repository
{
    public class IMRepo : IIMRepo
    {
        private readonly string _connectionstring;

        public IMRepo(string Connectionstring)
        {
            _connectionstring = Connectionstring;
        }

        public async Task<DefalutRegFee> getRegFee()
        {
            string query = "select RegFee from RegFee";

            using (SqlConnection connection = new SqlConnection(_connectionstring))
            {
                using(SqlCommand command = new SqlCommand(query, connection))
                {
                    await connection.OpenAsync();

                    using (SqlDataReader reader = await command.ExecuteReaderAsync()) {
                        if (await reader.ReadAsync())
                        {
                            var regFee = new DefalutRegFee()
                            {
                                Fee = reader.GetInt32(0)
                            };
                            return regFee;
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
            }
        }


        public async Task changeRegFee(int regFee)
        {
            string query = "update RegFee set RegFee = @regFee";

            using (SqlConnection connection = new SqlConnection(_connectionstring))
            {
                using(SqlCommand command = new SqlCommand(@query, connection))
                {
                    command.Parameters.AddWithValue("@regFee", regFee);
                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();
                }
            }
        }


        public async Task addBatch(string batch)
        {
            string query = "insert into Batch values (@batchName)";

            using (SqlConnection connection = new SqlConnection(_connectionstring))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@batchName", batch);
                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();
                }
            }
        }

        public async Task<List<Batch>> getBatches()
        {
            var batches = new List<Batch>();
            string query = "select Batch from Batch";

            using (SqlConnection connection = new SqlConnection(_connectionstring))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    await connection.OpenAsync();
                    using(SqlDataReader reader = await command.ExecuteReaderAsync()) {
                    
                        while (await reader.ReadAsync())
                        {
                            var batch = new Batch()
                            {
                                BatchName = reader.GetString(0)
                            };
                            batches.Add(batch);
                        }
                        
                    }
                }
            }
            return batches;
        }



        public async Task addModule(Modules modules)
        {
            
            string query = "insert into Modules values (@title, @course, @batch, @date, @module, @description)";

            using(SqlConnection connection = new SqlConnection(_connectionstring))
            {
                using(SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@title", modules.Title);
                    command.Parameters.AddWithValue("@course", modules.Course);
                    command.Parameters.AddWithValue("@batch", modules.Batch);
                    command.Parameters.AddWithValue("@date", modules.Date);
                    command.Parameters.AddWithValue("@module", modules.Module);
                    command.Parameters.AddWithValue("@description", modules.Description);

                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();

                }
            }
        }


        public async Task<List<Modules>> getModules()
        {
            var moduleList = new List<Modules>();
            string query = "select * from Modules";

            using(SqlConnection connection = new SqlConnection(_connectionstring)) { 
            
                using (SqlCommand command = new SqlCommand(@query, connection))
                {
                    await connection.OpenAsync();

                    using(SqlDataReader reader = await command.ExecuteReaderAsync()) { 
                    
                        while (await reader.ReadAsync()) {

                            moduleList.Add(new Modules
                            {
                                Title = reader.GetString(0),
                                Course = reader.GetString(1),
                                Batch = reader.GetString(2),
                                Date = reader.GetDateTime(3),
                                Module = reader["module"] as byte[],
                                Description = reader.GetString(5),
                            });
                        }
                    }
                }
            }
            return moduleList;
        }
    }
}
