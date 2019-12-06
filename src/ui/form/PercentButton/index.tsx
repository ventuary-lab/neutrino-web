import React from 'react';
import { html } from 'components';

import './style.scss';

const bem = html.bem('PercentButton');

type Props = {
    label: string;
};

const PercentButton: React.FC<Props & React.HTMLProps<HTMLDivElement>> = ({ label, ...restProps }) => {
    return (
        <div className={bem.element('main')} {...restProps}>
            <span>{label}</span>
        </div>
    );
};

export default PercentButton;
