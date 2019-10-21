import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getFormValues, change} from 'redux-form';
import _get from 'lodash-es/get';
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
            key: 'rpdBalance',
            collection: CollectionEnum.RPD_BALANCES,
        },
        {
            url: `/api/v1/rpd-user-balance/${props.pairName}/${_get(props, 'user.address')}`,
            key: 'rpdUserBalance',
            collection: CollectionEnum.RPD_USER_BALANCES,
        },
        {
            url: `/api/v1/rpd-checks/${props.pairName}/${_get(props, 'user.address')}`,
            key: 'rpdChecks',
            collection: [CollectionEnum.RPD_NEXT_INDEX, CollectionEnum.RPD_IS_CLAIMED],
        },
    ]
)
export default class RpdDashboard extends React.PureComponent {

    static propTypes = {
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        rpdUserBalance: PropTypes.shape({
            neutrino: PropTypes.shape({
                balance: PropTypes.number,
                id: PropTypes.string,
            }),
            bond: PropTypes.shape({
                balance: PropTypes.number,
                id: PropTypes.string,
            })
        }),
        rpdBalance: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            balance: PropTypes.number,
        })),
        rpdChecks: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            profit: PropTypes.number,
        }))
    };

    constructor() {
        super(...arguments);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.quoteCurrency !== nextProps.quoteCurrency) {
            this.props.dispatch(change(FORM_ID, 'currency', nextProps.quoteCurrency));
        }
    }

    render() {
        const rpdNeutrinoBalance = _get(this.props, 'rpdUserBalance.neutrino.balance', 0);
        // const rpdBondsBalance = _get(this.props, 'rpdUserBalance.bond.balance', 0);
        // const rpdTotalBalance = _sumBy(_get(this.props, 'rpdBalance'), 'balance');

        // const share = rpdTotalBalance
        //     ? (rpdNeutrinoBalance + rpdBondsBalance) / rpdTotalBalance * 100
        //     : 0;

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <div className={bem.element('balances')}>
                        <div className={bem.element('balance-item')}>
                            <div className={bem.element('balance-icon')}>
                                <span className={`Icon ${CurrencyEnum.getIconClass(this.props.quoteCurrency)}`}/>
                            </div>
                            <span>
                                {__('Staked {currency}: {value}', {
                                    currency: CurrencyEnum.getLabel(this.props.quoteCurrency),
                                    value: rpdNeutrinoBalance.toFixed(2),
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
                                label={__('Start staking')}
                                onClick={() => {
                                    return dal.lockNeutrino(
                                        this.props.pairName,
                                        _get(this.props, 'formValues.currency'),
                                        parseInt(_get(this.props, 'formValues.wrap'))
                                    )
                                        .then(() => this.props.dispatch(change(FORM_ID, 'wrap', '')));
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
                                attribute={'unwrap'}
                            />
                            <Button
                                block
                                label={__('Cancel staking')}
                                onClick={() => {
                                    return dal.unlockNeutrino(
                                        this.props.pairName,
                                        _get(this.props, 'formValues.currency'),
                                        parseInt(_get(this.props, 'formValues.currency') === this.props.quoteCurrency
                                            ? _get(this.props, 'formValues.unwrap') * CurrencyEnum.getContractPow(CurrencyEnum.USD_N)
                                            : _get(this.props, 'formValues.unwrap'))
                                    )
                                        .then(() => this.props.dispatch(change(FORM_ID, 'unwrap', '')));
                                }}
                            />
                        </div>
                    </Form>
                </div>
                <div className={bem.element('column', 'right')}>
                    <div className={bem.element('check-title')}>
                        <span>{__('Payouts')}</span>
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
                                label: __('Active'),
                                content: ChecksList,
                                contentProps: {
                                    items: _get(this.props, 'rpdChecks', []).filter(item => !item.isClaimed),
                                }
                            },
                            {
                                id: 'history',
                                label: __('History'),
                                content: ChecksList,
                                contentProps: {
                                    items: _get(this.props, 'rpdChecks', []).filter(item => item.isClaimed),
                                }
                            },
                        ]}
                    />
                </div>
            </div>
        );
    }
}
