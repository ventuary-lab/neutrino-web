import { IUser } from 'contractControllers/types';

export interface IOrder {
    id: string;
    height: number;
    timestamp: number;
    owner: string;
    price: number;
    total: number;
    filledTotal: number;
    index: number;
    amount: number;
    filledAmount: number;
    restAmount: number;
    pairName: string;
    status: string;
};

export interface IUserOrders {
    opened: IOrder[];
    history: IOrder[];
};

export interface Props {
    pairName: string;
    baseCurrency: string;
    quoteCurrency: string;
    user: IUser;
    controlPrice: number;
}

export interface State {
    bondOrders?: IOrder[],
    liquidateOrders?: IOrder[],
    userOrders?: IUserOrders;
    formTab: string;
}

export interface IBondsDashboard {

}

//     bondOrders: PropTypes.arrayOf(OrderSchema),
//     liquidateOrders: PropTypes.arrayOf(OrderSchema),
//     user: UserSchema,
//     userOrders: PropTypes.shape({
//         opened: PropTypes.arrayOf(OrderSchema),
//         history: PropTypes.arrayOf(OrderSchema),
//     }),