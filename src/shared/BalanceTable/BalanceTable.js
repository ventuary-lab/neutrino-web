import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser} from 'yii-steroids/reducers/auth';
import _round from 'lodash/round';

import {html, dal} from 'components';

import './BalanceTable.scss';
import CurrencyEnum from 'enums/CurrencyEnum';
import {getLastWavesExchange, getQuoteCurrency, getBaseCurrency, getPairName} from 'reducers/currency';
import CollectionEnum from '../../enums/CollectionEnum';

const bem = html.bem('BalanceTable');

@connect(
    state => ({
        user: getUser(state),
        pairName: getPairName(state),
        quoteCurrency: getQuoteCurrency(state),
        baseCurrency: getBaseCurrency(state),
    })
)
@dal.hoc(
    props => [
        {
            url: `/api/v1/neutrino-balances/${props.pairName}`,
            key: 'neutrinoBalances',
            collection: CollectionEnum.NEUTRINO_BALANCES,
        },
    ]
)
export default class BalanceTable extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object,
        quoteCurrency: PropTypes.string,
        baseCurrency: PropTypes.string,
        neutrinoBalances: PropTypes.shape({
            totalIssued: PropTypes.number,
            totalUsed: PropTypes.number,
            contractBalance: PropTypes.number,
            price: PropTypes.number,
        }),
    };

    render() {
        if (!this.props.user || !this.props.user.balances || !this.props.neutrinoBalances) {
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
                    {[
                        CurrencyEnum.WAVES,
                        this.props.quoteCurrency,
                        this.props.baseCurrency
                    ]
                        .map(currency => (
                            <tr key={currency}>
                                <td>
                                    <div className={bem.element('labels-column')}>
                                        <span
                                            className={bem(
                                                bem.element('icon'),
                                                `Icon ${CurrencyEnum.getIconClass(currency)}`
                                            )}
                                        />
                                        <div className={bem.element('labels')}>
                                            <span className={bem.element('label')}>
                                                {CurrencyEnum.getLabel(currency)}
                                            </span>
                                            <span className={bem.element('label', 'tiny')}>
                                                {currency === CurrencyEnum.WAVES
                                                    ? __('USD')
                                                    : CurrencyEnum.getSourceCurrency(currency).toUpperCase()
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
                                                ? _round(this.props.user.balances[currency] * this.props.neutrinoBalances.price, 2)
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
