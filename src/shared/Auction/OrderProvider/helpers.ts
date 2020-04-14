
export const computeOrderPosition = (bondOrders, roi) => {
    const sortedBondOrders = [bondOrders.find((order) => order.is_first)].filter(Boolean);

    while (true) {
        const lastSortedOrder = sortedBondOrders[sortedBondOrders.length - 1];

        if (!lastSortedOrder || lastSortedOrder.order_next === null) {
            break;
        }

        const nextOrder = bondOrders.find((order) => order.id === lastSortedOrder.order_next);
        sortedBondOrders.push(nextOrder);
    }

    let position = '';
    if (sortedBondOrders.length === 0) {
        return position;
    }

    sortedBondOrders.forEach((order) => {
        if (roi >= Number(order.debugRoi)) {
            position = order.id;
        }
    });

    return position;
};
