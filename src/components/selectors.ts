import CurrencyEnum from 'enums/CurrencyEnum';
import ContractEnum from 'enums/ContractEnum';

export const getCurrentAccountAddress = dal => dal.balance._address;
export const getNeutrinoDappAddress = dal => dal.contracts['usd-nb_usd-n'][ContractEnum.NEUTRINO];
export const getNeutrinoAssetId = dal => dal.assets[CurrencyEnum.USD_N];