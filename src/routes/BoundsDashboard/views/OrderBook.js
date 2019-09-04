import React from 'react';
import PropTypes from 'prop-types';

import {dal, html} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

import './OrderBook.scss';

const bem = html.bem('OrderBook');

@dal.hoc(
    () => dal.getOrderBook()
        .then(orders => ({orders}))
)
export default class OrderBook extends React.PureComponent {

    static propTypes = {
        orders: PropTypes.arrayOf(PropTypes.shape({
            amount: PropTypes.number,
            price: PropTypes.number,
        }))
    };


    render() {

        if (!this.props.orders) {
            return null;
        }

        return (
            <div className={bem.block()}>
                <div className={bem.element('title')}>
                    {__('OrderBook')}
                </div>
                <div className={bem.element('header-row')}>
                    <div className={bem.element('header-column', 'upper-case')}>
                        {BalanceCurrencyEnum.USD_NB}
                    </div>
                    <div className={bem.element('header-column')}>
                        % {__('discount')}
                    </div>
                    <div className={bem.element('header-column', 'upper-case')}>
                        {BalanceCurrencyEnum.USD_N}
                    </div>
                </div>
                <div className={bem.element('sum-row')}>
                    0.18039195
                </div>
                <div className={bem.element('columns')}>

                </div>
            </div>
        );
    }
}
