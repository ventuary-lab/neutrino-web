import _get from 'lodash-es/get';
import _orderBy from 'lodash-es/orderBy';

import {CURRENCY_SET_CURRENT, CURRENCY_SET_PRICES} from 'actions/currency';
import CurrencyEnum from 'enums/CurrencyEnum';
import PairsEnum from 'enums/PairsEnum';

const initialState = {
    base: CurrencyEnum.getBaseCurrency(CurrencyEnum.USD_N),
    quote: CurrencyEnum.USD_N,
    prices: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case CURRENCY_SET_CURRENT:
            return {
                ...state,
                base: action.base,
                quote: action.quote,
            };

        case CURRENCY_SET_PRICES:
            return {
                ...state,
                prices: action.prices,
            };
    }

    return state;
};

export const getBaseCurrency = state => _get(state, 'currency.base');
export const getQuoteCurrency = state => _get(state, 'currency.quote');
export const getPairName = state => getBaseCurrency(state) + '_' + getQuoteCurrency(state);
export const getPrices = state => state.currency.prices;
export const getWavesExchanges = (state, currency) => state.currency.prices[currency] || [];
export const getLastWavesExchange = (state, currency) => {
    let prices = getWavesExchanges(state, currency);
    if (prices.length > 0) {
        prices = _orderBy(prices, 'height', 'desc');
        return prices[0].price;
    } else {
        return 0;
    }
};
