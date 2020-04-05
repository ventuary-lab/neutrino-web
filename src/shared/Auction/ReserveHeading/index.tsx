import React from 'react';

import { html } from 'components';

import './style.scss';
import 'style/index.scss';
import 'shared/Layout/Layout.scss';

const bem = html.bem('ReserveHeading')

type Props = {}

const values = [
    {
        label: 'Reserves'
        value: 60
    },
    {
        label: 'Supply'
        value: 120
    },
    {
        label: 'Backing ratio (BR)'
        value: 50
    },
    {
        label: 'What does it mean'
    }
]
const mapValue = ({ value, label }) => <div>{value ? `${label}: ${value}` : label}</div>

const ReserveHeading: React.FC<Props> = () => {

    return <div className={bem.block()}>
        <div className={bem.element('flex')}>
            {values.map(mapValue)}
        </div>
    </div>
};

export default ReserveHeading;
