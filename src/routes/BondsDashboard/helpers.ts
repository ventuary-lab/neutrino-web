import { round as _round } from 'lodash';
import { computeROI, NEUTRINO_DEC } from 'reducers/contract/helpers';
import { IOrder } from './types';

export const computeROIForOrder = ({ total, price }: IOrder, controlPrice: number) => {
    return _round(
        computeROI(_round(total / (price / NEUTRINO_DEC), 2), total, controlPrice), 2
    );
}