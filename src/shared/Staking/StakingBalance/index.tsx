import React from 'react';
import { html } from 'components';
import Button from 'yii-steroids/ui/form/Button';
import AccountBalanceTitle from './../AccountBalanceTitle';
import MutateStakingShareModal from 'modals/MutateStakingShareModal';

import './style.scss';

const bem = html.bem('StakingBalance');

interface Props {}
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

    componentDidMount() {
        // const { blur, unblur } = this.context;
        // blur();
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
        const actionLabel = !isStakingShareDecreaseSelected ? 'Increase' : 'Decrease';
        const { title, accountBalance, stakingBalance, buttonLabel } = {
            buttonLabel: actionLabel,
            title: `${actionLabel} neutrino (USD-N) staking share`,
            accountBalance: 100,
            stakingBalance: 80,
        };

        return (
            <div>
                <MutateStakingShareModal
                    title={title}
                    buttonLabel={buttonLabel}
                    accountBalance={accountBalance}
                    stakingBalance={stakingBalance}
                    isOpened={isStakingShareModalOpened}
                    onClose={() => this.triggerStakingShareModal(false)}
                    isDecrease={isStakingShareDecreaseSelected}
                />
                <AccountBalanceTitle title="Staking balance" amount={80} />
                <div className={bem.element('main')}>
                    <div className={bem.element('action-buttons')}>
                        <Button
                            type={'submit'}
                            block
                            label={'Cancel'}
                            onClick={this.onStakingCancel}
                        />
                        <Button
                            type={'submit'}
                            block
                            label={'Increase'}
                            onClick={this.onStakingIncrease}
                        />
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
