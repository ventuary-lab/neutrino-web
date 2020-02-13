
export const mapBondOrderForRest = (rawOrder) => {
    const resOrder = {};
    const orderKeys = Object.keys(rawOrder)

    const keysMap = {
        filledtotal: 'filledTotal',
        resttotal: 'restTotal',
        filledamount: 'filledAmount',
        restamount: 'restAmount',
        pairname: 'pairName',
        order_id: 'id',
        debug_roi: 'debugRoi',
        debug_price: 'debugPrice'
    }

    for (const orderKey of orderKeys) {
        const newKey = keysMap[orderKey] || orderKey;

        resOrder[newKey] = rawOrder[orderKey];

        if (newKey === 'timestamp') {
            resOrder[newKey] = Number(resOrder[newKey])
        }
    }

    return resOrder;
}