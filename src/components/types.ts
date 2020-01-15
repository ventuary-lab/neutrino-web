import Keeper from './dal/Keeper';
import BalanceController from './../contractControllers/BalanceController';
import UserController from './../contractControllers/UserController';
import { IUserData } from '@waves/signer/cjs/interface';

export type IDalNetwork = 'mainnet' | 'testnet' | 'stagenet' | 'customnet';
export type IDalContractsDict = {};

export interface IDalComponent {
    network: IDalNetwork | null;
    nodeUrl: string;
    assets: Record<string, string>;
    contracts: IDalContractsDict;
    hoc: () => void;
    balance: BalanceController;
    userController: UserController;
    keeper: Keeper;
    signerNetworkByte: 87;
    webKeeperUserData: IUserData | null;
}
