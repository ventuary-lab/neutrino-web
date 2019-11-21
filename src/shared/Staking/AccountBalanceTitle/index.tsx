import React from 'react';
import { html } from 'components';
import usdnLogo from 'static/icons/usd-n.svg';

import './style.scss';

const bem = html.bem('AccountBalanceTitle');

type Props = {
    title: string;
    amount: number;
};

const AccountBalanceTitle: React.FC<Props> = ({ title, amount }) => (
    <div className={bem.element('main')}>
        <span>{title}</span>
        <div className={bem.element('balance')}>
            <span>
                <img src={usdnLogo} />
            </span>
            <span>{amount}</span>
            <span>USD-N</span>
        </div>
    </div>
);

export default AccountBalanceTitle;
