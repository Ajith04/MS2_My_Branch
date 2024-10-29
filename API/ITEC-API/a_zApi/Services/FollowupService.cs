using a_zApi.Controllers;
using a_zApi.DTO.RequestDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using a_zApi.IServices;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Services
{
    public class FollowupService : IFollowupService
    {
        private readonly IFollowupRepo _ifollowuprepo;

        public FollowupService(IFollowupRepo ifollowuprepo)
        {
            _ifollowuprepo = ifollowuprepo;
        }

        public async Task addFollowUp(FollowUp followup)
        {
            await _ifollowuprepo.addFollowUp(followup);
        }

        public async Task<List<FollowUp>> getAllFollowUp()
        {
            var data = await _ifollowuprepo.getAllFollowUp();
            return data;
        }

        public async Task updateDescription(FollowUpChangeRequest followupchangerequest)
        {
            await _ifollowuprepo.updateDescription(followupchangerequest);
        }
    }
}
