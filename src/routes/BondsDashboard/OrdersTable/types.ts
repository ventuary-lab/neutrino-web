import { IOrder } from '../types';
import { SortTableEnum } from './enums';

export interface Props {
    items: IOrder[];
    pairName: string;
    controlPrice: number;
    isHistory: boolean;
}

export interface State {
    sort: [SortTableEnum.TIME, SortTableEnum.DESC] | [SortTableEnum.DESC, SortTableEnum.TIME];
    search: string;
}

type IFieldTableRecord = { 
    label: string;
    get?: (...args: any[]) => string;
};

type IFieldTable = Record<string, IFieldTableRecord>;

export interface IOrdersTable {
    fieldTable: IFieldTable;
}
