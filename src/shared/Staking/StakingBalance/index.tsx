import React from 'react';
import { html } from 'components';
import Button from 'yii-steroids/ui/form/Button';
import AccountBalanceTitle from './../AccountBalanceTitle';
import MutateStakingShareModal from 'modals/MutateStakingShareModal';

import './style.scss';

const bem = html.bem('StakingBalance');

interface Props {
    accountBalance: number;
    stakingBalance: number;
    pairName: string;
}
interface State {
    isStakingShareModalOpened: boolean;
    isStakingShareDecreaseSelected: boolean;
}

class StakingBalance extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.triggerStakingShareModal = this.triggerStakingShareModal.bind(this);
        this.onStakingCancel = this.onStakingCancel.bind(this);
        this.onStakingIncrease = this.onStakingIncrease.bind(this);

        this.state = {
            isStakingShareModalOpened: false,
            isStakingShareDecreaseSelected: false,
        };
    }

    triggerStakingShareModal(isVisible: boolean) {
        this.setState({ isStakingShareModalOpened: isVisible });
    }

    onStakingCancel() {
        this.setState({ isStakingShareModalOpened: true, isStakingShareDecreaseSelected: true });
    }
    onStakingIncrease() {
        this.setState({ isStakingShareModalOpened: true, isStakingShareDecreaseSelected: false });
    }

    render() {
        const { isStakingShareModalOpened, isStakingShareDecreaseSelected } = this.state;
        const { stakingBalance, accountBalance, pairName } = this.props;
        const actionLabel = !isStakingShareDecreaseSelected ? '增加' : '减少';
        const { title, buttonLabel } = {
            buttonLabel: actionLabel,
            // title: `${actionLabel} neutrino (USDN) staking share`,
            title: !isStakingShareDecreaseSelected
                ? '增加中微子（USDN）权益份额'
                : '减少中微子（USDN）权益份额',
        };

        return (
            <div>
                <MutateStakingShareModal
                    pairName={pairName}
                    title={title}
                    buttonLabel={buttonLabel}
                    accountBalance={accountBalance}
                    stakingBalance={stakingBalance}
                    isOpened={isStakingShareModalOpened}
                    onClose={() => this.triggerStakingShareModal(false)}
                    isDecrease={isStakingShareDecreaseSelected}
                />
                <AccountBalanceTitle title="抵押余额" amount={stakingBalance} />
                <div className={bem.element('main')}>
                    <div className={bem.element('action-buttons')}>
                        <Button
                            type={'submit'}
                            block
                            label={'全部取消'}
                            onClick={this.onStakingCancel}
                        />
                        <Button
                            type={'submit'}
                            block
                            label={'增加'}
                            onClick={this.onStakingIncrease}
                        />
                    </div>
                </div>
                <p className={bem.element('info')}>
                    Neutrino
                    dApp将按比例分配抽奖奖励给用户每周基于他们在每日的平均USD-N权益份额中所占的比例USD-N的累积金额。这些奖励来自浪潮lPoS
                    分散的货币政策。
                </p>
            </div>
        );
    }
}

export default StakingBalance;
