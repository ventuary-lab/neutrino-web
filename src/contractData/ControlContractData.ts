import { dictionaryKey } from "../decorators/ContractDataDecorator";

export class СontrolContractData {
    @dictionaryKey("price")
    price: Number;

    @dictionaryKey("is_blocked")
    isBlocked: Number;
}