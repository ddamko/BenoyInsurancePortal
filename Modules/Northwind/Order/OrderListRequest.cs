using Serenity.Services;

namespace BenoyInsPortal.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}