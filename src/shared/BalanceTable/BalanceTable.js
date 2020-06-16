import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getUser } from 'yii-steroids/reducers/auth';
import _round from 'lodash/round';
import { openModal } from 'yii-steroids/actions/modal';
import { Translation } from 'react-i18next';

import { NEUTRINO_DEC } from 'reducers/contract/helpers';
import { html, dal, store } from 'components';
import CurrencyEnum from 'enums/CurrencyEnum';
// import CollectionEnum from 'enums/CollectionEnum';
import {
    getQuoteCurrency,
    getBaseCurrency,
    getPairName,
    getSourceCurrency,
} from 'reducers/currency';
import TransferModal from 'modals/TransferModal';
import CreateInvoiceModal from 'modals/CreateInvoiceModal';
import { getControlPrice } from 'reducers/contract/selectors';

import './BalanceTable.scss';

const bem = html.bem('BalanceTable');

@connect((state) => ({
    user: getUser(state),
    pairName: getPairName(state),
    quoteCurrency: getQuoteCurrency(state),
    baseCurrency: getBaseCurrency(state),
    sourceCurrency: getSourceCurrency(state),
    controlPrice: getControlPrice(state),
}))
// @dal.hoc(props => [
//     {
//         url: `/api/v1/neutrino-config/${props.pairName}`,
//         key: 'neutrinoConfig',
//         collection: CollectionEnum.CONTROL_CONFIG,
//     },
// ])
export default class BalanceTable extends React.PureComponent {
    static propTypes = {
        user: PropTypes.object,
        quoteCurrency: PropTypes.string,
        baseCurrency: PropTypes.string,
        sourceCurrency: PropTypes.string,
        // neutrinoConfig: PropTypes.shape({
        //     price: PropTypes.number,
        // }),
    };

    constructor(props) {
        super(props);

        this.getTableBody = this.getTableBody.bind(this);
        this.mapCurrency = this.mapCurrency.bind(this);
    }

    mapCurrency(currency, balanceSign, getBottomBalance) {
        return (
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
        );
    }

    getTableBody() {
        const rows = [CurrencyEnum.WAVES, this.props.quoteCurrency, this.props.baseCurrency];
        const controlPrice = _.get(this.props, 'controlPrice', 0);
        const neutrinoPrice = _.round(controlPrice / NEUTRINO_DEC, 2);

        const balanceSign = CurrencyEnum.getSign(this.props.sourceCurrency);
        const getBottomBalance = (currency) =>
            currency === CurrencyEnum.WAVES
                ? _round(this.props.user.balances[currency] * neutrinoPrice, 2)
                : this.props.user.balances[currency];

        return rows.map((currency) => this.mapCurrency(currency, balanceSign, getBottomBalance));
    }

    render() {
        const { user } = this.props;

        if (!user || !user.balances) {
            return null;
        }

        return (
            <Translation>
                {(t) => (
                    <table className={bem.block()}>
                        <thead>
                            <tr>
                                <th>{t('common.asset.uppercased')}</th>
                                <th>{t('common.balance.uppercased')}</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>{this.getTableBody()}</tbody>
                    </table>
                )}
            </Translation>
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
                    { id: 'send', icon: 'Icon__double-arrow-up' },
                    { id: 'receive', icon: 'Icon__double-arrow-down' },
                    { id: 'trade', icon: 'Icon__trade' },
                ].map((item) => (
                    <>
                        {(item.id !== 'trade' && (
                            <button
                                key={item.id}
                                type={'button'}
                                onClick={() =>
                                    store.dispatch(
                                        openModal(
                                            item.id === 'send' ? TransferModal : CreateInvoiceModal,
                                            {
                                                currency: currency,
                                            }
                                        )
                                    )
                                }
                                className={bem.element('control')}
                            >
                                <span className={item.icon} />
                            </button>
                        )) || (
                            <a
                                key={item.id}
                                href={`https://waves.exchange/dex?assetId2=${assetId2}&assetId1=${assetId1}`}
                                target={'_blank'}
                                className={bem.element('control')}
                            >
                                <span className={item.icon} />
                            </a>
                        )}
                    </>
                ))}
            </div>
        );
    }
}
