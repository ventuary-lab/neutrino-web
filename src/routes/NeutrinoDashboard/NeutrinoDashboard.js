import React from 'react';
import {connect} from 'react-redux';
import {getFormValues, change} from 'redux-form';
import _get from 'lodash-es/get';
import InputField from 'yii-steroids/ui/form/InputField';
import Form from 'yii-steroids/ui/form/Form';
import Button from 'yii-steroids/ui/form/Button';

import {html} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';
import CurrencyEnum from 'enums/CurrencyEnum';
import {getActiveCurrency} from 'reducers/layout';
import Hint from 'shared/Hint';

import './NeutrinoDashboard.scss';

const bem = html.bem('NeutrinoDashboard');
const FORM_ID = 'GenerationForm';


@connect(
    state => ({
        activeCurrency: getActiveCurrency(state),
        formValues: getFormValues(FORM_ID)(state),
    })
)
export default class NeutrinoDashboard extends React.PureComponent {


    constructor() {
        super(...arguments);

        this.state = {
            step: 'generation',
        };

        this._isProgramChange = false;
    }

    componentWillReceiveProps(nextProps) {
        const isChangeWavesAmount = _get(this.props.formValues, 'waves') !== _get(nextProps.formValues, 'waves');
        const isChangeCurrencyAmount = _get(this.props.formValues, 'targetCurrency') !== _get(nextProps.formValues, 'targetCurrency');

        if (isChangeWavesAmount || isChangeCurrencyAmount) {
            this._refreshAmount(nextProps, isChangeWavesAmount)
        }
        else {
            this._isProgramChange = false;
        }
    }

    render() {
        const steps = [
            {
                id: 'generation',
                label: __('Collateralize & generation {currency}', {
                    currency: CurrencyEnum.getLabel(this.props.activeCurrency)
                }),
            },
            {
                id: 'details',
                label: __('Confirm details'),
            }
        ];

        return (
            <div className={bem.block()}>
                {this.renderStepChanger(steps)}
                {this.state.step === 'generation' && this.renderGenerationStep()}
            </div>
        );
    }

    renderGenerationStep() {
        return (
            <>
                <Form
                    className={bem.element('form')}
                    formId={FORM_ID}
                >
                    <div className={bem.element('inputs')}>
                        <div className={bem.element('input-container')}>
                            <div className={bem.element('input-label')}>
                                {__('How much WAVES would you like to collateralize?')}
                            </div>
                            <InputField
                                className={bem.element('input')}
                                attribute={'waves'}
                                inners={{
                                    label: BalanceCurrencyEnum.getLabel(BalanceCurrencyEnum.WAVES),
                                    icon: BalanceCurrencyEnum.getIconClass(BalanceCurrencyEnum.WAVES)
                                }}
                            />
                            <div className={bem.element('input-hint')}>
                                {__('Min. WAVES required: 100 WAVES')}
                                <div className={bem.element('input-hint-icon')}>
                                    <Hint
                                        text={__('Some text')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className={bem.element('exchange-button')}
                            onClick={() => this.props.dispatch(change(
                                FORM_ID,
                                'targetCurrency',
                                _get(this.props.formValues, 'waves')
                            ))}
                        >
                            <span className={'Icon Icon__exchange'}/>
                        </div>

                        <div className={bem.element('input-container')}>
                            <div className={bem.element('input-label')}>
                                {__('How much {currency} would you like to receive?', {
                                    currency: CurrencyEnum.getLabel(this.props.activeCurrency)
                                })}
                            </div>
                            <InputField
                                className={bem.element('input')}
                                attribute={'targetCurrency'}
                                inners={{
                                    label: CurrencyEnum.getLabel(this.props.activeCurrency),
                                    icon: BalanceCurrencyEnum.getIconClass(BalanceCurrencyEnum.USD_N)
                                }}
                            />
                            <div className={bem.element('input-hint')}>
                                {__('Max {currency} available to generate: 10k {currency}', {
                                    currency: CurrencyEnum.getLabel(this.props.activeCurrency)
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={bem.element('info')}>
                        <div className={bem.element('info-column')}>
                            <div className={bem.element('info-row')}>
                                <div className={bem.element('info-string')}>
                                    <div className={bem.element('info-hint')}>
                                        <Hint
                                            text={__('Some text')}
                                        />
                                    </div>
                                    <span>{__('Price feed period')}</span>
                                </div>
                                <span>{__('10 blocks')}</span>
                            </div>
                            <div className={bem.element('info-row')}>
                                <div className={bem.element('info-string')}>
                                    <div className={bem.element('info-hint')}>
                                        <Hint
                                            text={__('Some text')}
                                        />
                                    </div>
                                    <span>{__('Number of oracles')}</span>
                                </div>
                                <span>{__('21')}</span>
                            </div>
                        </div>
                        <div className={bem.element('info-column')}>
                            <div className={bem.element('info-row')}>
                                <div className={bem.element('info-string')}>
                                    <div className={bem.element('info-hint')}>
                                        <Hint
                                            text={__('Some text')}
                                        />
                                    </div>
                                    <span>
                                        {__('Total issued {currency}', {
                                            currency: CurrencyEnum.getLabel(this.props.activeCurrency)
                                        })}
                                    </span>
                                </div>
                                <span>{__('580k')}</span>
                            </div>
                            <div className={bem.element('info-row')}>
                                <div className={bem.element('info-string', 'without-hint')}>
                                    <span>{__('Current WAVES / USD price')}</span>
                                </div>
                                <span>{__('1.3 $')}</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        type={'submit'}
                        className={bem.element('submit-button')}
                        label={__('Generate {currency} Neutrino', {
                            currency: CurrencyEnum.getLabel(this.props.activeCurrency)
                        })}
                    />
                </Form>
            </>

        );
    }


    renderStepChanger(steps) {
        return (
            <div className={bem.element('steps')}>
                {steps.map((item, index) => (
                    <div
                        key={item.id}
                        className={bem.element('step', {
                            active: this.state.step === item.id,
                        })}
                        onClick={() => this.setState({step: item.id})}
                    >
                        <span className={bem.element('step-count')}>
                            {index + 1}
                        </span>
                        <span className={bem.element('step-label')}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    _refreshAmount(props, isRefreshToAmount = false) {
        props = props || this.props;

        if (this._isProgramChange) {
            this._isProgramChange = false;
            return;
        }
        this._isProgramChange = true;

        const rate = 2; //TODO

        let amount = this._parseAmount(isRefreshToAmount
            ? _get(props.formValues, 'waves') * rate
            : _get(props.formValues, 'targetCurrency') / rate);


        this.props.dispatch(change(
            FORM_ID,
            isRefreshToAmount ? 'targetCurrency' : 'waves',
            this._toFixedSpecial(amount, 2)
        ));
    }

    _parseAmount(amount) {
        if (typeof amount === 'undefined') {
            return 0;
        }
        let result = typeof amount === 'string' ? amount.replace(/,/, '.') : amount;
        return !isNaN(parseFloat(result)) && isFinite(result) ? result : 0;
    }

    _toFixedSpecial = function (num, n) {
        const str = num.toFixed(n);
        if (str.indexOf('e+') < 0) {
            return str;
        }

        // if number is in scientific notation, pick (b)ase and (p)ower
        return str.replace('.', '').split('e+').reduce(function (p, b) {
            return p + new Array(b - p.length + 2).join(0);
        }) + '.' + new Array(n + 1).join(0);
    };
}
