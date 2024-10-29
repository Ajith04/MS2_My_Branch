using a_zApi.Enitity;

namespace a_zApi.IRepository
{
    public interface IIMRepo
    {
        Task<DefalutRegFee> getRegFee();

        Task changeRegFee(int regFee);
        Task addBatch(string batch);
        Task<List<Batch>> getBatches();

        Task addModule(Modules modules);

        Task<List<Modules>> getModules();
    }
}
