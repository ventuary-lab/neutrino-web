import CurrencyEnum from 'enums/CurrencyEnum';
// import CollectionEnum from 'enums/CollectionEnum';
// import { http } from 'components';

export const CURRENCY_SET_CURRENT = 'CURRENCY_SET_CURRENT';
export const CURRENCY_SET_PRICES = 'CURRENCY_SET_PRICES';

export const currencySetCurrent = (
    quote: string,
    base: null | string = null,
    source: null | string = null
) => {
    base = base || CurrencyEnum.getBaseCurrency(quote);
    source = source || CurrencyEnum.getSourceCurrency(quote);

    return {
        type: CURRENCY_SET_CURRENT,
        source,
        base,
        quote,
    };
};

// export const currencyWsHandler = event => dispatch => {
//     if (
//         event.stream === 'collections' &&
//         event.data.collectionName === CollectionEnum.NEUTRINO_PRICES
//     ) {
//         dispatch(currencyFetchPrices());
//     }
// };

// export const currencySetPrices = prices => ({
//     type: CURRENCY_SET_PRICES,
//     prices,
// });

// export const currencyFetchPrices = () =>
//     http.get('/api/v1/prices').then(prices => currencySetPrices(prices));
