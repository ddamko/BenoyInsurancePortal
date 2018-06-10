namespace BenoyInsPortal.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'BenoyInsPortal.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
