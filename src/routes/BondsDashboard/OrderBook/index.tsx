import React from 'react';
import PropTypes from 'prop-types';
import { html } from 'components';
import { round as _round, sum as _sum, groupBy as _groupBy, orderBy as _orderBy } from 'lodash';
import { computeROIForOrder } from '../helpers';
import { FormTabEnum } from '../enums';

import './OrderBook.scss';
import CurrencyEnum from 'enums/CurrencyEnum';
import { Props, State } from './types';
import { NEUTRINO_DEC } from 'reducers/contract/helpers';

const bem = html.bem('OrderBook');

function OrderBookTitle({ title, amount }) {
    return (
        <div className={bem.element('orb-title')}>
            <span>{title}</span>
            <span>{amount}</span>
        </div>
    );
}

class OrderBook extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.computeROIForField = this.computeROIForField.bind(this);
        this.reduceSameOwnerOrders = this.reduceSameOwnerOrders.bind(this);
        this.getBuyBondOrders = this.getBuyBondOrders.bind(this);
        this.getLiquidateOrders = this.getLiquidateOrders.bind(this);
    }

    computeROIForField(groupedField) {
        const sum = Math.min(...groupedField.map(order => order.debugRoi));
        return _round(sum / groupedField.length, 2);
    }

    computeROIForOrder(order) {
        return order.debugRoi;
    }

    reduceSameOwnerOrders(orders) {}

    getLiquidateOrders({ formTab, orders, user }) {
        if (formTab !== FormTabEnum.LIQUIDATE) {
            return;
        }
        const mappedOrders = orders;

        return (
            <div className={bem.element('columns')}>
                {mappedOrders.map(order => {
                    return (
                        <div
                            key={order.id}
                            className={bem.element('body-row', {
                                my: user && user.address === order.owner,
                            })}
                        >
                            <div className={bem.element('body-column', 'bg')}>
                                {Math.floor(order.restTotal)}
                            </div>
                            <div className={bem.element('body-column', 'address')}>
                                {order.owner}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    getBuyBondOrders({ orders, formTab, user }) {
        if (formTab !== FormTabEnum.AUCTION) {
            return;
        }

        return (
            <div className={bem.element('columns')}>
                {orders.map(order => {
                    const { price } = order;

                    return (
                        <div
                            key={price}
                            className={bem.element('body-row', {
                                my: user ? order.owner === user.address : false,
                            })}
                        >
                            <div className={bem.element('body-column', 'bg')}>
                                {Math.floor(order.restAmount)}
                            </div>
                            <div className={bem.element('body-column', 'bg')}>
                                {this.computeROIForOrder(order)}
                            </div>
                            <div className={bem.element('body-column')}>
                                {_round(price / NEUTRINO_DEC, 2)}
                            </div>
                            <div className={bem.element('body-column', 'bg')}>
                                {_round(order.restTotal)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        const { orders, controlPrice, formTab, user, baseCurrency } = this.props;

        if (!orders) {
            return null;
        }

        const headerRow = (
            <div className={bem.element('header-row', 'summary')}>
                {formTab === FormTabEnum.AUCTION && (
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
                            {_round(_sum(orders.map(order => order.restTotal)))}
                        </div>
                    </>
                )}
                {formTab === FormTabEnum.LIQUIDATE && (
                    <>
                        <div className={bem.element('header-column', 'upper-case')}>
                            {_round(_sum(orders.map(order => order.restTotal)))}
                        </div>
                    </>
                )}
            </div>
        );

        const wavesByUsdAmount = _round(controlPrice / NEUTRINO_DEC, 2);
        const usdnByWavesAmount = _round(1 / wavesByUsdAmount, 2);

        return (
            <div className={bem.block()}>
                {/* <div
                    className={bem.element('title')}
                    style={{ display: !controlPrice ? 'none' : '' }}
                >
                    <OrderBookTitle title={'WAVES / USD: '} amount={wavesByUsdAmount} />
                    <OrderBookTitle title={'USDN / WAVES: '} amount={usdnByWavesAmount} />
                </div> */}
                <div className={bem.element('header-row')}>
                    <div className={bem.element('header-column', 'upper-case')}>
                        {CurrencyEnum.getLabel(baseCurrency)}
                    </div>
                    {formTab === FormTabEnum.AUCTION && (
                        <>
                            <div className={bem.element('header-column', 'upper-case')}>ROI</div>
                            <div className={bem.element('header-column')}>Price</div>
                            <div className={bem.element('header-column', 'upper-case')}>
                                {CurrencyEnum.getLabel(CurrencyEnum.WAVES)}
                            </div>
                        </>
                    )}
                </div>
                {headerRow}
                {this.getBuyBondOrders({ formTab, user, orders: _orderBy(orders, 'debugRoi', 'asc') })}
                {this.getLiquidateOrders({ formTab, user, orders })}
            </div>
        );
    }
}

export default OrderBook;
