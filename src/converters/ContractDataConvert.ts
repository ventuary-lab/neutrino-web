import { ResponseContractData } from "../contractData/ResponseContractData";
import { object } from "prop-types";
import { NeutrinoContractData } from "../contractData/NeutrinoContractData";
import { СontrolContractData } from "../contractData/ControlContractData";

class ContractDataConvert{
    public static to<T extends СontrolContractData & NeutrinoContractData>(contractData: ResponseContractData) : T {
        let convertedContractData = {} as T;
        let keys = Reflect.ownKeys(convertedContractData);
        
        return convertedContractData;
    }
}