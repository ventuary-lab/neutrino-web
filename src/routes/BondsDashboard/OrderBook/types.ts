import { IUser } from 'contractControllers/types';
import { IOrder } from '../types';
import { FormTabEnum } from '../enums';

export interface Props {
    baseCurrency: string;
    quoteCurrency: string;
    user: IUser;
    orders: IOrder[];
    formTab: FormTabEnum;
    controlPrice: number;
}

export interface State {}