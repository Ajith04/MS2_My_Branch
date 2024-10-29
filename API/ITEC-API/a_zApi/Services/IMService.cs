using a_zApi.DTO.RequestDto;
using a_zApi.DTO.ResponseDto;
using a_zApi.Enitity;
using a_zApi.IRepository;
using a_zApi.IServices;
using Microsoft.AspNetCore.Mvc;

namespace a_zApi.Services
{
    public class IMService : IIMService
    {
        private readonly IIMRepo _iimrepo;

        public IMService(IIMRepo iimrepo)
        {
            _iimrepo = iimrepo;
        }

        public async Task<DefalutRegFee> getRegFee()
        {
            var data = await _iimrepo.getRegFee();
            return data;
        }

        public async Task changeRegFee(int regFee)
        {
            await _iimrepo.changeRegFee(regFee);
        }

        public async Task addBatch(string batch)
        {
            await _iimrepo.addBatch(batch);
        }

        public async Task<List<Batch>> getBatches()
        {
            var data = await _iimrepo.getBatches();
            return data;
        }

        public async Task addModule(ModuleRequest modulerequest)
        {
            var module = new Modules();
            module.Title = modulerequest.Title;
            module.Course = modulerequest.Course;
            module.Batch = modulerequest.Batch;
            module.Date = modulerequest.Date;
            if (modulerequest.Module != null)
            {
                using (var memoryStream = new MemoryStream())
                {
                    await modulerequest.Module.CopyToAsync(memoryStream);
                    module.Module = memoryStream.ToArray();
                }
            }

            module.Description = modulerequest.Description;

            await _iimrepo.addModule(module);
        }

        public async Task<List<ModuleResponse>> getModules()
        {
            var response = new List<ModuleResponse>();

            var data = await _iimrepo.getModules();

            foreach (var module in data)
            {
                var singleResponse = new ModuleResponse();
                singleResponse.Title = module.Title;
                singleResponse.Course = module.Course;
                singleResponse.Batch = module.Batch;
                singleResponse.Date = module.Date;
                singleResponse.Module = module.Module;
                singleResponse.Description = module.Description;
                
                response.Add(singleResponse);
            }
            return response;


        }
    }
}
