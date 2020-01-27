import { round as _round } from 'lodash';
import { computeROI } from 'reducers/contract/helpers';
import { IOrder } from './types';

export const computeROIForOrder = ({ total, price }: IOrder, controlPrice: number) => {
    return _round(
        computeROI(_round(total / (price / 100), 2), total, controlPrice), 2
    );
}