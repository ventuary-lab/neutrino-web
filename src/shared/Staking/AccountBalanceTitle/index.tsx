import React from 'react';
import { html } from 'components';
import usdnLogo from 'static/icons/usd-n.svg';

import './style.scss';

const bem = html.bem('AccountBalanceTitle');

export enum AccountBalanceTitleOption {
    VERTICAL = 'vertical',
}

type Props = {
    title: string;
    amount: number;
    type?: AccountBalanceTitleOption;
};

const AccountBalanceTitle: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
    title,
    amount,
    type,
    ...restProps
}) => (
    <div className={bem.element('main', type)} {...restProps}>
        <span>{title}</span>
        <div className={bem.element('balance')}>
            <span>
                <img src={usdnLogo} />
            </span>
            <span>{amount}</span>
            <span>USDN</span>
        </div>
    </div>
);

export default AccountBalanceTitle;
