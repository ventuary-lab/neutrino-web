import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, change } from 'redux-form';
import _get from 'lodash-es/get';
import _ from 'lodash';
import _round from 'lodash-es/round';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';
import { openModal } from 'yii-steroids/actions/modal';
import CurrencyEnum from 'enums/CurrencyEnum';
import MessageModal from 'modals/MessageModal';
import { getControlPrice } from 'reducers/contract/selectors';
import { computeROI } from 'reducers/contract/helpers';

import { dal, html, store } from 'components';

import './BuyBoundsForm.scss';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';

const bem = html.bem('BuyBoundsForm');
const FORM_ID = 'BuyBoundsForm';

@connect(state => ({
    pairName: getPairName(state),
    baseCurrency: getBaseCurrency(state),
    quoteCurrency: getQuoteCurrency(state),
    formValues: getFormValues(FORM_ID)(state),
    controlPrice: getControlPrice(state),
}))
export default class BuyBoundsForm extends React.PureComponent {
    static propTypes = {
        pairName: PropTypes.string,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        neutrinoConfig: PropTypes.shape({
            price: PropTypes.number,
        }),
    };

    constructor() {
        super(...arguments);

        this._onSubmit = this._onSubmit.bind(this);
        this.validateDecimal = this.validateDecimal.bind(this);
        this._isProgramChange = false;

        this.state = {
            isButtonDisabled: false,
            roi: 30
        };

        this.isBoundsFieldFocused = false;
    }

    computeHint() {
        // _get(this.props, 'formValues.bounds')
        // ? `${_round(
        //     _get(this.props, 'formValues.neutrino') * (controlPrice / 100),
        //     2
        // )} USDN`
        // : // ? `${_round(_get(this.props, 'formValues.bounds') / _get(this.props, 'neutrinoConfig.price'), 2)} WAVES`
        // // ? `${_round(_get(this.props, 'formValues.bounds') / 2, 2)} WAVES`
        // ' '
    }

    updatePriceField() {
        let { controlPrice } = this.props;
        let bondsAmount = _get(this.props.formValues, 'bounds');
        let wavesRawAmount = _get(this.props.formValues, 'waves');
        let priceRaw = _get(this.props.formValues, 'price');

        if (!bondsAmount || !controlPrice || !wavesRawAmount) {
            return;
        }

        const decimalControlPrice = _round(controlPrice / 100, 2);

        bondsAmount = Number(bondsAmount);
        wavesRawAmount = Number(wavesRawAmount) * decimalControlPrice;

        const roi = _round(computeROI(bondsAmount, wavesRawAmount) * 100, 2);

        if (priceRaw !== decimalControlPrice) {
            store.dispatch(change(FORM_ID, 'price', decimalControlPrice));
        }

        console.log({ roi, bondsAmount, wavesRawAmount,decimalControlPrice, controlPrice });

        if (roi !== Infinity && roi !== -Infinity) {
            this.setState({ roi });
        }
    }

    componentDidUpdate(prevProps) {
        this.updatePriceField();

        this.updateInputFields(prevProps);
        this.initFormValues(prevProps);
    }

    updateInputFields(prevProps) {
        const { isBoundsFieldFocused } = this;
        const { controlPrice } = this.props;

        let bondsAmount = _get(this.props.formValues, 'bounds');
        let wavesRawAmount = _get(this.props.formValues, 'waves');

        const decimalControlPrice = controlPrice / 100;

        if (isBoundsFieldFocused && bondsAmount !== _get(prevProps.formValues, 'bounds')) {
            store.dispatch(change(FORM_ID, 'waves',
                _round(bondsAmount / decimalControlPrice, 2)
            ));
            this.updatePriceField();
        } else if (!isBoundsFieldFocused && wavesRawAmount && wavesRawAmount !== _get(prevProps.formValues, 'waves')) {
            store.dispatch(change(FORM_ID, 'bounds', 
                _round(wavesRawAmount * decimalControlPrice, 2)
            ));
            this.updatePriceField();
        }
    }

    validateDecimal () {
        // return /^[0-9]+([,.][0-9]+)?$/g.test(value);
    }

    initFormValues(prevProps) {
        const { controlPrice } = this.props;
        let bondsAmount = _get(this.props.formValues, 'bounds');
        let wavesRawAmount = _get(this.props.formValues, 'waves');

        // /^[0-9]+([,.][0-9]+)?$/g;

        if (!bondsAmount && !wavesRawAmount && controlPrice) {
            store.dispatch(change(FORM_ID, 'price', _round(controlPrice / 100, 2)));
            store.dispatch(change(FORM_ID, 'waves', 10));
            store.dispatch(change(FORM_ID, 'bounds', _round(10 - (controlPrice / 100), 2)));
        }
    }

    render() {
        const { isButtonDisabled, roi } = this.state;

        return (
            <div className={bem.block()}>
                <Form
                    className={bem.element('form')}
                    formId={FORM_ID}
                    initialValues={{
                    }}
                    onSubmit={this._onSubmit}
                    validators={[
                        [['price', 'bounds'], 'required'],
                    ]}
                >
                    <NumberField
                        min={0}
                        step="any"
                        inputProps={{
                            autoComplete: 'off',
                        }}
                        label={__('Price')}
                        layoutClassName={bem.element('input')}
                        attribute={'price'}
                        inners={{
                            label: '',
                        }}
                        disabled
                    />
                    <span className={bem.element('roi')}>
                        {roi}%
                    </span>
                    <NumberField
                        min={1}
                        step="any"
                        required
                        inputProps={{
                            autoComplete: 'off',
                            onFocus: () => (this.isBoundsFieldFocused = true),
                        }}
                        label={__('Receive')}
                        layoutClassName={bem.element('input', 'with-hint')}
                        attribute={'bounds'}
                        inners={{
                            label: CurrencyEnum.getLabel(this.props.baseCurrency),
                            icon: CurrencyEnum.getIconClass(this.props.baseCurrency),
                        }}
                        hint={this.computeHint()}
                    />
                    <NumberField
                        min={1}
                        required
                        step="any"
                        inputProps={{
                            autoComplete: 'off',
                            onFocus: () => (this.isBoundsFieldFocused = false),
                        }}
                        label={__('Send')}
                        layoutClassName={bem.element('input')}
                        attribute={'waves'}
                        inners={{
                            label: CurrencyEnum.getLabel(CurrencyEnum.WAVES),
                            icon: CurrencyEnum.getIconClass(CurrencyEnum.WAVES),
                        }}
                    />
                    <Button
                        type={'submit'}
                        block
                        disabled={isButtonDisabled}
                        className={bem.element('submit-button')}
                        label={__('Buy {bounds}', {
                            bounds: CurrencyEnum.getLabel(this.props.baseCurrency),
                        })}
                    />
                </Form>
            </div>
        );
    }

    _onSubmit(values) {
        // const wavesToUsdPrice = _get(this.props, 'neutrinoConfig.price');
        // const wavesToUsdPrice = this.props.controlPrice;

        return dal
            .setBondOrder(
                this.props.pairName,
                values.price,
                this.props.quoteCurrency,
                values.bounds
            )
            .then(() => {
                console.log('---setBondOrder success'); // eslint-disable-line no-console
            })
            .catch(err => {
                console.log('---setBondOrder error', err); // eslint-disable-line no-console

                //User denied message
                if (err && err.code === '10') {
                    store.dispatch(
                        openModal(MessageModal, {
                            text: __('You have canceled the order'),
                        })
                    );
                } else if (err) {
                    store.dispatch(
                        openModal(MessageModal, {
                            text: __('The order was canceled.\n Error: {err}', {
                                err: err.message,
                            }),
                        })
                    );
                }
            });
    }
}
