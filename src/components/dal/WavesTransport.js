import ContractEnum from '../../enums/ContractEnum';

const {broadcast, nodeInteraction, invokeScript, waitForTx, seedUtils} = require('@waves/waves-transactions');
const _isArray = require('lodash/isArray');
const _isString = require('lodash/isString');
const _isInteger = require('lodash/isInteger');
const _isObject = require('lodash/isObject');
// const _trim = require('lodash/trim');
// const _escapeRegExp = require('lodash/escapeRegExp');
// const axios = require('axios');
import _toInteger from 'lodash-es/toInteger';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

const process400 = resp => resp.status === 400
    ? Promise.reject(Object.assign(new Error(), resp.data))
    : resp;
const validateStatus = status => status === 400 || status >= 200 && status < 300;

export default class WavesTransport {

    constructor(dal, contract) {
        this.dal = dal;
        this.contract = contract;

        this.nodeUrl = 'https://testnode1.wavesnodes.com';
        this.wvs = 100000000;
        this.fee = 0.009;

        this._cacheData = null;
        this._cacheTimeout = null;
        this._cacheCallbacks = null;

        this._height = null;
        this._heightTimeout = null;
        this._heightCallbacks = null;
    }

    get address() {
        return ContractEnum.getAddress(this.contract);
    }



}
