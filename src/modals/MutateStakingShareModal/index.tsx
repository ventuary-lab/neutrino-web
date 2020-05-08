import React from 'react';
import Modal from 'react-modal';
import { html, dal, store } from 'components';
import Button from 'yii-steroids/ui/form/Button';
import BaseInput from 'ui/form/BaseInput';
import AccountBalanceTitle, { AccountBalanceTitleOption } from 'shared/Staking/AccountBalanceTitle';
import PercentButton from 'ui/form/PercentButton';
import CurrencyEnum from 'enums/CurrencyEnum';
import { BlurContext } from 'shared/Layout/context';
import usdnLogo from 'static/icons/usd-n.svg';
import { onlyDecimalRegex2 } from 'ui/global/helpers';
import { hasBooleanPropChanged } from 'shared/Layout/helpers';
import MessageModal from 'modals/MessageModal';
import { openModal } from 'yii-steroids/actions/modal';

import './style.scss';

const bem = html.bem('MutateStakingShareModal');

interface Props {
    accountBalance: number;
    stakingBalance: number;
    title: string;
    isOpened: boolean;
    buttonLabel: string;
    onClose: () => void;
    isDecrease: boolean;
    pairName: string;
}
interface State {
    usdnValue: string;
}

class MutateStakingShareModal extends React.Component<Props, State> {
    percentage: number[];

    static contextType = BlurContext;

    constructor(props) {
        super(props);

        this.getPercentButtons = this.getPercentButtons.bind(this);
        this.getParentSelector = this.getParentSelector.bind(this);
        this.setPercentOfBalance = this.setPercentOfBalance.bind(this);
        this.onChangeUsdn = this.onChangeUsdn.bind(this);
        this.mapPercentage = this.mapPercentage.bind(this);
        this.onMutateStaking = this.onMutateStaking.bind(this);
        this.decreaseStaking = this.decreaseStaking.bind(this);
        this.increaseStaking = this.increaseStaking.bind(this);
        this.emptyField = this.emptyField.bind(this);

        this.percentage = [25, 50, 75, 100];

        this.state = {
            usdnValue: '',
        };
    }

    componentDidUpdate(prevProps) {
        const { isOpened } = this.props;
        const { isOpened: wasOpened } = prevProps;

        hasBooleanPropChanged(prevProps, this.props, 'isOpened', {
            becameTrue: () => this.context.blur(),
            becameFalse: () => this.context.unblur(),
        });
    }

    onErrorOccur(err: Error) {
        store.dispatch(
            openModal(MessageModal, {
                text: `Error occured. ${err.message}`
            })
        );
    }

    getParentSelector() {
        return document.body;
    }

    onMutateStaking() {
        if (this.props.isDecrease) {
            this.decreaseStaking();
        } else {
            this.increaseStaking();
        }
    }

    emptyField() {
        if (this.state.usdnValue !== '') {
            this.setState({ usdnValue: '' });
        }
    }

    async increaseStaking() {
        const { pairName } = this.props;
        const { usdnValue } = this.state;

        try {
            await dal.lockNeutrino(pairName, CurrencyEnum.USD_N, usdnValue);
        } catch (err) {
            this.onErrorOccur(err);
        }

        this.props.onClose();
    }

    async decreaseStaking() {
        const { usdnValue } = this.state;

        try {
            await dal.unlockNeutrino(
                this.props.pairName,
                CurrencyEnum.USD_N,
                Math.ceil(Number(usdnValue) * CurrencyEnum.getContractPow(CurrencyEnum.USD_N))
            );
        } catch (err) {
            this.onErrorOccur(err);
        }

        this.props.onClose();
    }

    onChangeUsdn(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.target as HTMLInputElement;

        if (!onlyDecimalRegex2.test(value)) {
            return;
        }

        this.setState({ usdnValue: value });
    }

    setPercentOfBalance(percent: number) {
        const { isDecrease, accountBalance, stakingBalance } = this.props;
        const balance = !isDecrease ? accountBalance : stakingBalance;
        const value = `${(percent / 100) * balance}`;

        this.setState({ usdnValue: value });
    }

    mapPercentage(label: number) {
        return (
            <PercentButton label={`${label}%`} onClick={() => this.setPercentOfBalance(label)} />
        );
    }

    getPercentButtons() {
        return this.percentage.map(this.mapPercentage);
    }

    render() {
        const { title, accountBalance, stakingBalance, buttonLabel } = this.props;
        const { usdnValue } = this.state;

        return (
            <Modal
                className={bem.block()}
                isOpen={this.props.isOpened}
                onRequestClose={this.props.onClose}
                parentSelector={this.getParentSelector}
            >
                <div>
                    <div className={bem.element('body')}>
                        <span className={bem.element('title')}>{title}</span>
                        <div className={bem.element('balances')}>
                            <AccountBalanceTitle
                                title="Account balance:"
                                amount={accountBalance}
                                type={AccountBalanceTitleOption.VERTICAL}
                            />
                            <AccountBalanceTitle
                                title="Staking balance:"
                                amount={stakingBalance}
                                type={AccountBalanceTitleOption.VERTICAL}
                            />
                        </div>
                        <div className={bem.element('actions')}>
                            <div className={bem.element('percents')}>
                                {this.getPercentButtons()}
                            </div>
                            <div
                                className={bem.element(
                                    'buttons',
                                    this.props.isDecrease && 'decrease'
                                )}
                            >
                                <BaseInput
                                    iconLabel="USDN"
                                    icon={usdnLogo}
                                    value={usdnValue}
                                    onChange={this.onChangeUsdn}
                                />
                                <Button label={buttonLabel} onClick={this.onMutateStaking} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default MutateStakingShareModal;
