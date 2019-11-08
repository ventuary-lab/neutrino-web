import _ from 'lodash';

import { 
    SET_CONTRACT_PRICE,
    SET_TOTAL_ISSUED
} from '../../actions/contract';
import { InitialPricesState, UpdatePriceAction } from './types'; 

const initialState: InitialPricesState = {
    contractPrices: {}
}

export default (state = initialState, action: UpdatePriceAction) => {
    switch (action.type) {
        case SET_CONTRACT_PRICE:
            return {
                ...state,
                contractPrices: {
                    ...state.contractPrices,
                    [action.name]: action.value
                }
            }
        case SET_TOTAL_ISSUED:
            return {
                ...state,
                contractPrices: {
                    ...state.contractPrices,
                    totalIssued: action.value
                }
            }
    }

    return state;
}