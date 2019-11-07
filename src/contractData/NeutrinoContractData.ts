import { key } from "../decorators/ContractDataDecorator";

export class NeutrinoContractData {
    @key("control_contract")
    controlContractAddress: string = "";
}