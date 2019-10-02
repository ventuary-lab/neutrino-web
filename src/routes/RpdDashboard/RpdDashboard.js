import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getFormValues, change} from 'redux-form';
import DropDownField from 'yii-steroids/ui/form/DropDownField';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';
import Nav from 'yii-steroids/ui/nav/Nav';

import {html} from 'components';
import {getBaseCurrency, getQuoteCurrency} from 'reducers/currency';
import CurrencyEnum from 'enums/CurrencyEnum';
import Hint from 'shared/Hint';
import ChecksList from './views/ChecksList';

import './RpdDashboard.scss';

const bem = html.bem('RpdDashboard');
const FORM_ID = 'RpdDashboard';

@connect(
    state => ({
        quoteCurrency: getQuoteCurrency(state),
        baseCurrency: getBaseCurrency(state),
        formValues: getFormValues(FORM_ID)(state),
    })
)
export default class RpdDashboard extends React.PureComponent {

    static propTypes = {
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,

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
                                    value: '10000' //TODO
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
                                    value: '10000', //TODO
                                    share: '12' //TODO
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
                                type={'submit'}
                                block
                                label={__('Wrap')}
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
                                type={'submit'}
                                block
                                label={__('Unlock')}
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
                            },
                            {
                                id: 'history',
                                label: __('History'),
                                content: '',
                            },
                        ]}
                    />
                </div>
            </div>
        );
    }
}
