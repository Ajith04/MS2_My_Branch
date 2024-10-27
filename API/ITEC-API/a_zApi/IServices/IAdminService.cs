using a_zApi.DTO.ResponseDto;

namespace a_zApi.IServices
{
    public interface IAdminService
    {
        Task<AdminResponse> getAdmin();

        Task editAdmin(string newPassword);
    }
}
