using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.IRepository;
using a_zApi.IServices;

namespace a_zApi.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly IPaymentRepo _ipaymentrepo;

        public PaymentService(IPaymentRepo ipaymentrepo)
        {
            _ipaymentrepo = ipaymentrepo;
        }
        public async Task addPayment(PaymentRequest paymentrequest)
        {
            await _ipaymentrepo.addPayment(paymentrequest);
        }

        public async Task<PaymentResponse> getPayment(string studentId)
        {
            var data = await _ipaymentrepo.getPayment(studentId);
            return data;
        }
    }
}
