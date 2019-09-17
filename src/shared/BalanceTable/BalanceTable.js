import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser} from 'yii-steroids/reducers/auth';

import {html, dal} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

import './BalanceTable.scss';
import CurrencyEnum from 'enums/CurrencyEnum';
import {getLastWavesExchange} from 'reducers/currency';

const bem = html.bem('BalanceTable');

@connect(
    state => ({
        user: getUser(state),
        usdToWavesExchange: getLastWavesExchange(state, CurrencyEnum.USD),
    })
)
export default class BalanceTable extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object,
        usdToWavesExchange: PropTypes.number,
    };

    render() {
        if (!this.props.user || !this.props.user.balances || !this.props.usdToWavesExchange) {
            return null;
        }

        return (
            <table className={bem.block()}>
                <thead>
                    <tr>
                        <th>
                            {__('ASSET')}
                        </th>
                        <th>
                            {__('BALANCE')}
                        </th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(this.props.user.balances).map(currency => (
                        <tr key={currency}>
                            <td>
                                <div className={bem.element('labels-column')}>
                                    <span
                                        className={bem(
                                            bem.element('icon'),
                                            `Icon ${BalanceCurrencyEnum.getIconClass(currency)}`
                                        )}
                                    />
                                    <div className={bem.element('labels')}>
                                        <span className={bem.element('label')}>
                                            {BalanceCurrencyEnum.getLabel(currency)}
                                        </span>
                                        <span className={bem.element('label', 'tiny')}>
                                            {__('USD')}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={bem.element('values-column')}>
                                    <span className={bem.element('label')}>
                                        {this.props.user.balances[currency]}
                                    </span>
                                    <span className={bem.element('label', 'tiny')}>
                                        $ {currency === BalanceCurrencyEnum.WAVES
                                            ? this.props.user.balances[currency] * this.props.usdToWavesExchange
                                            : this.props.user.balances[currency]
                                        }
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className={bem.element('controls-column')}>
                                    {['Icon__double-arrow-up', 'Icon__double-arrow-down', 'Icon__trade']
                                        .map((item, index) => (
                                            <a
                                                key={index}
                                                href='https://dex.wavesplatform.com/'
                                                target={'_blank'}
                                                className={bem.element('control')}
                                            >
                                                <span className={item}/>
                                            </a>
                                        ))
                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
