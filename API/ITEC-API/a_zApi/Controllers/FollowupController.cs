using a_zApi.DTO.RequestDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using a_zApi.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FollowupController : ControllerBase
    {
        private readonly IFollowupService _ifollowupservice;

        public FollowupController(IFollowupService ifollowupservice)
        {
            _ifollowupservice = ifollowupservice;
        }

        [HttpPost ("add-followup")]
        public async Task<IActionResult> addFollowUp(FollowUp followup)
        {
            await _ifollowupservice.addFollowUp (followup);
            return Ok();
        }

        [HttpGet ("get-all-followup")]
        public async Task<IActionResult> getAllFollowUp()
        {
            var data = await _ifollowupservice.getAllFollowUp();
            return Ok(data);
        }

        [HttpPatch ("update-description")]
        public async Task<IActionResult> updateDescription(FollowUpChangeRequest followupchangerequest)
        {
            await _ifollowupservice.updateDescription (followupchangerequest);
            return Ok();
        }
    }
}
