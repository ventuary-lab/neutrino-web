import React from 'react';
import { connect } from 'react-redux';
import { html } from 'components';
import AccountBalance from './../AccountBalance';
import StakingBalance from './../StakingBalance';
import AnnualYieldInfo from './../AnnualYieldInfo';
import CurrencyEnum from 'enums/CurrencyEnum';
import { IUser } from 'contractControllers/types';

const bem = html.bem('StakingLeftPanel');

import './style.scss';

interface Props {
    pairName: string;
    stakingBalance: number;
    user: IUser | null;
}

const ListItem = ({ children }) => {
    return <div className={bem.element('list-item')}>{children}</div>;
};

class StakingLeftPanel extends React.Component<Props> {
    constructor(props) {
        super(props);

        this.getAccountBalance = this.getAccountBalance.bind(this);
    }

    getAccountBalance (): number {
        const { user } = this.props;

        if (!user || !user.balances) {
            return 0;
        }

        return user.balances[CurrencyEnum.USD_N] || 0;
    }

    render() {
        const { stakingBalance, pairName } = this.props;
        const accountBalance = this.getAccountBalance();

        return (
            <div className={bem.block()}>
                <ListItem>
                    <AnnualYieldInfo />
                </ListItem>
                <ListItem>
                    <AccountBalance accountBalance={accountBalance}/>
                </ListItem>
                <ListItem>
                    <StakingBalance
                        pairName={pairName}
                        accountBalance={accountBalance}
                        stakingBalance={stakingBalance}
                    />
                </ListItem>
            </div>
        );
    }
}

export default connect(state => ({
    user: state.auth.user,
}))(StakingLeftPanel);