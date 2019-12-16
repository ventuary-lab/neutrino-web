import React from 'react';
import { html } from 'components';
import Button from 'yii-steroids/ui/form/Button';
import AccountBalanceTitle from './../AccountBalanceTitle';
import MutateStakingShareModal from 'modals/MutateStakingShareModal';
import { Translation } from 'react-i18next';

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
        const { stakingBalance, accountBalance, pairName } = this.props;
        const actionLabel = !isStakingShareDecreaseSelected ? 'Increase' : 'Decrease';
        const { title, buttonLabel } = {
            buttonLabel: actionLabel,
            title: `${actionLabel} neutrino (USD-N) staking share`,
        };

        return (
            <Translation>
                {t => (
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
                        <AccountBalanceTitle title={t('staking_dashboard.staking_balance.label')} amount={stakingBalance} />
                        <div className={bem.element('main')}>
                            <div className={bem.element('action-buttons')}>
                                <Button
                                    type={'submit'}
                                    block
                                    label={t('staking_dashboard.staking_decrease_button.label')}
                                    onClick={this.onStakingCancel}
                                />
                                <Button
                                    type={'submit'}
                                    block
                                    label={t('staking_dashboard.staking_increase_button.label')}
                                    onClick={this.onStakingIncrease}
                                />
                            </div>
                        </div>
                        <p className={bem.element('info')}>
                            {t('staking_dashboard.staking_description.label')}
                        </p>
                    </div>
                )}
            </Translation>
        );
    }
}

export default StakingBalance;
