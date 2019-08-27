export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const changeCurrency = currency => {

    return ({
        type: CHANGE_CURRENCY,
        currency,
    });
};

