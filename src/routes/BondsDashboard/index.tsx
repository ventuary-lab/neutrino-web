import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from 'yii-steroids/ui/nav/Nav';
import { getUser } from 'yii-steroids/reducers/auth';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';
import { getControlPrice } from 'reducers/contract/selectors';

import { html, dal } from 'components';
import OrdersTable from './OrdersTable';
import AuctionDiscount from './Auction';
import BuyBondsForm from './views/BuyBondsForm';
import LiquidateBondsForm from './views/LiquidateBondsForm';
import OrderBook from './OrderBook';

import { ILongPullingComponent } from 'ui/global/types';
import { FormTabEnum } from './enums';
import { IOrder, IUserOrders, Props, State } from './types';

import './BondsDashboard.scss';

const bem = html.bem('BondsDashboard');

const DEFAULT_ROI_DISCOUNT = 10;
const ROI_LS_KEY = 'roi_discount';

enum OrdersTableTabEnum {
    ACTIVE = 'active',
    HISTORY = 'history',
}

class BondsDashboard extends React.Component<Props, State> implements ILongPullingComponent {
    _updateInterval;
    _updateTimeout;
    _idUpdating: boolean;

    constructor(props) {
        super(props);

        this._updateListener = this._updateListener.bind(this);
        this._updateTimeout = 4000;
        this._idUpdating = false;

        this.state = {
            currentRoi: Number(localStorage.getItem(ROI_LS_KEY)) || DEFAULT_ROI_DISCOUNT,
            formTab: FormTabEnum.AUCTION,
        };
    }

    async componentDidMount() {
        await this._updateListener();
        await this.getAndUpdateROI();
        this.startListening();
    }

    componentWillUnmount() {
        this.stopListening();
    }

    async getAndUpdateROI() {
        const deficitPercentResponse = await axios.get<number>(
            '/api/explorer/get_deficit_per_cent'
        );

        if (deficitPercentResponse.statusText !== 'OK') {
            return;
        }

        const currentDeficit = Number(deficitPercentResponse.data);
        const validRoi = Math.round(Math.abs(currentDeficit) - 1)

        this.setState({
            currentRoi: currentDeficit < 0 ? validRoi : DEFAULT_ROI_DISCOUNT,
        });

        localStorage.setItem(ROI_LS_KEY, String(validRoi))
    }

    async _updateListener() {
        const { user, pairName } = this.props;

        if (!pairName || this._idUpdating) {
            return;
        }

        this._idUpdating = true;

        try {
            const bondOrdersResponse = await axios.get<IOrder[]>(
                `/api/v1/bonds/${pairName}/orders`
            );
            const liquidateOrdersResponse = await axios.get<IOrder[]>(
                `/api/v1/liquidate/${pairName}/orders`
            );
            let userOrdersResponse;

            if (user) {
                userOrdersResponse = await axios.get<IUserOrders>(
                    `/api/v1/bonds/user/${user.address}`
                );
            }

            await this.getAndUpdateROI();

            this.setState({
                bondOrders: bondOrdersResponse.data,
                liquidateOrders: liquidateOrdersResponse.data,
                userOrders: userOrdersResponse && userOrdersResponse.data,
            });
        } catch (err) {
            console.warn('Error on updating orders...', err);
        } finally {
            this._idUpdating = false;
        }
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

    render() {
        const { liquidateOrders, bondOrders, userOrders, currentRoi } = this.state;

        if (!bondOrders || !liquidateOrders) {
            return null;
        }

        const { controlPrice, baseCurrency, quoteCurrency, user } = this.props;
        const { formTab } = this.state;

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    {formTab === FormTabEnum.AUCTION ? (
                        <>
                            <AuctionDiscount roi={currentRoi} />
                        </>
                    ) : (
                        <OrderBook
                            controlPrice={controlPrice}
                            orders={
                                formTab === FormTabEnum.CONFIGURE ? bondOrders : liquidateOrders
                            }
                            user={user}
                            baseCurrency={baseCurrency}
                            quoteCurrency={quoteCurrency}
                            formTab={
                                formTab === FormTabEnum.CONFIGURE
                                    ? FormTabEnum.AUCTION
                                    : FormTabEnum.LIQUIDATE
                            }
                        />
                    )}
                    <div className={bem.element('forms')}>
                        <Nav
                            isFullWidthTabs
                            layout={'tabs'}
                            onChange={formTab => this.setState({ formTab })}
                            items={this.getTopNavigationTabItems()}
                        />
                    </div>
                </div>
                <div className={bem.element('column', 'right')}>
                    <div className={bem.element('orders', userOrders ? undefined : 'hidden')}>
                        <Nav
                            className={bem.element('orders-nav')}
                            layout={'tabs'}
                            activeTab={OrdersTableTabEnum.ACTIVE}
                            items={this.getBottomNavigationTabItems()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    pairName: getPairName(state),
    baseCurrency: getBaseCurrency(state),
    quoteCurrency: getQuoteCurrency(state),
    user: getUser(state),
    controlPrice: getControlPrice(state),
}))(BondsDashboard);
