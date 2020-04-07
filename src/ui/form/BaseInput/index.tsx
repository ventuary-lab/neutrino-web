import React from 'react';
import { html } from 'components';

import './style.scss';

const bem = html.bem('BaseInput');

interface Props {
    fieldName?: string;
    icon?: string;
    iconLabel?: string;
    required?: boolean;
}

const BaseInput: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({
    icon,
    fieldName,
    iconLabel,
    required = false,
    ...restProps
}) => {
    return (
        <div className={bem.element('main')}>
            {fieldName && (
                <span className={bem.element('field-name')}>
                    <span>{fieldName}</span>
                    <span>{required ? ' *' : ''}</span>
                </span>
            )}
            <input className={bem.element('input')} {...restProps} />
            <div className={bem.element('icon') + ' ' + (!icon ? 'hidden' : '')}>
                <img src={icon} />
                <span>{iconLabel}</span>
            </div>
        </div>
    );
};

export default BaseInput;
