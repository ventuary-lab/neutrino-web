import "reflect-metadata";
import { ResponseContractData } from "../contractData/ResponseContractData";
import { NeutrinoContractData } from "../contractData/NeutrinoContractData";
import { ControlContractData } from "../contractData/ControlContractData";
import { getKey } from "../decorators/ContractDataDecorator";

export class ContractDataConvert{
    public static toNeutrinoContractData(contractData: Array<ResponseContractData>) : NeutrinoContractData {
        return ContractDataConvert.to(new NeutrinoContractData(), contractData);
    }
    public static toControlContractData(contractData: Array<ResponseContractData>) : ControlContractData {
        return ContractDataConvert.to(new ControlContractData(), contractData);
    }

    private static to<T extends any>(convertedContractData: any, contractData: Array<ResponseContractData>) : T {
        const properties = Reflect.ownKeys(convertedContractData);

        properties.forEach(propertyName => {
            const key = getKey(convertedContractData, propertyName as string);
            const responseContractData = contractData.find(x=> x.key == key);
            if(responseContractData !== undefined)
                convertedContractData[propertyName] = responseContractData.value;

        });
        return convertedContractData;
    }
}