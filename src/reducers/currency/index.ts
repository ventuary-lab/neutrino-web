import _get from 'lodash-es/get';
import _orderBy from 'lodash-es/orderBy';

import { CURRENCY_SET_CURRENT, CURRENCY_SET_PRICES } from 'actions/currency';
import CurrencyEnum from 'enums/CurrencyEnum';

interface CurrencyState {
    base: string;
    source: string;
    quote: string;
    prices: null | number[];
}

const initialState: CurrencyState = {
    base: CurrencyEnum.getBaseCurrency(CurrencyEnum.USD_N),
    source: CurrencyEnum.getSourceCurrency(CurrencyEnum.USD_N),
    quote: CurrencyEnum.USD_N,
    prices: null,
};

export default (state: CurrencyState = initialState, action: { type: string; } & CurrencyState): CurrencyState => {
    switch (action.type) {
        case CURRENCY_SET_CURRENT:
            return {
                ...state,
                base: action.base,
                quote: action.quote,
                source: action.source,
            };

        case CURRENCY_SET_PRICES:
            return {
                ...state,
                prices: action.prices,
            };
    }

    return state;
};

type GlobalState = {
    currency: CurrencyState;
} & any;

export const getBaseCurrency = (state: GlobalState) => _get(state, 'currency.base');
export const getQuoteCurrency = (state: GlobalState) => _get(state, 'currency.quote');
export const getSourceCurrency = (state: GlobalState) => _get(state, 'currency.source');
export const getPairName = (state: GlobalState) => getBaseCurrency(state) + '_' + getQuoteCurrency(state);
export const getPrices = (state: GlobalState) => state.currency.prices;
export const getWavesExchanges = (state: GlobalState, currency: string) => state.currency.prices[currency] || [];
export const getLastWavesExchange = (state: GlobalState, currency: string) => {
    let prices = getWavesExchanges(state, currency);

    if (prices.length > 0) {
        prices = _orderBy(prices, 'height', 'desc');
        return prices[0].price;
    } else {
        return 0;
    }
};
