import React from 'react';
import PropTypes from 'prop-types';
import {
    round as _round,
    sum as _sum,
    groupBy as _groupBy,
    orderBy as _orderBy,
} from 'lodash';

import { html } from 'components';

import './OrderBook.scss';
import CurrencyEnum from 'enums/CurrencyEnum';
import OrderSchema from 'types/OrderSchema';
import UserSchema from 'types/UserSchema';
// import { Utils } from 'ui/global/utils';
// import OrderStatusEnum from 'enums/OrderStatusEnum';
import { computeROI } from 'reducers/contract/helpers';

const bem = html.bem('OrderBook');

function OrderBookTitle({ title, amount }) {
    return (
        <div className={bem.element('orb-title')}>
            <span>{title}</span>
            <span>{amount}</span>
        </div>
    );
}

export default class OrderBook extends React.PureComponent {
    static propTypes = {
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        user: UserSchema,
        orders: PropTypes.arrayOf(OrderSchema),
        formTab: PropTypes.oneOf(['buy', 'liquidate']),
    };

    constructor(props) {
        super(props);

        this.computeROIForField = this.computeROIForField.bind(this);
    }

    computeROIForField(groupedField) {
        const { controlPrice } = this.props;

        return _round(
            _sum(
                groupedField.map(order => {
                    return computeROI(order.amount, order.total, controlPrice);
                })
            ),
            2
        );
    }

    // getCommonROI (orders) {
    //     const ROIs = orders.map(order => this.computeROIForField(order));
    //     return Math.max(...ROIs);
    // }

    // getCommonPrice (orders) {

    // }

    render() {
        const { orders, controlPrice } = this.props;

        if (!orders) {
            return null;
        }

        const headerRow = (
            <div className={bem.element('header-row', 'summary')}>
                {this.props.formTab === 'buy' && (
                    <>
                        <div className={bem.element('header-column', 'upper-case')}>
                            {_round(_sum(orders.map(order => order.restAmount)))}
                        </div>
                        <div className={bem.element('header-column')}>
                            {/* {this.getCommonROI(orders)} */}-
                        </div>
                        <div className={bem.element('header-column')}>
                            {/* {this.getCommonPrice(orders)} */}-
                        </div>
                        <div className={bem.element('header-column', 'upper-case')}>
                            {_round(_sum(orders.map(order => order.restTotal)), 2)}
                        </div>
                    </>
                )}
                {this.props.formTab === 'liquidate' && (
                    <>
                        <div className={bem.element('header-column', 'upper-case')}>
                            {_round(_sum(orders.map(order => order.restTotal)))}
                        </div>
                    </>
                )}
            </div>
        );
        
        let groupedOrders = _groupBy(orders, 'price');
        const sortedKeys = _orderBy(Object.keys(groupedOrders).map(item => Number(item)), null, 'desc');

        const wavesByUsdAmount = _round(controlPrice / 100, 2);
        const usdnByWavesAmount = _round(1 / wavesByUsdAmount, 2);

        return (
            <div className={bem.block()}>
                <div
                    className={bem.element('title')}
                    style={{ display: !controlPrice ? 'none' : '' }}
                >
                    <OrderBookTitle title={'WAVES / USD: '} amount={wavesByUsdAmount} />
                    <OrderBookTitle title={'USD-N / WAVES: '} amount={usdnByWavesAmount} />
                </div>
                <div className={bem.element('header-row')}>
                    <div className={bem.element('header-column', 'upper-case')}>
                        {CurrencyEnum.getLabel(this.props.baseCurrency)}
                    </div>

                    {this.props.formTab === 'buy' && (
                        <>
                            <div className={bem.element('header-column', 'upper-case')}>ROI</div>
                            <div className={bem.element('header-column')}>{__('Price')}</div>
                            <div className={bem.element('header-column', 'upper-case')}>
                                {CurrencyEnum.getLabel(CurrencyEnum.WAVES)}
                            </div>
                        </>
                    )}
                </div>
                {headerRow}
                {this.props.formTab === 'buy' && (
                    <div className={bem.element('columns')}>
                        {sortedKeys.map(price => (
                            <div
                                key={price}
                                className={bem.element('body-row', {
                                    my:
                                        this.props.user &&
                                        groupedOrders[price]
                                            .map(order => order.owner)
                                            .includes(this.props.user.address),
                                })}
                            >
                                <div className={bem.element('body-column', 'bg')}>
                                    {_round(
                                        _sum(groupedOrders[price].map(order => order.restAmount))
                                    )}
                                </div>
                                <div className={bem.element('body-column', 'bg')}>
                                    {this.computeROIForField(groupedOrders[price])}
                                </div>
                                <div className={bem.element('body-column')}>
                                    {_round(price / 100, 2)}
                                </div>
                                <div className={bem.element('body-column', 'bg')}>
                                    {_round(
                                        _sum(groupedOrders[price].map(order => order.restTotal)),
                                        2
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {this.props.formTab === 'liquidate' && (
                    <div className={bem.element('columns')}>
                        {this.props.orders.map(order => (
                            <div
                                key={order.id}
                                className={bem.element('body-row', {
                                    my: this.props.user && this.props.user.address === order.owner,
                                })}
                            >
                                <div className={bem.element('body-column', 'bg')}>
                                    {_round(order.restTotal)}
                                </div>
                                <div className={bem.element('body-column', 'address')}>
                                    {order.owner}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
