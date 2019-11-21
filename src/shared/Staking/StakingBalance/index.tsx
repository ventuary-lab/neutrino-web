import React from 'react';
import { html } from 'components';
import Button from 'yii-steroids/ui/form/Button';
import AccountBalanceTitle from './../AccountBalanceTitle';

import './style.scss';

const bem = html.bem('StakingBalance');

interface Props {}
interface State {}

class StakingBalance extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AccountBalanceTitle title="Staking balance" amount={80} />
                <div className={bem.element('main')}>
                    <div className={bem.element('action-buttons')}>
                        <Button type={'submit'} block label={'Cancel'} />
                        <Button type={'submit'} block label={'Increase'} />
                    </div>
                </div>
                <p className={bem.element('info')}>
                    Neutrino dApp will distribute staking rewards proportionately to users each week
                    based on their daily average USD-N staking share from total amount of stacked
                    USD-N. These rewards are coming from waves lPoS decentralized monetary policy.
                </p>
            </div>
        );
    }
}

export default StakingBalance;
