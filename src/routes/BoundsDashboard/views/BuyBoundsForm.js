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
// import { getControlPrice } from 'reducers/contract/selectors';
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
    // controlPrice: getControlPrice(state),
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
        this.computeHint = this.computeHint.bind(this);
        this._isProgramChange = false;

        this.state = {
            isButtonDisabled: false,
            dependPrice: undefined,
            roi: 30
        };

        this.isBoundsFieldFocused = false;
    }

    computeHint() {
        let bondsAmount = _get(this.props.formValues, 'bounds');

        if (bondsAmount) {
            return `${bondsAmount} ${CurrencyEnum.USD_N.toUpperCase()}`;
        }
    }

    updatePriceField() {
        let { controlPrice } = this.props;
        let bondsAmount = _get(this.props.formValues, 'bounds');
        let wavesRawAmount = _get(this.props.formValues, 'waves');

        if (!bondsAmount || !wavesRawAmount || !controlPrice) {
            this.setState({ roi: null, isButtonDisabled: true });
            return;
        }

        bondsAmount = Number(bondsAmount);
        wavesRawAmount = Number(wavesRawAmount);

        const dependPrice = _round(wavesRawAmount / bondsAmount, 2);
        const roi = _round(computeROI(bondsAmount, wavesRawAmount, controlPrice), 2);

        this.setState({
            dependPrice,
            isButtonDisabled: wavesRawAmount < 10 || roi < 0 || roi > 100,
            roi: (roi === Infinity || roi === -Infinity) ? null : roi
        });
    }

    componentDidUpdate() {
        this.updatePriceField();

        // this.updateInputFields(prevProps);
        // this.initFormValues(prevProps);
    }

    getROIStyle () {
        const { roi } = this.state;
        return { display: roi === null && 'none' || '' };
    }

    getPriceValue () {
        const { roi, dependPrice } = this.state;

        return roi === null ? '' : dependPrice;
    }

    render() {
        const { isButtonDisabled, roi } = this.state;

        return (
            <div className={bem.block()}>
                <Form
                    className={bem.element('form')}
                    formId={FORM_ID}
                    initialValues={{
                        waves: 10,
                        bounds: 10
                    }}
                    onSubmit={this._onSubmit}
                    validators={[
                        [['bounds'], 'required'],
                    ]}
                >
                    <NumberField
                        inputProps={{
                            autoComplete: 'off',
                            value: this.getPriceValue(),
                            type: 'text'
                        }}
                        label={__('Price')}
                        layoutClassName={bem.element('input')}
                        attribute={'price'}
                        inners={{
                            label: '',
                        }}
                        disabled
                    />
                    <span className={bem.element('roi')} style={this.getROIStyle()}>
                        <span>Exp. ROI</span>
                        <span>{roi}%</span>
                    </span>
                    <NumberField
                        required
                        inputProps={{
                            autoComplete: 'off',
                            onFocus: () => (this.isBoundsFieldFocused = true),
                            type: 'text'
                        }}
                        label={__('Receive')}
                        layoutClassName={bem.element('input')}
                        attribute={'bounds'}
                        inners={{
                            label: CurrencyEnum.getLabel(this.props.baseCurrency),
                            icon: CurrencyEnum.getIconClass(this.props.baseCurrency),
                        }}
                    />
                    <NumberField
                        required
                        inputProps={{
                            autoComplete: 'off',
                            onFocus: () => (this.isBoundsFieldFocused = false),
                            type: 'text'
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
        const { dependPrice } = this.state;

        return dal
            .setBondOrder(
                this.props.pairName,
                dependPrice,
                this.props.quoteCurrency,
                values.waves
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
