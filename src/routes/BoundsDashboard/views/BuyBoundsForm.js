import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, change} from 'redux-form';
import _get from 'lodash-es/get';
import _round from 'lodash-es/round';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';
import {openModal} from 'yii-steroids/actions/modal';
import CurrencyEnum from 'enums/CurrencyEnum';
import CollectionEnum from 'enums/CollectionEnum';
import MessageModal from 'modals/MessageModal';

import {dal, html} from 'components';

import './BuyBoundsForm.scss';
import {getBaseCurrency, getPairName, getQuoteCurrency} from 'reducers/currency';

const bem = html.bem('BuyBoundsForm');
const FORM_ID = 'BuyBoundsForm';

@connect(
    state => ({
        pairName: getPairName(state),
        baseCurrency: getBaseCurrency(state),
        quoteCurrency: getQuoteCurrency(state),
        formValues: getFormValues(FORM_ID)(state),
    })
)
@dal.hoc(
    props => [
        {
            url: `/api/v1/neutrino-balances/${props.pairName}`,
            key: 'neutrinoBalances',
            collection: CollectionEnum.NEUTRINO_BALANCES,
        },
    ]
)
export default class BuyBoundsForm extends React.PureComponent {

    static propTypes = {
        pairName: PropTypes.string,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        neutrinoBalances: PropTypes.shape({
            totalIssued: PropTypes.number,
            totalUsed: PropTypes.number,
            contractBalance: PropTypes.number,
            price: PropTypes.number,
        }),
    };

    constructor() {
        super(...arguments);

        this._onSubmit = this._onSubmit.bind(this);
        this._isProgramChange = false;
    }

    componentWillReceiveProps(nextProps) {
        const isChangeDiscountAmount = _get(this.props.formValues, 'discount') !== _get(nextProps.formValues, 'discount');
        const isChangeBoundsAmount = _get(this.props.formValues, 'bounds') !== _get(nextProps.formValues, 'bounds');
        const isChangeNeutrinoAmount = _get(this.props.formValues, 'neutrino') !== _get(nextProps.formValues, 'neutrino');


        //discount validate
        if (_get(this.props.formValues, 'discount')) {
            const nextDiscount = _get(nextProps.formValues, 'discount');

            if (nextDiscount && nextDiscount < 0) {
                this.props.dispatch(change(FORM_ID, 'discount', Math.abs(nextDiscount)));
            }

            if (nextDiscount && nextDiscount.length > 2) {
                this.props.dispatch(change(FORM_ID, 'discount', nextDiscount.slice(0, -1)));
            }
        }

        if (isChangeDiscountAmount || isChangeBoundsAmount || isChangeNeutrinoAmount) {
            this._refreshAmount(nextProps, false,isChangeBoundsAmount || isChangeDiscountAmount);
        }
        else {
            this._isProgramChange = false;
        }
    }

    render() {
        return (
            <div className={bem.block()}>
                <Form
                    className={bem.element('form')}
                    formId={FORM_ID}
                    initialValues={{
                        discount: 15,
                    }}
                    onSubmit={this._onSubmit}
                    validators={[
                        [['discount', 'bounds'], 'required'],
                        [['discount', 'bounds'], 'integer'],
                    ]}
                >
                    <NumberField
                        min={1}
                        max={99}
                        step='any'
                        required
                        inputProps={{
                            autoComplete: 'off',
                        }}
                        label={__('Bonds discount')}
                        layoutClassName={bem.element('input')}
                        attribute={'discount'}
                        inners={{
                            label: '%',
                        }}
                    />
                    <NumberField
                        min={0}
                        step='any'
                        required
                        inputProps={{
                            autoComplete: 'off'
                        }}
                        label={__('Amount')}
                        layoutClassName={bem.element('input', 'with-hint')}
                        attribute={'bounds'}
                        inners={{
                            label: CurrencyEnum.getLabel(this.props.baseCurrency),
                            icon: CurrencyEnum.getIconClass(this.props.baseCurrency)
                        }}
                        hint={_get(this.props, 'formValues.bounds')
                            ? `${_round(_get(this.props, 'formValues.bounds') / _get(this.props, 'neutrinoBalances.price'), 2)} WAVES`
                            // ? `${_round(_get(this.props, 'formValues.bounds') / 2, 2)} WAVES`
                            : ' '
                        }
                    />
                    <NumberField
                        min={0}
                        step='any'
                        inputProps={{
                            autoComplete: 'off'
                        }}
                        label={__('Total')}
                        layoutClassName={bem.element('input')}
                        attribute={'neutrino'}
                        inners={{
                            label: CurrencyEnum.getLabel(this.props.quoteCurrency),
                            icon: CurrencyEnum.getIconClass(this.props.quoteCurrency)
                        }}
                    />
                    <Button
                        type={'submit'}
                        block
                        className={bem.element('submit-button')}
                        label={__('Buy {bounds}', {
                            bounds: CurrencyEnum.getLabel(this.props.quoteCurrency),
                        })}
                    />
                </Form>
            </div>
        );
    }

    _onSubmit(values) {
        const price = 1 - values.discount / 100;
        const wavesToUsdPrice = _get(this.props, 'neutrinoBalances.price');

        return dal.swapAndSetBondOrder(
            this.props.pairName,
            price,
            this.props.quoteCurrency,
            values.bounds,
            values.neutrino,
            wavesToUsdPrice
        )
            .then(() => {
                console.log('---swapAndSetBondOrder success');
            })
            .catch(e => {
                console.log('---swapAndSetBondOrder error', e);
                this.props.dispatch(openModal(MessageModal, {
                    description: __('You have canceled the order')
                }))
            })
    }

    _refreshAmount(props, isRefreshDiscount = false, isRefreshNeutrino = false) {
        props = props || this.props;

        if (this._isProgramChange) {
            this._isProgramChange = false;
            return;
        }
        this._isProgramChange = true;

        const discount = _get(props, 'formValues.discount');
        const bounds = _get(props.formValues, 'bounds');
        const neutrino = _get(props.formValues, 'neutrino');

        let amount;

        if (isRefreshDiscount) {
            amount = this._parseAmount(((bounds - neutrino) * 100) / bounds);

            this.props.dispatch(change(
                FORM_ID,
                'discount',
                this._toFixedSpecial(amount, 2)
            ));

        } else {
            amount = this._parseAmount(isRefreshNeutrino
                ? (bounds / 100) * (100 - discount)
                : (neutrino / (100 - discount)) * 100);


            this.props.dispatch(change(
                FORM_ID,
                isRefreshNeutrino ? 'neutrino' : 'bounds',
                this._toFixedSpecial(amount, 2)
            ));
        }
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
