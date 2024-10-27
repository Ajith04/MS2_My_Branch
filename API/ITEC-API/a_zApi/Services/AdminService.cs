using a_zApi.DTO.ResponseDto;
using a_zApi.IRepository;
using a_zApi.IServices;

namespace a_zApi.Services
{
    public class AdminService : IAdminService

    {
        private readonly IAdminRepo _iadminrepo;

        public AdminService(IAdminRepo iadminrepo)
        {
            _iadminrepo = iadminrepo;
        }

        public async Task<AdminResponse> getAdmin()
        {
            var admin = await _iadminrepo.getAdmin();
            
            AdminResponse adminResponse = new AdminResponse();
            adminResponse.UserName = admin.UserName;
            adminResponse.Password = admin.Password;

            return adminResponse;
        }

        public async Task editAdmin(string newPassword)
        {
            await _iadminrepo.editAdmin(newPassword);
        }
    }
}
