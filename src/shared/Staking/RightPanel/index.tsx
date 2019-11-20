import React from 'react';
import axios from 'axios';
import { html } from 'components';

import { WavesTransactionInfo } from 'contractControllers/types';

import './style.scss';

const bem = html.bem('StakingRightPanel');

const grabTransactionTransferAmount = (transaction: WavesTransactionInfo) => {
    return transaction.transfers[0].amount;
};
interface MappedWavesTransactionInfo extends Omit<WavesTransactionInfo, 'transfers'> {
    transferAmount?: number;
}

interface Props {}
interface State {
    mappedTransactions: MappedWavesTransactionInfo[];
}

class RightPanel extends React.Component {
    state: State;

    constructor(props: Props) {
        super(props);

        this.getMassTransactionsList = this.getMassTransactionsList.bind(this);

        this.state = {
            mappedTransactions: [],
        };
    }

    async componentDidMount() {
        // http://localhost:5000/api/v1/staking/mass-payment/3PNZqxd9zabQWwoo58jF9931xa2ui8gSiuu/AbunLGErT5ctzVN8MVjb4Ad9YgjpubB8Hqb17VxzfAck

        const massPaymentTxs = await this.getMassTransactionsList('3PNZqxd9zabQWwoo58jF9931xa2ui8gSiuu', 'AbunLGErT5ctzVN8MVjb4Ad9YgjpubB8Hqb17VxzfAck');
        this.setState({ mappedTransactions: massPaymentTxs });
    }

    async getMassTransactionsList(address: string, assetId: string) {
        // return null;
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

    render() {
        return <div className={bem.block()}>{/* {this.getPaymentsList()} */}</div>;
    }
}

export default RightPanel;
