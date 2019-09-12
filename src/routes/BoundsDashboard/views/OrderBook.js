import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {dal, html} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

import './OrderBook.scss';
import CollectionEnum from 'enums/CollectionEnum';
import {getBaseCurrency, getPairName, getQuoteCurrency} from 'reducers/layout';
import CurrencyEnum from 'enums/CurrencyEnum';

const bem = html.bem('OrderBook');

@connect(
    state => ({
        pairName: getPairName(state),
        baseCurrency: getBaseCurrency(state),
        quoteCurrency: getQuoteCurrency(state),
    })
)
@dal.hoc2(
    props => ({
        url: `/api/v1/orders/${props.pairName}/opened`,
        key: 'orders',
        collection: CollectionEnum.BONDS_ORDERS,
    })
)
export default class OrderBook extends React.PureComponent {

    static propTypes = {
        pairName: PropTypes.string,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        orders: PropTypes.arrayOf(PropTypes.shape({
            amount: PropTypes.number,
            price: PropTypes.number,
        })),
    };

    render() {
        if (!this.props.orders) {
            return null;
        }

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

                </div>
            </div>
        );
    }
}
