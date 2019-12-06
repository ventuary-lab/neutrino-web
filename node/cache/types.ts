

export interface ApplicationConfig {
    dApp: string;
    nodeUrl: string;
    intervalSec: number;
    transactionsHandler: (any) => void | null;
}