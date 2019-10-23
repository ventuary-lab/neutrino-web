import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser} from 'yii-steroids/reducers/auth';
import _round from 'lodash/round';

import {html, dal} from 'components';
import CurrencyEnum from 'enums/CurrencyEnum';
import CollectionEnum from 'enums/CollectionEnum';
import {
    getQuoteCurrency,
    getBaseCurrency,
    getPairName,
    getSourceCurrency
} from 'reducers/currency';

import './BalanceTable.scss';

const bem = html.bem('BalanceTable');

@connect(
    state => ({
        user: getUser(state),
        pairName: getPairName(state),
        quoteCurrency: getQuoteCurrency(state),
        baseCurrency: getBaseCurrency(state),
        sourceCurrency: getSourceCurrency(state),
    })
)
@dal.hoc(
    props => [
        {
            url: `/api/v1/neutrino-config/${props.pairName}`,
            key: 'neutrinoConfig',
            collection: CollectionEnum.CONTROL_CONFIG,
        },
    ]
)
export default class BalanceTable extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object,
        quoteCurrency: PropTypes.string,
        baseCurrency: PropTypes.string,
        sourceCurrency: PropTypes.string,
        neutrinoConfig: PropTypes.shape({
            price: PropTypes.number,
        }),
    };

    render() {
        if (!this.props.user || !this.props.user.balances || !this.props.neutrinoConfig) {
            return null;
        }
        const assetLinks = [
            '6fnDrGcntTDP3ftibavq4EjKuqYoaDkJn8TPKGZgBgy8',
            '6fnDrGcntTDP3ftibavq4EjKuqYoaDkJn8TPKGZgBgy8',
            '2c5Qbbx9satfqYvuqtAfNXAg7Q8FVjmvcpKwcafPbsgP',
        ];

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
                        .map((currency) => (
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
                                                {this.props.sourceCurrency.toUpperCase()}
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
                                            {CurrencyEnum.getSign(this.props.sourceCurrency)}
                                            &nbsp;
                                            {currency === CurrencyEnum.WAVES
                                                ? _round(this.props.user.balances[currency] * this.props.neutrinoConfig.price, 2)
                                                : this.props.user.balances[currency]
                                            }
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    {this.renderDexButtons(currency)}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    renderDexButtons(currency) {

        let assetId2 = dal.assets[currency] || 'WAVES';
        let assetId1 = 'WAVES';

        if (currency === CurrencyEnum.WAVES) {
            assetId2 = dal.assets[this.props.quoteCurrency]
        }

        return (
            <div className={bem.element('controls-column')}>
                {['Icon__double-arrow-up', 'Icon__double-arrow-down', 'Icon__trade']
                    .map((item, index) => (
                        <a
                            key={index}
                            href={`https://dex.wavesplatform.com/dex-demo?assetId2=${assetId2}&assetId1=${assetId1}`}
                            target={'_blank'}
                            className={bem.element('control')}
                        >
                            <span className={item}/>
                        </a>
                    ))
                }
            </div>
        );
    }
}
