import CurrencyEnum from 'enums/CurrencyEnum';
import PairsEnum from 'enums/PairsEnum'
import ContractEnum from 'enums/ContractEnum';

export const getCurrentAccountAddress = dal => dal.balance._address;
export const getNeutrinoDappAddress = dal => dal.contracts[PairsEnum.USDNB_USDN][ContractEnum.NEUTRINO];
export const getDappAddress = (dal, pairName, contractName) => dal.contracts[pairName][contractName];
export const getNeutrinoAssetId = dal => dal.assets[CurrencyEnum.USD_N];