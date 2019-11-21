import React from 'react';
import { html } from 'components';

import './style.scss';

const bem = html.bem('BaseInput');

interface Props {
    icon?: string;
    iconLabel?: string;
}

const BaseInput: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({ icon, iconLabel, ...restProps }) => {
    return (
        <div className={bem.element('main')}>
            <input {...restProps} />
            {icon && (
                <div className={bem.element('icon')}>
                    <img src={icon} />
                    <span>{iconLabel}</span>
                </div>
            )}
        </div>
    );
};

export default BaseInput;
