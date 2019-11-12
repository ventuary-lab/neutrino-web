import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from 'yii-steroids/reducers/auth';
import _round from 'lodash/round';

import { html, dal } from 'components';
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

@connect((state) => ({
    user: getUser(state),
    pairName: getPairName(state),
    quoteCurrency: getQuoteCurrency(state),
    baseCurrency: getBaseCurrency(state),
    sourceCurrency: getSourceCurrency(state)
}))
@dal.hoc((props) => [
    {
        url: `/api/v1/neutrino-config/${props.pairName}`,
        key: 'neutrinoConfig',
        collection: CollectionEnum.CONTROL_CONFIG
    }
])
export default class BalanceTable extends React.PureComponent {
    static propTypes = {
        user: PropTypes.object,
        quoteCurrency: PropTypes.string,
        baseCurrency: PropTypes.string,
        sourceCurrency: PropTypes.string,
        neutrinoConfig: PropTypes.shape({
            price: PropTypes.number
        })
    };

    constructor(props) {
        super(props);

        this.getTableBody = this.getTableBody.bind(this);
    }

    getTableBody() {
        const rows = [
            CurrencyEnum.WAVES,
            this.props.quoteCurrency,
            this.props.baseCurrency
        ];

        const balanceSign = CurrencyEnum.getSign(this.props.sourceCurrency);
        const getBottomBalance = (currency) =>
            currency === CurrencyEnum.WAVES
                ? _round(
                    this.props.user.balances[currency] *
                        this.props.neutrinoConfig.price,
                    2
                )
                : this.props.user.balances[currency];

        return rows.map((currency) => (
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
                            {balanceSign}
                            &nbsp;
                            {getBottomBalance(currency)}
                        </span>
                    </div>
                </td>
                <td>{this.renderDexButtons(currency)}</td>
            </tr>
        ));
    }

    render() {
        const { user, neutrinoConfig } = this.props;

        if (!user || !user.balances || !neutrinoConfig) {
            return null;
        }

        return (
            <table className={bem.block()}>
                <thead>
                    <tr>
                        <th>{__('ASSET')}</th>
                        <th>{__('BALANCE')}</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{this.getTableBody()}</tbody>
            </table>
        );
    }

    renderDexButtons(currency) {
        let assetId2 = dal.assets[currency];
        let assetId1 = 'WAVES';

        if (currency === CurrencyEnum.WAVES) {
            assetId1 = dal.assets[this.props.quoteCurrency];
            assetId2 = 'WAVES';
        }

        return (
            <div className={bem.element('controls-column')}>
                {[
                    'Icon__double-arrow-up',
                    'Icon__double-arrow-down',
                    'Icon__trade'
                ].map((item, index) => (
                    <a
                        key={index}
                        href={`https://dex.wavesplatform.com/dex-demo?assetId2=${assetId2}&assetId1=${assetId1}`}
                        target={'_blank'}
                        className={bem.element('control')}
                    >
                        <span className={item} />
                    </a>
                ))}
            </div>
        );
    }
}
