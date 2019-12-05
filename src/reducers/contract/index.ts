import _ from 'lodash';

import { 
    UPDATE_CONTRACT_ADDRESS_INFO,
    DROP_CONTRACT_ADDRESS_INFO,
    CREATE_CONTRACT_ADDRESS_INFO
} from '../../actions/contract';
import { InitialState, UpdateContractAction } from './types'; 

const initialState: InitialState = {
    contractData: {},
};

export default (state = initialState, action: UpdateContractAction) => {
    switch (action.type) {
        case CREATE_CONTRACT_ADDRESS_INFO:
            return {
                ...state,
                contractData: {
                    ...state.contractData,
                    [action.address]: action.data || []
                }
            }
        case UPDATE_CONTRACT_ADDRESS_INFO:
            const oldData = _.get(
                state.contractData,
                `${action.address}`,
                []
            );

            return {
                ...state,
                contractData: {
                    ...state.contractData,
                    [action.address]: action.data ? [
                        ...oldData,
                        ...action.data
                    ] : []
                }
            };
        case DROP_CONTRACT_ADDRESS_INFO:
            return {
                ...state,
                contractData: {
                    ...state.contractData,
                    [action.address]: []
                }
            }
    }
    

    return state;
}