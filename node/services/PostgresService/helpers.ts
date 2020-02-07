
// {
//     "height": 1919660,
//     "timestamp": "1111",
//     "owner": "3P5xJvdq98s1cECtcUR6c1vUSXgQrdFGJ4J",
//     "price": 47,
//     "total": 8901,
//     "filledtotal": null,
//     "resttotal": 8901,
//     "status": "new",
//     "index": 0,
//     "amount": 18938.2978723404,
//     "filledamount": null,
//     "restamount": 18938.2978723404,
//     "pairname": "usdn-usdnb",
//     "type": "buy",
//     "order_id": "6HnftW8LVJhc9LmYShjb3cX14zkx1kG7C7wi2J3dCKiH"
//   },

// "height": 1919660,
// "timestamp": 1581095819750,
// "owner": "3P5xJvdq98s1cECtcUR6c1vUSXgQrdFGJ4J",
// "price": 47,
// "total": 8901,
// "filledTotal": 0,
// "restTotal": 8901,
// "status": "new",
// "index": 0,
// "amount": 18938,
// "filledAmount": 0,
// "restAmount": 18938.3,
// "pairName": "usd-nb_usd-n",
// "type": "buy",
// "id": "6HnftW8LVJhc9LmYShjb3cX14zkx1kG7C7wi2J3dCKiH"
// },

export const mapBondOrderForRest = (rawOrder) => {
    const resOrder = {};
    const orderKeys = Object.keys(rawOrder)

    const keysMap = {
        filledtotal: 'filledTotal',
        resttotal: 'restTotal',
        filledamount: 'filledAmount',
        restamount: 'restAmount',
        pairname: 'pairName',
        order_id: 'id'
    }

    for (const orderKey of orderKeys) {
        const newKey = keysMap[orderKey] || orderKey;

        resOrder[newKey] = rawOrder[orderKey];
    }

    return resOrder;
}