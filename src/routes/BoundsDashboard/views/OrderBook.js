import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './OrderBook.scss';
import CurrencyEnum from 'enums/CurrencyEnum';
import OrderSchema from 'types/OrderSchema';
import UserSchema from 'types/UserSchema';

const bem = html.bem('OrderBook');

export default class OrderBook extends React.PureComponent {

    static propTypes = {
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        user: UserSchema,
        orders: PropTypes.arrayOf(OrderSchema),
    };

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('title')}>
                    {__('Order Book')}
                </div>
                <div className={bem.element('header-row')}>
                    <div className={bem.element('header-column', 'upper-case')}>
                        {CurrencyEnum.getLabel(this.props.baseCurrency)}
                    </div>
                    <div className={bem.element('header-column')}>
                        % {__('discount')}
                    </div>
                    <div className={bem.element('header-column', 'upper-case')}>
                        {CurrencyEnum.getLabel(this.props.quoteCurrency)}
                    </div>
                </div>
                <div className={bem.element('columns')}>
                    {this.props.orders.map(order => (
                        <div
                            key={order.id}
                            className={bem.element('body-row', {my: this.props.user && this.props.user.address === order.owner})}
                        >
                            <div className={bem.element('body-column', 'bg')}>
                                {order.amount}
                            </div>
                            <div className={bem.element('body-column')}>
                                {order.discountPercent}%
                            </div>
                            <div className={bem.element('body-column', 'bg')}>
                                {order.total - order.filledTotal}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
