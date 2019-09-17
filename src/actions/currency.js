import CurrencyEnum from 'enums/CurrencyEnum';
import CollectionEnum from 'enums/CollectionEnum';
import {http} from 'components';

export const CURRENCY_SET_CURRENT = 'CURRENCY_SET_CURRENT';
export const CURRENCY_SET_PRICES = 'CURRENCY_SET_PRICES';

export const currencySetCurrent = (quote, base = null) => {
    base = base || CurrencyEnum.getBaseCurrency(quote);
    return {
        type: CURRENCY_SET_CURRENT,
        base,
        quote,
    };
};

export const currencyWsHandler = event => dispatch => {
    if (event.stream === 'collections' && event.data.collectionName === CollectionEnum.NEUTRINO_PRICES) {
        dispatch(currencyFetchPrices());
    }
};

export const currencySetPrices = prices => ({
    type: CURRENCY_SET_PRICES,
    prices,
});

export const currencyFetchPrices = () => http.get('/api/v1/prices')
    .then(prices => currencySetPrices(prices));
