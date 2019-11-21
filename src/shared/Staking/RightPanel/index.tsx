import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { html, dal, store } from 'components';
import PayoutCheck from '../PayoutCheck';
import { WavesTransactionInfo, WavesTransfer, User } from 'contractControllers/types';

import './style.scss';

const bem = html.bem('StakingRightPanel');

const grabTransactionTransferByRecipient = (
    transaction: WavesTransactionInfo,
    recipientAddress: string
) => {
    return transaction.transfers.find((tf: WavesTransfer) => tf.recipient === recipientAddress);
};
interface MappedWavesTransactionInfo extends Omit<WavesTransactionInfo, 'transfers'> {
    transferAmount?: number;
}

interface Props {
    user: User | null;
}
interface State {
    mappedTransactions: MappedWavesTransactionInfo[];
}

class StakingRightPanel extends React.Component<Props> {
    state: State;

    constructor(props) {
        super(props);

        this.getMassTransactionsList = this.getMassTransactionsList.bind(this);
        this.mapPayoutCheck = this.mapPayoutCheck.bind(this);

        this.state = {
            mappedTransactions: [],
        };
    }

    componentDidUpdate(newProps: Props) {
        const { user } = this.props;

        if (newProps.user && newProps.user.address !== user.address) {
            this.updateMassPaymentsList(user);
        }
    }

    async updateMassPaymentsList (user: User) {
        const massPaymentTxs = await this.getMassTransactionsList(
            user.address,
            dal.assets['usd-n']
        );

        this.setState({ mappedTransactions: massPaymentTxs, isLoaded: true });
    }

    async getMassTransactionsList(address: string, assetId: string) {
        const response = await axios.get<WavesTransactionInfo[]>(
            `/api/v1/staking/mass-payment/${address}/${assetId}`
        );

        if (response.statusText !== 'OK') {
            return [];
        }
        const mappedTransactions: MappedWavesTransactionInfo[] = response.data.map(
            (tx: WavesTransactionInfo) => ({
                ...tx,
                transferAmount: grabTransactionTransferByRecipient(tx, address).amount,
            })
        );

        return mappedTransactions;
    }

    mapPayoutCheck(
        tx: MappedWavesTransactionInfo,
        itemIndex: number,
        txList: MappedWavesTransactionInfo[]
    ) {
        return (
            <PayoutCheck
                checkNumber={txList.length - itemIndex}
                date={moment(tx.timestamp).toDate()}
                profit={tx.transferAmount}
                transactionUrl={tx.id}
            />
        );
    }

    render() {
        const { mappedTransactions } = this.state;

        const payoutChecks = mappedTransactions.map(this.mapPayoutCheck);

        return (
            <div className={bem.block()}>
                <div className={bem.element('list')}>
                    {payoutChecks.length > 0 ? payoutChecks : 'No Payout checks'}
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    user: state.auth.user,
}))(StakingRightPanel);
