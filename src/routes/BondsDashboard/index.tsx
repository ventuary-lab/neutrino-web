import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from 'yii-steroids/ui/nav/Nav';
import { getUser } from 'yii-steroids/reducers/auth';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';
import { getControlPrice } from 'reducers/contract/selectors';

import { html, dal } from 'components';
import OrdersTable from './OrdersTable';
import BuyBondsForm from './views/BuyBondsForm';
import LiquidateBondsForm from './views/LiquidateBondsForm';
import OrderBook from './OrderBook';

import { ILongPullingComponent } from 'ui/global/types';
import { FormTabEnum } from './enums';
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
            formTab: FormTabEnum.AUCTION,
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
                    <OrderBook
                        controlPrice={controlPrice}
                        orders={formTab === FormTabEnum.AUCTION ? bondOrders : liquidateOrders}
                        user={user}
                        baseCurrency={baseCurrency}
                        quoteCurrency={quoteCurrency}
                        formTab={formTab}
                    />
                    <div className={bem.element('forms')}>
                        <Nav
                            isFullWidthTabs
                            layout={'tabs'}
                            onChange={formTab => this.setState({ formTab })}
                            items={[
                                {
                                    id: FormTabEnum.AUCTION,
                                    label: 'Buy',
                                    content: BuyBondsForm,
                                    contentProps: {
                                        controlPrice,
                                    },
                                },
                                {
                                    id: FormTabEnum.LIQUIDATE,
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
