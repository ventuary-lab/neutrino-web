import { IUser } from 'contractControllers/types';
import { IOrder } from 'routes/BondsDashboard/types';

export enum OrderUrgency {
    BY_REQUEST = 0,
    INSTANT,
}
export enum FormDefaults {
    WAVES_AMOUNT = 1000,
    NSBT_AMOUNT = 1000,
    USDN_AMOUNT = 1000,
}
export interface Props {
    user: IUser;
    bondOrders: Record<string, string>[] | IOrder[];
    liquidateOrders: Record<string, string>[] | IOrder[];
    controlPrice: number;
    baseCurrency: string;
    quoteCurrency: string;
    pairName: string;
    backingRatio: number;
    currentDeficitPercent: number;
    roi: number; // like wavelets
}
export type InputForm = { send: number; receive: number; price: number; br: number; } & Record<string, number>;
export type State = {
    // backingRatio: number;
    orderUrgency: OrderUrgency;
    buy: InputForm;
    liquidate: InputForm;
};
