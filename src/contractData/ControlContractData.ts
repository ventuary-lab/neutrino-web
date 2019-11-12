import { key } from "../decorators/ContractDataDecorator";

export class ControlContractData {
    @key("price")
    price: number = 0;

    @key("is_blocked")
    isBlocked: boolean = false;
}
