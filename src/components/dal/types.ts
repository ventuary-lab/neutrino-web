export interface WavesKeeperAssetData {
    assetId: string;
    tokens: string;
}
export interface WavesKeeperCallArgument {
    type: 'integer' | 'string';
    value: string;
}

export interface WavesKeeperCallData {
    args: WavesKeeperCallArgument[];
    function: string;
}

export interface WavesKeeperTransactionData {
    fee: WavesKeeperAssetData;
    dApp: string;
    call: WavesKeeperCallData;
    payment: WavesKeeperAssetData[];
}

export interface WavesKeeperTransaction {
    type: number;
    data: WavesKeeperTransactionData;
}

export interface WavesKeeperAccountBalance {
    available: string;
    leasedOut: string;
    network: string;
}

export interface WavesKeeperAccount {
    address: string;
    balance: WavesKeeperAccountBalance;
    lastActive: number;
    name: string;
    network: "mainnet" | "testnet" | "customnet" | "stagenet";
    networkCode: "W" | "T" | "S";
    publicKey: string;
    selected: number;
    type: string;
}

export interface WavesKeeper {
    publicState: () => Promise<{
        account: WavesKeeperAccount;
    }>;
    signAndPublishTransaction: (tx: WavesKeeperTransaction) => Promise<any>;
    signTransaction: (tx: WavesKeeperTransaction) => Promise<void>;
}
