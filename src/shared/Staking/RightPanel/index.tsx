import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { html, dal, store } from 'components';
import PayoutCheck from '../PayoutCheck';
import { WavesTransactionInfo } from 'contractControllers/types';

import './style.scss';

const bem = html.bem('StakingRightPanel');

const grabTransactionTransferAmount = (transaction: WavesTransactionInfo) => {
    return transaction.transfers[0].amount;
};
interface MappedWavesTransactionInfo extends Omit<WavesTransactionInfo, 'transfers'> {
    transferAmount?: number;
}

interface Props {
    user: any;
}
interface State {
    mappedTransactions: MappedWavesTransactionInfo[];
}

class StakingRightPanel extends React.Component {
    state: State;

    constructor(props: Props) {
        super(props);

        this.getMassTransactionsList = this.getMassTransactionsList.bind(this);
        this.mapPayoutCheck = this.mapPayoutCheck.bind(this);

        this.state = {
            mappedTransactions: [],
        };
    }

    componentDidUpdate() {
        // @ts-ignore
        const { user } = this.props;

        if (user) {
            (async () => {
                // const massPaymentTxs = await this.getMassTransactionsList(
                //     user.address,
                //     '6fnDrGcntTDP3ftibavq4EjKuqYoaDkJn8TPKGZgBgy8'
                // );
                const massPaymentTxs = await this.getMassTransactionsList(
                    '3PNZqxd9zabQWwoo58jF9931xa2ui8gSiuu',
                    'AbunLGErT5ctzVN8MVjb4Ad9YgjpubB8Hqb17VxzfAck'
                );

                this.setState({ mappedTransactions: massPaymentTxs });
            })();
        }
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
                transferAmount: grabTransactionTransferAmount(tx),
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
                date={new Date()}
                profit={1.5}
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
