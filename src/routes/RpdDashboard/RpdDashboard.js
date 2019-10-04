import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getFormValues, change} from 'redux-form';
import _get from 'lodash-es/get';
import _sumBy from 'lodash-es/sumBy';
import DropDownField from 'yii-steroids/ui/form/DropDownField';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';
import Nav from 'yii-steroids/ui/nav/Nav';
import {getUser} from 'yii-steroids/reducers/auth';

import {html, dal} from 'components';
import {getBaseCurrency, getPairName, getQuoteCurrency} from 'reducers/currency';
import CurrencyEnum from 'enums/CurrencyEnum';
import CollectionEnum from 'enums/CollectionEnum';
import Hint from 'shared/Hint';
import ChecksList from './views/ChecksList';

import './RpdDashboard.scss';

const bem = html.bem('RpdDashboard');
const FORM_ID = 'RpdDashboard';

@connect(
    state => ({
        quoteCurrency: getQuoteCurrency(state),
        baseCurrency: getBaseCurrency(state),
        pairName: getPairName(state),
        formValues: getFormValues(FORM_ID)(state),
        user: getUser(state),
    })
)
@dal.hoc(
    props => [
        {
            url: `/api/v1/rpd-balance/${props.pairName}`,
            key: 'rpdBalances',
            collection: CollectionEnum.RPD_NEUTRINO_BALANCES,
        },
        {
            url: `/api/v1/rpd-neutrino-balance/${props.pairName}/${_get(props, 'user.address')}`,
            key: 'rpdNeutrinoBalances',
            collection: CollectionEnum.RPD_NEUTRINO_BALANCES,
        },
        {
            url: `/api/v1/rpd-bonds-balance/${props.pairName}/${_get(props, 'user.address')}`,
            key: 'rpdBondsBalances',
            collection: CollectionEnum.RPD_BONDS_BALANCES,
        },
    ]
)
export default class RpdDashboard extends React.PureComponent {

    static propTypes = {
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        rpdNeutrinoBalances: PropTypes.shape({
            balance: PropTypes.string,
        }),
        rpdBondsBalances: PropTypes.shape({
            balance: PropTypes.string,
        }),
        rpdBalances: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            balance: PropTypes.number,
        }))
    };

    constructor() {
        super(...arguments);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.quoteCurrency !== nextProps.quoteCurrency) {
            this.props.dispatch(change(FORM_ID, 'currency', nextProps.quoteCurrency))
        }
    }

    render() {
        const checksItems = [
            {
                id: '001',
                time: '30.09.19 | 9:23 AM',
                profit: 1000,
            },
            {
                id: '001',
                time: '30.09.19 | 9:23 AM',
                profit: 1000,
            }
        ];

        const rpdNeutrinoBalance = _get(this.props, 'rpdNeutrinoBalances.balance', 0);
        const rpdBondsBalance = _get(this.props, 'rpdBondsBalances.balance', 0);
        const rpdTotalBalance = _sumBy(_get(this.props, 'rpdBalances'), 'balance');

        const share = rpdTotalBalance
            ? (rpdNeutrinoBalance + rpdBondsBalance) / rpdTotalBalance * 100
            : 0;

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <div className={bem.element('balances')}>
                        <div className={bem.element('balance-item')}>
                            <div className={bem.element('balance-icon')}>
                                <span className={`Icon ${CurrencyEnum.getIconClass(this.props.quoteCurrency)}`}/>
                            </div>
                            <span>
                                {__('{currency} Balance: {value}', {
                                    currency: CurrencyEnum.getLabel(this.props.quoteCurrency),
                                    value: rpdNeutrinoBalance.toFixed(2),
                                })}
                            </span>
                        </div>
                        <div className={bem.element('balance-item')}>
                            <div className={bem.element('balance-icon')}>
                                <span className={`Icon ${CurrencyEnum.getIconClass(this.props.baseCurrency)}`}/>
                            </div>
                            <span>
                                {__('{currency} Balance: {value} | Share: {share}%', {
                                    currency: CurrencyEnum.getLabel(this.props.baseCurrency),
                                    value: rpdBondsBalance.toFixed(2),
                                    share: share.toFixed(2),
                                })}
                            </span>
                        </div>
                    </div>
                    <Form
                        formId={FORM_ID}
                        initialValues={{
                            currency: this.props.quoteCurrency,
                        }}
                    >
                        <DropDownField
                            layoutClassName={bem.element('currency-toggler')}
                            attribute={'currency'}
                            excludeSelectedFromItems
                            items={[
                                {
                                    id: this.props.quoteCurrency,
                                    icon: CurrencyEnum.getIconClass(this.props.quoteCurrency),
                                    label: CurrencyEnum.getLabel(this.props.quoteCurrency),
                                },
                                {
                                    id: this.props.baseCurrency,
                                    icon: CurrencyEnum.getIconClass(this.props.baseCurrency),
                                    label: CurrencyEnum.getLabel(this.props.baseCurrency),
                                }]
                            }
                        />
                        <div className={bem.element('input-block')}>
                            <NumberField
                                min={0}
                                step='any'
                                inputProps={{
                                    autoComplete: 'off'
                                }}
                                label={__('Select amount')}
                                layoutClassName={bem.element('input')}
                                attribute={'wrap'}
                            />
                            <Button
                                block
                                label={__('Wrap')}
                                onClick={() => {
                                    return dal.lockNeutrino(
                                        this.props.pairName,
                                        _get(this.props, 'formValues.currency'),
                                        _get(this.props, 'formValues.wrap')
                                    )
                                        .then(() => this.props.dispatch(change(FORM_ID, 'wrap', '')))
                                }}
                            />
                        </div>
                        <div className={bem.element('input-block')}>
                            <NumberField
                                min={0}
                                step='any'
                                inputProps={{
                                    autoComplete: 'off'
                                }}
                                label={__('Select amount')}
                                layoutClassName={bem.element('input')}
                                attribute={'unlock'}
                            />
                            <Button
                                block
                                label={__('Unlock')}
                                onClick={() => {
                                    return dal.unlockNeutrino(
                                        this.props.pairName,
                                        _get(this.props, 'formValues.currency'),
                                        parseInt(_get(this.props, 'formValues.unlock'))
                                    )
                                        .then(() => this.props.dispatch(change(FORM_ID, 'unlock', '')))
                                }}
                            />
                        </div>
                    </Form>
                </div>
                <div className={bem.element('column', 'right')}>
                    <div className={bem.element('check-title')}>
                        <span>{__('RPD Check')}</span>
                        <div className={bem.element('check-hint')}>
                            <Hint
                                text={__('A check appears every 7 days')}
                            />
                        </div>
                    </div>
                    <Nav
                        isFullWidthTabs
                        layout={'tabs'}
                        items={[
                            {
                                id: 'checks',
                                label: __('Checks'),
                                content: ChecksList,
                                contentProps: {
                                    items: checksItems
                                }
                            },
                            {
                                id: 'history',
                                label: __('History'),
                                content: ChecksList,
                                contentProps: {
                                    items: checksItems,
                                    isHistory: true,
                                }
                            },
                        ]}
                    />
                </div>
            </div>
        );
    }
}
