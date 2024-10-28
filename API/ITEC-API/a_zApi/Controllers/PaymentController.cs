﻿using a_zApi.DTO.RequestDto;
using a_zApi.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {

        private readonly IPaymentService _ipaymentservice;

        public PaymentController(IPaymentService ipaymentservice)
        {
            _ipaymentservice = ipaymentservice;
        }
        [HttpPost ("add-payment")]
        public async Task<IActionResult> addPayment(PaymentRequest paymentrequest)
        {
            await _ipaymentservice.addPayment (paymentrequest);
            return Ok();
        }

        [HttpGet ("get-payment-details")]
        public async Task<IActionResult> getPayment(string studentId)
        {
            var data = await _ipaymentservice.getPayment (studentId);
            return Ok(data);
        }
    }
}