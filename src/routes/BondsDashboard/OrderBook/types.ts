import { IUser } from 'contractControllers/types';
import { FormTabEnum } from '../enums';
import { IOrder } from '../types';

export interface Props {
    baseCurrency: string;
    quoteCurrency: string;
    user: IUser;
    orders: IOrder[];
    formTab: FormTabEnum.AUCTION | FormTabEnum.LIQUIDATE;
    controlPrice: number;
}

export interface State {}