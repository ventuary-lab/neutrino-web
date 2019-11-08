import _ from 'lodash';

import { 
    SET_CONTROL_CONTRACT_PRICE
} from '../../actions/contract';
import { InitialPricesState, UpdatePriceAction } from './types'; 

const initialState: InitialPricesState = {
    contractPrices: {}
}

export default (state = initialState, action: UpdatePriceAction) => {
    switch (action.type) {
        case SET_CONTROL_CONTRACT_PRICE:
            return {
                ...state,
                contractPrices: {
                    ...state.contractPrices,
                    [action.name]: action.value
                }
            }
    }

    return state;
}