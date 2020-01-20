import { IUser } from 'contractControllers/types';

export interface BalanceDTO {
    balance: number;
    id: string;
}
export interface StakingBalanceDTO {
    neutrino: BalanceDTO | null;
    bond: BalanceDTO | null;
}
export interface Props {
    pairName: string;
    user: IUser;
    baseCurrency: string;
    quoteCurrency: string;
}
export interface State {
    stakingBalance: StakingBalanceDTO;
}