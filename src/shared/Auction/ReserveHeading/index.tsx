import React from 'react';
import QuestionMarkData from '../QuestionMarkData';
import { html } from 'components';

import './style.scss';
import 'style/index.scss';
import 'shared/Layout/Layout.scss';

const bem = html.bem('ReserveHeading');

type HeadingValue = {
    label: string;
    value?: string | number | boolean;
    additional?: React.ReactNode;
}

type Props = {
    values: HeadingValue[]
};

const values: HeadingValue[] = [];
const mapValue = ({ value, label, additional  }) => (
    <div>
        <span>{value ? `${label}: ${value}` : label}</span>
        {additional ? additional : null}
    </div>
);

const ReserveHeading: React.FC<Props> = ({ values }) => {
    return (
        <div className={bem.block()}>
            <div className={bem.element('flex')}>{values.map(mapValue)}</div>
        </div>
    );
};

export default ReserveHeading;
