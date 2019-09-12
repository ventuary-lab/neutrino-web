import { CHANGE_CURRENCY } from 'actions/layout';
import CurrencyEnum from 'enums/CurrencyEnum';
import _get from 'lodash-es/get';

const initialState = {
    baseCurrency: CurrencyEnum.getBaseCurrency(CurrencyEnum.USD_N),
    quoteCurrency: CurrencyEnum.USD_N,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.baseCurrency,
                quoteCurrency: action.quoteCurrency,
            };
    }

    return state;
};

export const getBaseCurrency = state => _get(state,'layout.baseCurrency');
export const getQuoteCurrency = state => _get(state,'layout.quoteCurrency');
export const getPairName = state => getBaseCurrency(state) + '_' + getQuoteCurrency(state);
