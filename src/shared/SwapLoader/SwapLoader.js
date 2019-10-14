import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {dal, html} from 'components';

import './SwapLoader.scss';
import CurrencyEnum from '../../enums/CurrencyEnum';
import {getBaseCurrency, getQuoteCurrency} from '../../reducers/currency';

const bem = html.bem('SwapLoader');


@connect(
    state => ({
        quoteCurrency: getQuoteCurrency(state),
        baseCurrency: getBaseCurrency(state),
    })
)
export default class SwapLoader extends React.PureComponent {

    static propTypes = {
        neutrinoBlocked: PropTypes.number,
        wavesBlocked: PropTypes.number,
        unblockBlock: PropTypes.number,
        height: PropTypes.number,
    };

    render() {

        return (
            <div className={bem.block()}>
                <div className={bem.element('inner')}>

                    <div className={bem.element('content')}>
                        <span
                            className={bem.element('title')}
                        >
                        {__('SWAP')}
                    </span>
                        <div className={bem.element('icon')}>
                            <span className={'Icon Icon__swap'}/>
                        </div>
                        <div className={bem.element('direction', {
                            'neutrino-to-waves': this.props.neutrinoBlocked > 0,
                            'waves-to-neutrino': this.props.neutrinoBlocked > 0,
                        })}>
                            <div className={bem.element('currency')}>
                                <div className={bem.element('currency-icon')}>
                                    <span className={`Icon ${CurrencyEnum.getIconClass(this.props.quoteCurrency)}`}/>
                                </div>
                                <span className={bem.element('currency-name')}>
                                    {CurrencyEnum.getLabel(this.props.quoteCurrency)}
                                </span>
                            </div>
                            <span className={bem.element('direction-union')}>
                                {__('to')}
                            </span>
                            <div className={bem.element('currency')}>
                                <div className={bem.element('currency-icon')}>
                                    <span className={`Icon ${CurrencyEnum.getIconClass(CurrencyEnum.WAVES)}`}/>
                                </div>
                                <span className={bem.element('currency-name')}>
                                    {CurrencyEnum.getLabel(CurrencyEnum.WAVES)}
                                </span>
                            </div>
                        </div>
                        <div className={bem.element('text')}>
                            {__('The swap procedure has been started. Please wait for it to finish in ~X blocks before closing this tab.')}
                        </div>
                    </div>
                    <div className={bem.element('footer')}>
                        <div className={bem.element('progress-block')}>
                            <span className={bem.element('progress-status')}>
                                {__('In progress...')}
                            </span>
                            <div className={bem.element('progress-scale')}>
                                <div
                                    style={{width: '33%'}}
                                    className={bem.element('progress-value')}
                                />
                            </div>
                            <div className={bem.element('progress-hints')}>
                                <span>
                                    50 blocks
                                </span>
                                <span>
                                    100 blocks
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
