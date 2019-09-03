import React from 'react';
// import PropTypes from 'prop-types';

import {html} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

import './OrderBook.scss';

const bem = html.bem('OrderBook');

export default class OrderBook extends React.PureComponent {

    static propTypes = {

    };


    render() {

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
                        {BalanceCurrencyEnum.WAVES}
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
