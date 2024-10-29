using a_zApi.DTO.RequestDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using a_zApi.IServices;
using a_zApi.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IMController : ControllerBase
    {

        private readonly IIMService _iimservice;

        public IMController(IIMService iimservice)
        {
            _iimservice = iimservice;
        }

        [HttpGet ("get-reg-fee")]
        public async Task<IActionResult> getRegFee()
        {
            var data = await _iimservice.getRegFee();
            return Ok(data);
        }

        [HttpPatch ("change-reg-fee")]
        public async Task<IActionResult> changeRegFee(int regFee)
        {
            await _iimservice.changeRegFee(regFee);
            return Ok();
        }

        [HttpPost("add-new-batch")]
        public async Task<IActionResult> addBatch(string batch)
        {
            await _iimservice.addBatch(batch);
            return Ok();
        }

        [HttpGet("get-all-batches")]
        public async Task<IActionResult> getBatches()
        {
            var data = await _iimservice.getBatches();
            return Ok(data);
        }

        [HttpPost ("add-module")]
        public async Task<IActionResult> addModule(ModuleRequest modulerequest)
        {
            await _iimservice.addModule(modulerequest);
            return Ok();
        }

        [HttpGet ("get-modules")]
        public async Task<IActionResult> getModules()
        {
            var data = await _iimservice.getModules();
            return Ok(data);
        }
    }
}
