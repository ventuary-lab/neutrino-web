import React from 'react';
import { html } from 'components';
import Button from 'yii-steroids/ui/form/Button';
import AccountBalanceTitle from './../AccountBalanceTitle';

import './style.scss';

const bem = html.bem('StakingAccountBalance');

interface Props {}
// interface State {}

class AccountBalance extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={bem.block()}>
                <AccountBalanceTitle title="Account balance" amount={100}/>
                <div className={bem.element('buy-btn')}>
                    <Button type={'submit'} className="base-green-button" block label={'Buy'} />
                </div>
            </div>
        );
    }
}

export default AccountBalance;