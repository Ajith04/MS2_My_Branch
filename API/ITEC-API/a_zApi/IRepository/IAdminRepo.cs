using a_zApi.Enitity;

namespace a_zApi.IRepository
{
    public interface IAdminRepo
    {

        Task<Admin> getAdmin();
        Task editAdmin(string newPassword);
    }
}
