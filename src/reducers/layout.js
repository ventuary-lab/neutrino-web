import { CHANGE_CURRENCY } from 'actions/layout';
import CurrencyEnum from 'enums/CurrencyEnum';
import _get from 'lodash-es/get';

const initialState = {
    currency: CurrencyEnum.USD_N,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.currency,
            };
    }

    return state;
};

export const getActiveCurrency = (state) => _get(state,'layout.currency');

