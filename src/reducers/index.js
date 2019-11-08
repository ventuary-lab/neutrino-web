import {combineReducers} from 'redux';
import * as reducers from 'yii-steroids/reducers';
import api from './api';
import currency from './currency';
import contractReducers from './contract';

export default asyncReducers => combineReducers({
    api,
    currency,
    ...reducers,
    ...asyncReducers,
    contract: contractReducers
});
