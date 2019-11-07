import { dictionaryKey } from "../decorators/ContractDataDecorator";

export class NeutrinoContractData {
    @dictionaryKey("control_contract")
    controlContractAddress: String;
}