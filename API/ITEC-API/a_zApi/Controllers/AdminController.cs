using a_zApi.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _iadminservice;

        public AdminController(IAdminService iadminservice)
        {
            _iadminservice = iadminservice;
        }

        [HttpGet ("get-admin")]
        public async Task<IActionResult> getAdmin()
        {
           var admin = await _iadminservice.getAdmin();
            return Ok(admin);
        }

        [HttpPatch ("edit-admin")]
        public async Task editAdmin(string newpassword)
        {
            await _iadminservice.editAdmin(newpassword);
        }

    }
}
