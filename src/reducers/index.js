import {combineReducers} from 'redux';
import * as reducers from 'yii-steroids/reducers';
import api from './api';
import currency from './currency';
import contractReducers from './contract';
import contractPriceReducers from './contract/prices';

export default asyncReducers => combineReducers({
    api,
    currency,
    ...reducers,
    ...asyncReducers,
    contractData: contractReducers,
    contractPrices: contractPriceReducers
});
