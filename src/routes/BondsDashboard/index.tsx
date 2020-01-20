import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from 'yii-steroids/ui/nav/Nav';
import { getUser } from 'yii-steroids/reducers/auth';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';
import { getControlPrice } from 'reducers/contract/selectors';

import { html, dal } from 'components';
import OrdersTable from './views/OrdersTable';
import BuyBondsForm from './views/BuyBondsForm';
import LiquidateBondsForm from './views/LiquidateBondsForm';
import OrderBook from './views/OrderBook';
// import MainChart from './views/MainChart';
// import CurrencyEnum from 'enums/CurrencyEnum';
// import CollectionEnum from 'enums/CollectionEnum';
// import OrderSchema from 'types/OrderSchema';
// import UserSchema from 'types/UserSchema';

import { ILongPullingComponent } from 'ui/global/types';
import { IOrder, IUserOrders, Props, State } from './types';

import './BondsDashboard.scss';

const bem = html.bem('BondsDashboard');

class BondsDashboard extends React.Component<Props, State> implements ILongPullingComponent {
    _updateInterval;
    _updateTimeout;

    constructor(props) {
        super(props);

        this._updateListener = this._updateListener.bind(this);
        this._updateTimeout = 2500;

        this.state = {
            formTab: 'buy',
        };
    }

    async componentDidMount () {
        await this._updateListener();
        this.startListening();
    }

    componentWillUnmount () {
        this.stopListening();
    }

    async _updateListener () {
        const { user, pairName } = this.props;

        if (!pairName) {
            return;
        }

        try {
            const bondOrdersResponse = await axios.get<IOrder[]>(`/api/v1/bonds/${pairName}/orders`);
            const liquidateOrdersResponse = await axios.get<IOrder[]>(`/api/v1/liquidate/${pairName}/orders`);
            let userOrdersResponse;

            if (user) {
                userOrdersResponse = await axios.get<IUserOrders>(`/api/v1/bonds/user/${user.address}`);
            }

            this.setState({
                bondOrders: bondOrdersResponse.data,
                liquidateOrders: liquidateOrdersResponse.data,
                userOrders: userOrdersResponse && userOrdersResponse.data
            })
        } catch (err) {
            console.warn('Error on updating orders...', err);
        }
    }

    startListening () {
        this._updateInterval = setInterval(this._updateListener, this._updateTimeout);
    }

    stopListening () {
        clearInterval(this._updateInterval);
    }

    render() {
        const { controlPrice, baseCurrency, quoteCurrency, user, pairName } = this.props;
        const { liquidateOrders, bondOrders, userOrders, formTab } = this.state;

        if (!bondOrders || !liquidateOrders) {
            return null;
        }

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <div className={bem.element('order-book')}>
                        <OrderBook
                            controlPrice={controlPrice}
                            orders={formTab === 'buy' ? bondOrders : liquidateOrders}
                            user={user}
                            baseCurrency={baseCurrency}
                            quoteCurrency={quoteCurrency}
                            formTab={formTab}
                        />
                    </div>
                    <div className={bem.element('forms')}>
                        <Nav
                            isFullWidthTabs
                            layout={'tabs'}
                            onChange={formTab => this.setState({ formTab })}
                            items={[
                                {
                                    id: 'buy',
                                    label: 'Buy',
                                    content: BuyBondsForm,
                                    contentProps: {
                                        controlPrice,
                                    },
                                },
                                {
                                    id: 'liquidate',
                                    label: 'Liquidate',
                                    className: bem.element('danger-tab'),
                                    content: LiquidateBondsForm,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className={bem.element('column', 'right')}>
                    <div className={bem.element('orders')}>
                        {userOrders && (
                            <Nav
                                className={bem.element('orders-nav')}
                                layout={'tabs'}
                                items={[
                                    {
                                        id: 'my-open-orders',
                                        label: 'My open Orders',
                                        content: OrdersTable,
                                        contentProps: {
                                            items: userOrders.opened,
                                            pairName: pairName,
                                            controlPrice,
                                        },
                                    },
                                    {
                                        id: 'my-orders-history',
                                        label: 'My Orders History',
                                        content: OrdersTable,
                                        contentProps: {
                                            items: userOrders.history,
                                            pairName: pairName,
                                            isHistory: true,
                                            controlPrice,
                                        },
                                    },
                                ]}
                            />
                        )}
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
