using a_zApi.Controllers;
using a_zApi.DTO.RequestDto;
using a_zApi.Enitity;

namespace a_zApi.IRepository
{
    public interface IFollowupRepo
    {
        Task addFollowUp(FollowUp followup);
        Task<List<FollowUp>> getAllFollowUp();
        Task updateDescription(FollowUpChangeRequest followupchangerequest);
    }
}
