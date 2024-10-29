using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;

namespace a_zApi.IServices
{
    public interface IPaymentService
    {
        Task addPayment(PaymentRequest paymentrequest);
        Task<PaymentResponse> getPayment(string studentId);
        Task<List<SinglePaymentResponse>> getAllPaymentsById(string studentId);
    }
}
