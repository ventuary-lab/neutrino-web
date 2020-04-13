import React from 'react';
import { html, store } from 'components';
import Button from 'yii-steroids/ui/form/Button';
import { goToPage } from 'yii-steroids/actions/navigation';
import AccountBalanceTitle from './../AccountBalanceTitle';
import CurrencyEnum from 'enums/CurrencyEnum';

import './style.scss';

const bem = html.bem('StakingAccountBalance');

interface Props {
    accountBalance: number;
}

class AccountBalance extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const onClick = () =>
            store.dispatch(goToPage('neutrino', { currency: CurrencyEnum.USD_N }));
        const { accountBalance } = this.props;

        return (
            <div className={bem.block()}>
                <AccountBalanceTitle title="账户余额" amount={accountBalance} />
                <div className={bem.element('buy-btn')}>
                    <Button type={'submit'} block label={'买入'} onClick={onClick} />
                </div>
            </div>
        );
    }
}

export default AccountBalance;
