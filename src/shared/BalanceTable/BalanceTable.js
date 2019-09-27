import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser} from 'yii-steroids/reducers/auth';
import _round from 'lodash/round';

import {html, dal} from 'components';

import './BalanceTable.scss';
import CurrencyEnum from 'enums/CurrencyEnum';
import {getLastWavesExchange, getQuoteCurrency, getBaseCurrency} from 'reducers/currency';

const bem = html.bem('BalanceTable');

@connect(
    state => ({
        user: getUser(state),
        usdToWavesExchange: getLastWavesExchange(state, CurrencyEnum.USD),
        quoteCurrency: getQuoteCurrency(state),
        baseCurrency: getBaseCurrency(state),
    })
)
export default class BalanceTable extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object,
        usdToWavesExchange: PropTypes.number,
        quoteCurrency: PropTypes.string,
        baseCurrency: PropTypes.string,
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
                    {Object.keys(this.props.user.balances)
                        //waves + current _n + current _nb
                        .filter(currency => {
                            if (currency !== CurrencyEnum.WAVES) {
                                return [this.props.quoteCurrency, this.props.baseCurrency].includes(currency);
                            }

                            return true;
                        })
                        .map(currency => (
                            <tr key={currency}>
                                <td>
                                    <div className={bem.element('labels-column')}>
                                        <span
                                            className={bem(
                                                bem.element('icon'),
                                                `Icon ${CurrencyEnum.getBalanceIconClass(currency)}`
                                            )}
                                        />
                                        <div className={bem.element('labels')}>
                                            <span className={bem.element('label')}>
                                                {CurrencyEnum.getLabel(currency)}
                                            </span>
                                            <span className={bem.element('label', 'tiny')}>
                                                {currency === CurrencyEnum.WAVES
                                                    ? __('USD')
                                                    : CurrencyEnum.getGeneralCurrency(currency).toUpperCase()
                                                }
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
                                            $ {currency === CurrencyEnum.WAVES
                                                ? _round(this.props.user.balances[currency] * this.props.usdToWavesExchange, 2)
                                                : this.props.user.balances[currency]
                                            }
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    {this.renderDexButtons(currency)}
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    renderDexButtons(currency) {
        if (dal.assets[currency]) {
            currency = dal.assets[currency];
        }

        const assetUsdId = 'Ft8X1v1LTa1ABafufpaCWyVj8KkaxUWE6xBhW6sNFJck'; // TODO
        return (
            <div className={bem.element('controls-column')}>
                {['Icon__double-arrow-up', 'Icon__double-arrow-down', 'Icon__trade']
                    .map((item, index) => (
                        <a
                            key={index}
                            href={`https://dex.wavesplatform.com/dex-demo?assetId2=${currency}&assetId1=${assetUsdId}`}
                            target={'_blank'}
                            className={bem.element('control')}
                        >
                            <span className={item}/>
                        </a>
                    ))
                }
            </div>
        )
    }
}
