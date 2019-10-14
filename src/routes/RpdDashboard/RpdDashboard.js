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
        rpdUserBalance: PropTypes.arrayOf(PropTypes.shape({
            neutrino: PropTypes.shape({
                balance: PropTypes.number,
                id: PropTypes.string,
            }),
            bond: PropTypes.shape({
                balance: PropTypes.number,
                id: PropTypes.string,
            })
        })),
        rpdChecks: PropTypes.arrayOf(PropTypes.shape({
            index: PropTypes.number,
            profit: PropTypes.number,
        }))
    };

    constructor() {
        super(...arguments);

        this.state = {
            isLeasingStart: false,
        };
    }

    render() {
        const rpdNeutrinoBalance = _get(this.props, 'rpdUserBalance.neutrino.balance', 0);
        const rpdBondsBalance = _get(this.props, 'rpdUserBalance.bond.balance', 0);

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <div className={bem.element('column-title')}>
                        <span>{__('Wrapped')}</span>
                    </div>
                    <div className={bem.element('balances')}>
                        <div className={bem.element('balance-item')}>
                            <div className={bem.element('balance')}>
                                <div className={bem.element('balance-icon')}>
                                    <span className={`Icon ${CurrencyEnum.getIconClass(this.props.quoteCurrency)}`}/>
                                </div>
                                <span className={bem.element('balance-text', 'leased')}>
                                    {__('{currency} Balance: {value}', {
                                        currency: CurrencyEnum.getLabel(this.props.quoteCurrency),
                                        value: rpdNeutrinoBalance.toFixed(2),
                                    })}
                                    <br/>
                                    {__('Leased')}
                                </span>
                            </div>
                            <div className={bem.element('leasing-action')}>
                                <Button
                                    block
                                    color={this.state.isLeasingStart ? 'secondary' : 'success'}
                                    label={this.state.isLeasingStart ? __('Cancel lease') : __('Start leasing')}
                                    onClick={() => {
                                        this.setState({isLeasingStart: !this.state.isLeasingStart});
                                    }}
                                />
                            </div>
                        </div>
                        <div className={bem.element('balance-item')}>
                            <div className={bem.element('balance')}>
                                <div className={bem.element('balance-icon')}>
                                    <span className={`Icon ${CurrencyEnum.getIconClass(this.props.baseCurrency)}`}/>
                                </div>
                                <span className={bem.element('balance-text')}>
                                    {__('{currency} Balance: {value}', {
                                        currency: CurrencyEnum.getLabel(this.props.baseCurrency),
                                        value: rpdBondsBalance.toFixed(2),
                                    })}
                                </span>
                            </div>
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
                                label={__('Wrap')}
                                onClick={() => {
                                    return dal.lockNeutrino(
                                        this.props.pairName,
                                        _get(this.props, 'quoteCurrency'),
                                        parseInt(_get(this.props, 'formValues.wrap'))
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
                                attribute={'unwrap'}
                            />
                            <Button
                                block
                                label={__('Unwrap')}
                                onClick={() => {
                                    return dal.unlockNeutrino(
                                        this.props.pairName,
                                        _get(this.props, 'quoteCurrency'),
                                        _get(this.props, 'formValues.unwrap') * Math.pow(10, 8)
                                    )
                                        .then(() => this.props.dispatch(change(FORM_ID, 'unwrap', '')))
                                }}
                            />
                        </div>
                    </Form>
                </div>
                <div className={bem.element('column', 'right')}>
                    <div className={bem.element('column-title')}>
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
                                label: __('Payouts'),
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
