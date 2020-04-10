import OrderStatusEnum from '../enums/OrderStatusEnum';

export const mapFieldsToNumber = (
    item: Record<string, any>,
    fields: string[]
): Record<string, any> => {
    let updatedItem = { ...item };

    for (const field of fields) {
        updatedItem[field] = Number(updatedItem[field]);
    }

    return updatedItem;
};

export const getOpenedOrders = (orders) => {
    const sortedOrders = [];

    orders = orders.filter(order => order.status == OrderStatusEnum.NEW);
    if (orders == undefined || orders.length == 0) return orders;

    const firstOrder = orders.filter(order => order.isFirst)[0];
    if (firstOrder == undefined || firstOrder.length == 0) return orders;

    let nextProcessOrder = firstOrder;
    sortedOrders.push(firstOrder);

    while (true) {
        if (nextProcessOrder.orderNext == null) {
            return sortedOrders;
        }
        let foundOrder = orders.filter(order => order.id == nextProcessOrder.orderNext)[0];
        sortedOrders.push(foundOrder);
        nextProcessOrder = foundOrder;
    }
}