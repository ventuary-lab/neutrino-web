import { IUser } from 'contractControllers/types';
import { FormTabEnum } from './enums';

export interface IOrder {
    id: string;
    height: number;
    timestamp: number;
    owner: string;
    price: number;
    total: number;
    filledTotal: number;
    index: number;
    amount: number;
    filledAmount: number;
    restTotal: number;
    restAmount: number;
    pairName: string;
    status: string;
    is_first?: boolean;
    order_next?: string;
    order_prev?: string;
    debugRoi?: number;
};

export interface IUserOrders {
    opened: IOrder[];
    history: IOrder[];
};

export interface Props {
    pairName: string;
    baseCurrency: string;
    quoteCurrency: string;
    user: IUser;
    controlPrice: number;
}

export interface State {
    currentRoi: number;
    bondOrders?: IOrder[],
    liquidateOrders?: IOrder[],
    userOrders?: IUserOrders;
    backingRatio: number;
    formTab: FormTabEnum;
    currentDeficitPercent: number;
    neutrinoSupply: number;
    neutrinoReserves: number;
}