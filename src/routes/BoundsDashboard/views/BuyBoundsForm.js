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
// import CollectionEnum from 'enums/CollectionEnum';
import MessageModal from 'modals/MessageModal';
import { getControlPrice } from 'reducers/contract/selectors';

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
        this._isProgramChange = false;

        this.state = {
            isButtonDisabled: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        const isChangePriceAmount =
            _get(this.props.formValues, 'price') !== _get(nextProps.formValues, 'price');
        const isChangeBoundsAmount =
            _get(this.props.formValues, 'bounds') !== _get(nextProps.formValues, 'bounds');
        const isChangeNeutrinoAmount =
            _get(this.props.formValues, 'neutrino') !== _get(nextProps.formValues, 'neutrino');

        //price validate
        if (_get(this.props.formValues, 'price')) {
            const nextPrice = _get(nextProps.formValues, 'price');

            if (nextPrice && nextPrice < 0) {
                store.dispatch(change(FORM_ID, 'price', Math.abs(nextPrice)));
            }

            if (nextPrice && nextPrice.length > 2) {
                store.dispatch(change(FORM_ID, 'price', Math.round(nextPrice*100)/100));
            }
        }

        if (isChangePriceAmount || isChangeBoundsAmount || isChangeNeutrinoAmount) {
            this._refreshAmount(nextProps, false, isChangeBoundsAmount || isChangePriceAmount);
        } else {
            this._isProgramChange = false;
        }
    }


    render() {
        const { isButtonDisabled } = this.state;
        const { controlPrice } = this.props;

        return (
            <div className={bem.block()}>
                <Form
                    className={bem.element('form')}
                    formId={FORM_ID}
                    initialValues={{
                        price: 0.01,
                    }}
                    onSubmit={this._onSubmit}
                    validators={[
                        [['price', 'bounds'], 'required'],
                        [['bounds'], 'integer'],
                    ]}
                >
                    <NumberField
                        min={0}
                        step="any"
                        required
                        inputProps={{
                            autoComplete: 'off',
                        }}
                        label={__('Price')}
                        layoutClassName={bem.element('input')}
                        attribute={'price'}
                        inners={{
                            label: '',
                        }}
                    />
                    <NumberField
                        min={0}
                        step="any"
                        required
                        inputProps={{
                            autoComplete: 'off',
                        }}
                        label={__('Amount')}
                        layoutClassName={bem.element('input', 'with-hint')}
                        attribute={'bounds'}
                        inners={{
                            label: CurrencyEnum.getLabel(this.props.baseCurrency),
                            icon: CurrencyEnum.getIconClass(this.props.baseCurrency),
                        }}
                        hint={
                            _get(this.props, 'formValues.bounds')
                                ? `${_round(
                                    _get(this.props, 'formValues.neutrino') * (controlPrice / 100),
                                    2
                                )} USDN`
                                : // ? `${_round(_get(this.props, 'formValues.bounds') / _get(this.props, 'neutrinoConfig.price'), 2)} WAVES`
                                // ? `${_round(_get(this.props, 'formValues.bounds') / 2, 2)} WAVES`
                                ' '
                        }
                    />
                    <NumberField
                        min={10}
                        step="any"
                        inputProps={{
                            autoComplete: 'off',
                        }}
                        label={__('Total')}
                        layoutClassName={bem.element('input')}
                        attribute={'neutrino'}
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
        const wavesToUsdPrice = this.props.controlPrice;

        return dal
            .setBondOrder(this.props.pairName, values.price, this.props.quoteCurrency, values.bounds)
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

    _refreshAmount(props, isRefreshPrice = false, isRefreshNeutrino = false) {
        props = props || this.props;

        if (this._isProgramChange) {
            this._isProgramChange = false;
            return;
        }
        this._isProgramChange = true;

        const price = _get(props, 'formValues.price');
        const bounds = _get(props.formValues, 'bounds');
        const neutrino = _get(props.formValues, 'neutrino');

        let amount;

        if (isRefreshPrice) {
            amount = this._parseAmount(((bounds - neutrino) * 100) / bounds);

            store.dispatch(change(FORM_ID, 'price', this._toFixedSpecial(amount, 2)));
        } else {
            amount = this._parseAmount(
                isRefreshNeutrino
                    ? (bounds * price)
                    : (neutrino / price)
            );

            store.dispatch(
                change(
                    FORM_ID,
                    isRefreshNeutrino ? 'neutrino' : 'bounds',
                    this._toFixedSpecial(amount, 2)
                )
            );
        }
    }

    _parseAmount(amount) {
        if (typeof amount === 'undefined') {
            return 0;
        }
        let result = typeof amount === 'string' ? amount.replace(/,/, '.') : amount;
        return !isNaN(parseFloat(result)) && isFinite(result) ? result : 0;
    }

    _toFixedSpecial = function(num, n) {
        const str = num.toFixed(n);
        if (str.indexOf('e+') < 0) {
            return str;
        }

        // if number is in scientific notation, pick (b)ase and (p)ower
        return (
            str
                .replace('.', '')
                .split('e+')
                .reduce(function(p, b) {
                    return p + new Array(b - p.length + 2).join(0);
                }) +
            '.' +
            new Array(n + 1).join(0)
        );
    };
}
