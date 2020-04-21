import React from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import Nav from 'yii-steroids/ui/nav/Nav';

import { getUser } from 'yii-steroids/reducers/auth';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';
import { getControlPrice } from 'reducers/contract/selectors';

import { html, dal } from 'components';
import OrdersTable from './OrdersTable';
import AuctionDiscount from './Auction';
import QuestionMarkData from 'shared/Auction/QuestionMarkData';
import BuyBondsForm from './views/BuyBondsForm';
import LiquidateBondsForm from './views/LiquidateBondsForm';
// import OrderBook from './OrderBook';
import { getNeutrinoDappAddress } from 'components/selectors';
import OrderBook from 'shared/Auction/Orderbook';
import { TableRecord } from 'shared/Auction/Orderbook/types';
import ReserveHeading from 'shared/Auction/ReserveHeading';
import OrderProvider from 'shared/Auction/OrderProvider';
import CurrencyEnum from 'enums/CurrencyEnum';
import { prettyPrintNumber } from 'ui/global/helpers';
import {
    computeBR,
    computeBRFromROI,
    computeROI,
    // computeBondsAmountFromROI,
    // computeWavesAmountFromROI,
    // getComputedBondsFromROI,
} from 'reducers/contract/helpers';

import { ILongPullingComponent } from 'ui/global/types';
import { FormTabEnum } from './enums';
import { IOrder, IUserOrders, Props, State } from './types';

import './BondsDashboard.scss';

const bem = html.bem('BondsDashboard');

const DEFAULT_ROI_DISCOUNT = 10;

const ROI_LS_KEY = 'roi_discount';
const BR_LS_KEY = 'backing_ratio';
const DEFICIT_LS_KEY = 'deficit_percent'

enum OrdersTableTabEnum {
    ACTIVE = 'active',
    HISTORY = 'history',
}

class BondsDashboard extends React.Component<Props, State> implements ILongPullingComponent {
    _updateInterval;
    _updateTimeout;
    _isUpdating: boolean;

    constructor(props) {
        super(props);

        this.mapOrderbookRecord = this.mapOrderbookRecord.bind(this)

        this._updateListener = this._updateListener.bind(this);
        this._updateTimeout = 4000;
        this._isUpdating = false;

        this.state = {
            currentRoi: Number(localStorage.getItem(ROI_LS_KEY)) || DEFAULT_ROI_DISCOUNT,
            formTab: FormTabEnum.AUCTION,
            backingRatio: Number(localStorage.getItem(BR_LS_KEY)) || 0,
            neutrinoSupply: 0,
            currentDeficitPercent: Number(localStorage.getItem(DEFICIT_LS_KEY)) || 0,
            neutrinoReserves: 0,
        };
    }

    async componentDidMount() {
        await this._updateListener();
        // await this.getAndUpdateROI();
        this.startListening();
    }

    componentWillUnmount() {
        this.stopListening();
    }

    async updateBR(totalSupply: number) {
        const { controlPrice } = this.props;
        const neutrinoAddress = getNeutrinoDappAddress(dal);

        try {
            const response = await axios.get(`/addresses/balance/${neutrinoAddress}`, {
                baseURL: dal.nodeUrl,
            });
            const balanceLockWavesResponse = await axios.get(
                `/addresses/data/${neutrinoAddress}/balance_lock_waves`,
                {
                    baseURL: dal.nodeUrl,
                }
            );

            const { value: balanceLockWaves } = balanceLockWavesResponse.data;
            const { balance } = response.data;
            // const { value: balance } = response.data
            // console.log({ balance, totalSupply, controlPrice });

            let reserveInWaves = balance - balanceLockWaves;
            reserveInWaves /= CurrencyEnum.getContractPow(CurrencyEnum.WAVES);
            // const reserveInWaves = balance / CurrencyEnum.getContractPow(CurrencyEnum.WAVES)

            const neutrinoReserves = reserveInWaves * (controlPrice / 100);

            const BR = computeBR({ reserveInWaves, supplyInNeutrino: totalSupply }, controlPrice);

            console.log({ BR });

            this.setState({ backingRatio: BR, neutrinoReserves, neutrinoSupply: totalSupply });
            localStorage.setItem(BR_LS_KEY, String(BR));
        } catch (err) {
            console.log({ err });
        }
    }

    updateROI(currentDeficit: number) {
        const validRoi = Math.round(Math.abs(currentDeficit) - 1);

        this.setState({
            currentRoi: currentDeficit < 0 ? validRoi : DEFAULT_ROI_DISCOUNT,
        });

        localStorage.setItem(ROI_LS_KEY, String(validRoi));
    }

    async _updateListener() {
        const { user, pairName } = this.props;

        if (!pairName || this._isUpdating) {
            return;
        }

        this._isUpdating = true;

        const promiseList = [
            axios.get<IOrder[]>(`/api/v1/bonds/${pairName}/orders`),
            axios.get<IOrder[]>(`/api/v1/liquidate/${pairName}/orders`),
            axios.get<number>('/api/explorer/get_deficit_per_cent'),
            axios.get<number>('/api/explorer/get_total_issued'),
            user ? axios.get<IUserOrders>(`/api/v1/bonds/user/${user.address}`) : undefined,
        ].filter(Boolean) as [Promise<AxiosResponse<any>>];

        Promise.all(promiseList)
            .then((values) => {
                const [
                    bondOrdersResponse,
                    liquidateOrdersResponse,
                    currentDeficitResponse,
                    totalSupplyResponse,
                    userOrdersResponse,
                ] = values;

                this.updateROI(currentDeficitResponse.data);
                this.updateBR(totalSupplyResponse.data);
                this.setState({
                    currentDeficitPercent: currentDeficitResponse.data,
                    bondOrders: bondOrdersResponse.data,
                    liquidateOrders: liquidateOrdersResponse.data,
                    userOrders: userOrdersResponse && userOrdersResponse.data,
                });

                this._isUpdating = false;
            })
            .catch((err) => {
                console.warn('Error on updating orders...', err);
                this._isUpdating = false;
            });
    }

    startListening() {
        this._updateInterval = setInterval(this._updateListener, this._updateTimeout);
    }

    stopListening() {
        clearInterval(this._updateInterval);
    }

    getTopNavigationTabItems() {
        const { controlPrice } = this.props;
        const { currentRoi, bondOrders } = this.state;

        return [
            {
                id: FormTabEnum.AUCTION,
                label: 'Get NSBT',
                content: BuyBondsForm,
                contentProps: {
                    roi: currentRoi,
                    controlPrice,
                    bondOrders,
                },
            },
            {
                id: FormTabEnum.LIQUIDATE,
                label: 'Liquidation',
                content: LiquidateBondsForm,
            },
            {
                id: FormTabEnum.CONFIGURE,
                label: 'Discounts',
                content: BuyBondsForm,
                contentProps: {
                    formType: 'full',
                    roi: currentRoi,
                    controlPrice,
                    bondOrders,
                },
            },
        ];
    }

    getBottomNavigationTabItems() {
        const { controlPrice, pairName } = this.props;
        const { userOrders } = this.state;

        if (!userOrders) return [];

        return [
            {
                id: OrdersTableTabEnum.ACTIVE,
                label: 'My open Orders',
                content: OrdersTable,
                contentProps: {
                    items: userOrders.opened,
                    pairName: pairName,
                    controlPrice,
                },
            },
            {
                id: OrdersTableTabEnum.HISTORY,
                label: 'My Orders History',
                content: OrdersTable,
                contentProps: {
                    items: userOrders.history,
                    pairName: pairName,
                    isHistory: true,
                    controlPrice,
                },
            },
        ];
    }

    getReserveHeadingValues() {
        const { backingRatio, neutrinoSupply, neutrinoReserves } = this.state;

        const link =
            'https://medium.com/@neutrinoteam/neutrino-system-base-token-nsbt-new-auction-utility-liquidation-mechanics-d1589a2d5e25';
        const brText = (
            <div>
                <span>
                    Backing Ratio (BR) is the share of WAVES reserves in relation to the Neutrino
                    supply. Issuance and liquidation of NSBT occurs when a certain BR is achieved.
                </span>
                <br />
                <a href={link} target="_blank">
                    <b>Read more</b>
                </a>
            </div>
        );

        return [
            {
                label: 'Reserves',
                value: prettyPrintNumber(Math.round(neutrinoReserves)),
            },
            {
                label: 'Supply',
                value: prettyPrintNumber(Math.round(neutrinoSupply)),
            },
            {
                label: 'Backing ratio (BR)',
                value: `${Math.round(backingRatio)}%`,
            },
            {
                label: 'What does it mean',
                additional: <QuestionMarkData text={brText} />,
            },
        ];
    }

    mapOrderbookRecord (order: IOrder): TableRecord {
        return {
            br: 10,
            waves: order.price,
            nsbt: order.restTotal
        }
    }

    render() {
        const { liquidateOrders, bondOrders, userOrders, currentRoi, backingRatio } = this.state;

        if (!bondOrders || !liquidateOrders) {
            return null;
        }

        const { controlPrice, baseCurrency, quoteCurrency, user, pairName } = this.props;
        const { formTab, currentDeficitPercent } = this.state;

        // bondOrders : liquidateOrders

        const orderbookHeading = [
            {
                key: 'nsbt',
                label: 'NSBT',
            },
            {
                key: 'br',
                label: 'BR',
            },
            {
                key: 'waves',
                label: 'WAVES',
            },
        ]

        return (
            <div className={bem.block()}>
                <div>
                    <OrderBook tableRecords={bondOrders.map(this.mapOrderbookRecord)} tableHeaders={orderbookHeading} title="Auction" />
                    <OrderBook tableRecords={liquidateOrders.map(this.mapOrderbookRecord)} tableHeaders={orderbookHeading} title="Liquidate" />
                </div>
                <div>
                    <ReserveHeading values={this.getReserveHeadingValues()} />
                    <OrderProvider
                        pairName={pairName}
                        user={user}
                        currentDeficitPercent={currentDeficitPercent}
                        backingRatio={backingRatio}
                        // backingRatio={110}
                        bondOrders={bondOrders}
                        controlPrice={controlPrice}
                        // controlPrice={100}
                        baseCurrency={baseCurrency}
                        quoteCurrency={quoteCurrency}
                        roi={currentRoi}
                    />
                    <div className={bem.element('user-orders') + ` ${!userOrders ? 'hidden' : ''}`}>
                        <div className={bem.element('orders')}>
                            <Nav
                                className={bem.element('orders-nav')}
                                layout={'tabs'}
                                activeTab={OrdersTableTabEnum.ACTIVE}
                                items={this.getBottomNavigationTabItems()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    pairName: getPairName(state),
    baseCurrency: getBaseCurrency(state),
    quoteCurrency: getQuoteCurrency(state),
    user: getUser(state),
    controlPrice: getControlPrice(state),
}))(BondsDashboard);
