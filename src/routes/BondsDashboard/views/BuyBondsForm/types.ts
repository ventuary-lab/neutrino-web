import { FormTabEnum } from 'routes/BondsDashboard/enums';

export type Props = {
    id: FormTabEnum;
    formType: string;
    formValues: Record<string, any>;
    bondOrders: Record<string, string>[];
    controlPrice: number;
    baseCurrency: string;
    quoteCurrency: string;
    pairName: string;
    roi: number; // like wavelets
};
export type State = {
    isButtonDisabled: boolean;
    dependPrice?: number;
    roi: number;
};
export type IBuyBondsForm = {
    isBondsFieldFocused: boolean;
    roiComputingAllowed: boolean;
    percentage: number[];
};
