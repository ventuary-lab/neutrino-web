

export type Props = {
    formValues: Record<string, any>;
    bondOrders: Record<string, string>[];
    controlPrice: number;
    baseCurrency: string;
    quoteCurrency: string;
    pairName: string;
}
export type State = {
    isButtonDisabled: boolean;
    dependPrice?: number;
    roi: number;
}
export type IBuyBondsForm = {
    isBondsFieldFocused: boolean;
}
