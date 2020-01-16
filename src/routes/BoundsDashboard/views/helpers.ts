import { round as _round } from 'lodash';
import { computeROI } from 'reducers/contract/helpers';

interface IOrder {
    height: string;
    timestamp: number;
    owner: string;
    price: number;
    total: number;
    filledTotal: number;
    restTotal: number;
    status: string;
    index: number;
    amount: number;
    filledAmount: number;
    restAmount: number;
    pairName: string;
    type: string;
    id: string;
}

export const computeROIForOrder = ({ total, price }: IOrder, controlPrice: number) => {
    return _round(
        computeROI(_round(total / (price / 100), 2), total, controlPrice), 2
    );
}