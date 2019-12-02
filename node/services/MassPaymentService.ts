import axios, { AxiosResponse } from 'axios';

import { WavesTransactionInfo, WavesTransfer } from '../../src/contractControllers/types';

class MassPaymentService {
    transactionsCountLimit!: number;
    nodeUrl!: string;

    constructor({ nodeUrl }: { nodeUrl: string }) {
        this.nodeUrl = nodeUrl;
        this.transactionsCountLimit = 1000;
    }

    // 3P4EUdeD22MrnAiWNZqjmV2x3bfnGFU2E45 just as an example
    async getAddressMassPayments(
        address: string
    ): Promise<AxiosResponse<WavesTransactionInfo[][]> | void> {
        const { transactionsCountLimit, nodeUrl } = this;

        const response = await axios.get(
            `${nodeUrl}/transactions/address/${address}/limit/${transactionsCountLimit}`
        );

        if (response.statusText === 'OK') {
            return response;
        }
    }

    async getRecipientMassPaymentsByAssetId(address: string, assetId: string) {
        const transactionsResponse = await this.getAddressMassPayments(address);

        if (!transactionsResponse) {
            return;
        }

        const [transactions] = transactionsResponse.data;

        // Filter by Recipient
        const filtered = transactions.filter(item => item.assetId === assetId);
        return filtered;
    }
}

export default MassPaymentService;
// async function main () {
//     const mps = new MassPaymentService({ nodeUrl: 'http://nodes.wavesplatform.com' });
//     const transactions = await mps.getRecipientMassPaymentsByAssetId(
//         '3PNZqxd9zabQWwoo58jF9931xa2ui8gSiuu',
//         'AbunLGErT5ctzVN8MVjb4Ad9YgjpubB8Hqb17VxzfAck'
//     );
//     console.log(transactions);
// }
// main();