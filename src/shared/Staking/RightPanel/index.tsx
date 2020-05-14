import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { html, dal, store } from 'components';
import PayoutCheck from '../PayoutCheck';
import CurrencyEnum from 'enums/CurrencyEnum';
import { WavesTransactionInfo, WavesTransfer, IUser } from 'contractControllers/types';
import { getMassPaymentSender } from 'reducers/auth/selectors';

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
    user: IUser | null;
}
interface State {
    mappedTransactions: MappedWavesTransactionInfo[];
}

class StakingRightPanel extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.getMassTransactionsList = this.getMassTransactionsList.bind(this);
        this.mapPayoutCheck = this.mapPayoutCheck.bind(this);

        this.state = {
            mappedTransactions: [],
        };
    }

    componentDidUpdate(prevProps: Props) {
        const { user } = this.props;

        if (!prevProps.user && user || user && prevProps.user.address !== user.address) {
            this.updateMassPaymentsList(user);
        };
    }

    componentDidMount () {
        const { user } = this.props;

        if (user && user.address) {
            this.updateMassPaymentsList(user);
        }
    }

    async updateMassPaymentsList (user: IUser) {
        let massPaymentTxs = await this.getMassTransactionsList(
            user.address,
            dal.assets[CurrencyEnum.USD_N]
        );

        try {
            const massPaymentSender = getMassPaymentSender(store.getState());
            if (!massPaymentSender) throw new Error();

            massPaymentTxs = massPaymentTxs.filter((tx: MappedWavesTransactionInfo) => tx.sender === massPaymentSender);
        } catch (err) {
            console.log('Incorrect mass payment address provided');
        }

        this.setState({ mappedTransactions: massPaymentTxs });
    }

    async getMassTransactionsList(address: string, assetId: string) {
        try {
            const response = await axios.get<WavesTransactionInfo[]>(
                `/api/v1/staking/mass-payment/${address}/${assetId}`
            );
            
            const mappedTransactions: MappedWavesTransactionInfo[] = response.data
                .filter((tx: WavesTransactionInfo) => tx.transfers)
                .map(
                (tx: WavesTransactionInfo) => ({
                    ...tx,
                    transferAmount: grabTransactionTransferByRecipient(tx, address).amount,
                })
            );
    
            return mappedTransactions;
        } catch (err) {
            console.log(err)
            return []
        }
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
                profit={tx.transferAmount / (CurrencyEnum.getContractPow(CurrencyEnum.USD_N) || 1)}
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
