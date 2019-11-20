export interface WavesTransfer {
    recipient: string;
    amount: number;
}

export interface WavesTransactionInfo {
    senderPublicKey: string;
    fee: number;
    type: number;
    transferCount: number;
    version: number;
    totalAmount: number;
    attachment: string;
    sender: string;
    feeAssetId: string | null;
    proofs: string[];
    assetId: string;
    transfers: WavesTransfer[];
    buyMatcherFee: number;
    timestamp: number;
    height: number;
    order1?: WavesTransactionInfo;
    order2?: WavesTransactionInfo;
}
