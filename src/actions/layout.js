import CurrencyEnum from 'enums/CurrencyEnum';

export const LAYOUT_SET_CURRENCY = 'LAYOUT_SET_CURRENCY';

export const setCurrency = (quoteCurrency, baseCurrency = null) => {
    baseCurrency = baseCurrency || CurrencyEnum.getBaseCurrency(quoteCurrency);
    return {
        type: LAYOUT_SET_CURRENCY,
        baseCurrency,
        quoteCurrency,
    };
};
