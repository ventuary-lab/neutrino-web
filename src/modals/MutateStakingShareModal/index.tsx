import React from 'react';
import Modal from 'react-modal';
import { html } from 'components';
import AccountBalanceTitle from 'shared/Staking/AccountBalanceTitle';
import { BlurContext } from 'shared/Layout/context';

import './style.scss';

const bem = html.bem('MutateStakingShareModal');

interface Props {
    accountBalance: number;
    stakingBalance: number;
    title: string;
    isOpened: boolean;
    onClose: () => void;
}
interface State {}

class MutateStakingShareModal extends React.Component<Props, State> {
    percentage: number[];

    static contextType = BlurContext;

    constructor(props) {
        super(props);

        this.getParentSelector = this.getParentSelector.bind(this);

        this.percentage = [25, 50, 75, 100];

        this.state = {};
    }

    componentWillMount() {}

    componentDidUpdate() {
        if (this.props.isOpened) {
            this.context.blur();
        } else {
            this.context.unblur();
        }
    }

    componentWillUnmount() {
        this.context.unblur();
    }

    getParentSelector() {
        return document.body;
    }

    render() {
        const { title, accountBalance, stakingBalance } = this.props;

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
                            <AccountBalanceTitle title="Account balance:" amount={accountBalance} />
                            <AccountBalanceTitle title="Staking balance:" amount={stakingBalance} />
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default MutateStakingShareModal;
