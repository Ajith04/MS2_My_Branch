using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;

namespace a_zApi.IRepository
{
    public interface IPaymentRepo
    {
        Task addPayment(PaymentRequest paymentrequest);
        Task<PaymentResponse> getPayment(string studentId);
    }
}
