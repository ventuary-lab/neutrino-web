import React from 'react';
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
import PropTypes from 'prop-types';

const bem = html.bem('BoundsDashboard');

@dal.hoc2(
    () => {
        return {
            url: `/api/v1/orders/3N6sMeyG1rZ4CBW5viaiMoyjP27tH5rTdY6`,
            key: 'orders',
            collection: CollectionEnum.BONDS_ORDERS,
        }}
)
export default class BoundsDashboard extends React.PureComponent {

    static propTypes = {
        orders: PropTypes.shape({
            opened: PropTypes.arrayOf(PropTypes.shape({
                height: PropTypes.number,
                owner: PropTypes.string,
                price: PropTypes.number,
                total: PropTypes.number,
                discountPercent: PropTypes.number,
                index: PropTypes.number,
                pairName: PropTypes.string,
                id: PropTypes.string,
            })),
            history: PropTypes.arrayOf(PropTypes.shape({
                height: PropTypes.number,
                owner: PropTypes.string,
                price: PropTypes.number,
                total: PropTypes.number,
                discountPercent: PropTypes.number,
                index: PropTypes.number,
                pairName: PropTypes.string,
                id: PropTypes.string,
            }))
        }),
        isHistory: PropTypes.bool,
    };

    render() {

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <div className={bem.element('order-book')}>
                        <OrderBook/>
                    </div>
                    <div className={bem.element('forms')}>
                        <Nav
                            isFullWidthTabs
                            layout={'tabs'}
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
                        <MainChart/>
                    </div>
                    <div className={bem.element('orders')}>
                        <Nav
                            layout={'tabs'}
                            items={[
                                {
                                    id: 'my-open-orders',
                                    label: __('My open Orders'),
                                    content: OrdersTable,
                                    contentProps: {
                                        items: this.props.orders.opened,
                                    }
                                },
                                {
                                    id: 'my-orders-history',
                                    label: __('My Orders History'),
                                    content: OrdersTable,
                                    contentProps: {
                                        items: this.props.orders.history,
                                        isHistory: true,
                                    }
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
