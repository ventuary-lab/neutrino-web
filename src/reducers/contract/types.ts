import { WavesAddressData } from './../../contractControllers/types';


export interface ContractData {
    [key: string]: WavesAddressData[]
};

export interface InitialState {
    contractData: ContractData;
}

export interface UpdateContractAction {
    type: string; // UPDATE_CONTRACT_ADDRESS_INFO | DROP_CONTRACT_ADDRESS_INFO | CREATE_CONTRACT_ADDRESS_INFO
    address: string;
    data?: WavesAddressData[];
}