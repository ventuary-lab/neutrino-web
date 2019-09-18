import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Nav from 'yii-steroids/ui/nav/Nav';

import {html} from 'components';
import OrdersTable from './views/OrdersTable';
import BuyBoundsForm from './views/BuyBoundsForm';
import LiquidateBoundsForm from './views/LiquidateBoundsForm';
import OrderBook from './views/OrderBook';
import MainChart from './views/MainChart';

import './BoundsDashboard.scss';
import CollectionEnum from '../../enums/CollectionEnum';
import {dal} from 'components';
import {getBaseCurrency, getPairName, getQuoteCurrency} from 'reducers/currency';
import {getUser} from 'yii-steroids/reducers/auth';
import OrderSchema from 'types/OrderSchema';
import UserSchema from 'types/UserSchema';

const bem = html.bem('BoundsDashboard');

@connect(
    state => ({
        pairName: getPairName(state),
        baseCurrency: getBaseCurrency(state),
        quoteCurrency: getQuoteCurrency(state),
        user: getUser(state),
    })
)
@dal.hoc(
    props => [
        {
            url: `/api/v1/bonds/${props.pairName}/orders`,
            key: 'bondOrders',
            collection: CollectionEnum.BONDS_ORDERS,
        },
        {
            url: `/api/v1/liquidate/${props.pairName}/orders`,
            key: 'liquidateOrders',
            collection: CollectionEnum.NEUTRINO_ORDERS,
        },
        props.user && {
            url: `/api/v1/bonds/user/${props.user.address}`,
            key: 'userOrders',
            collection: [
                CollectionEnum.BONDS_ORDERS,
                CollectionEnum.NEUTRINO_ORDERS,
            ],
        }
    ].filter(Boolean)
)
export default class BoundsDashboard extends React.PureComponent {

    static propTypes = {
        bondOrders: PropTypes.arrayOf(OrderSchema),
        liquidateOrders: PropTypes.arrayOf(OrderSchema),
        user: UserSchema,
        userOrders: PropTypes.shape({
            opened: PropTypes.arrayOf(OrderSchema),
            history: PropTypes.arrayOf(OrderSchema),
        }),
    };

    constructor() {
        super(...arguments);

        this.state = {
            formTab: 'buy',
        };
    }

    render() {
        if (!this.props.bondOrders || !this.props.liquidateOrders) {
            return null;
        }

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <div className={bem.element('order-book')}>
                        <OrderBook
                            orders={this.state.formTab === 'buy' ? this.props.bondOrders : this.props.liquidateOrders}
                            user={this.props.user}
                            baseCurrency={this.props.baseCurrency}
                            quoteCurrency={this.props.quoteCurrency}
                            formTab={this.state.formTab}
                        />
                    </div>
                    <div className={bem.element('forms')}>
                        <Nav
                            isFullWidthTabs
                            layout={'tabs'}
                            onChange={formTab => this.setState({formTab})}
                            items={[
                                {
                                    id: 'buy',
                                    label: __('Buy'),
                                    content: BuyBoundsForm,
                                },
                                {
                                    id: 'liquidate',
                                    label: __('Liquidate'),
                                    className: bem.element('danger-tab'),
                                    content: LiquidateBoundsForm,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className={bem.element('column', 'right')}>
                    <div className={bem.element('graph')}>
                        <MainChart
                            pairName={this.props.pairName}
                        />
                    </div>
                    <div className={bem.element('orders')}>
                        {this.props.userOrders && (
                            <Nav
                                layout={'tabs'}
                                items={[
                                    {
                                        id: 'my-open-orders',
                                        label: __('My open Orders'),
                                        content: OrdersTable,
                                        contentProps: {
                                            items: this.props.userOrders.opened,
                                            pairName: this.props.pairName,
                                        }
                                    },
                                    {
                                        id: 'my-orders-history',
                                        label: __('My Orders History'),
                                        content: OrdersTable,
                                        contentProps: {
                                            items: this.props.userOrders.history,
                                            pairName: this.props.pairName,
                                            isHistory: true,
                                        }
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
