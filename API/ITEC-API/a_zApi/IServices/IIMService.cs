using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.IServices
{
    public interface IIMService
    {

        Task<DefalutRegFee> getRegFee();
        Task changeRegFee(int regFee);
        Task addBatch(string batch);
        Task<List<Batch>> getBatches();
        Task addModule(ModuleRequest modulerequest);
        Task<List<ModuleResponse>> getModules();
    }
}
