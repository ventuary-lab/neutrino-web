import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, change } from 'redux-form';
import _, { get as _get } from 'lodash';
import _round from 'lodash-es/round';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';
import { openModal } from 'yii-steroids/actions/modal';
import CurrencyEnum from 'enums/CurrencyEnum';
import MessageModal from 'modals/MessageModal';
import PercentButton from 'ui/form/PercentButton';
import { computeROI } from 'reducers/contract/helpers';
import { dal, html, store } from 'components';

import './style.scss';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';
import { Props, State, IBuyBondsForm } from './types';

const bem = html.bem('BuyBondsForm');
const FORM_ID = 'BuyBondsForm';

class BuyBondsForm extends React.Component<Props, State> implements IBuyBondsForm {
    isBondsFieldFocused;
    roiComputingAllowed;
    percentage;

    constructor(props) {
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
        this.computeHint = this.computeHint.bind(this);
        this.getPercentButtons = this.getPercentButtons.bind(this);
        this.mapPercentageButton = this.mapPercentageButton.bind(this);
        this.onManualChangeRoi = this.onManualChangeRoi.bind(this);

        this.state = {
            isButtonDisabled: false,
            dependPrice: undefined,
            roi: 30
        };

        this.percentage = [10, 15, 25, 50];

        this.isBondsFieldFocused = false;
    }

    computeHint() {
        let bondsAmount = _get(this.props.formValues, 'bonds');

        if (bondsAmount) {
            return `${bondsAmount} ${CurrencyEnum.USD_N.toUpperCase()}`;
        }
    }

    updatePriceField() {
        let { controlPrice, formValues } = this.props;
        let bondsAmount = _get(formValues, 'bonds');
        let wavesRawAmount = _get(formValues, 'waves');

        if (!bondsAmount || !wavesRawAmount || !controlPrice) {
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

    componentDidUpdate(prevProps) {
        if (!this.props.formValues || !prevProps.formValues) {
            return;
        }

        const { bonds: oldBonds, waves: oldWaves } = prevProps.formValues;
        const { bonds, waves } = this.props.formValues;

        if (oldBonds !== bonds || oldWaves !== waves) {
            this.updatePriceField();
        }
    }

    onManualChangeRoi (roi: number) {
        console.log({ roi });
    }

    mapPercentageButton (num: number) {
        return <PercentButton label={`${num}%`} onClick={() => this.onManualChangeRoi(num)}/>
    }

    getPercentButtons () {
        return this.percentage.map(this.mapPercentageButton);
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
                        waves: 1000,
                        bonds: 1000
                    }}
                    onSubmit={this._onSubmit}
                    validators={[
                        [['bonds'], 'required'],
                    ]}
                >
                    <NumberField
                        inputProps={{
                            autoComplete: 'off',
                            value: this.getPriceValue(),
                            type: 'text'
                        }}
                        label='Price'
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
                    <div className={bem.element('percent-btns')}>
                        {this.getPercentButtons()}
                    </div>
                    <NumberField
                        required
                        inputProps={{
                            autoComplete: 'off',
                            onFocus: () => (this.isBondsFieldFocused = true),
                            type: 'text'
                        }}
                        label='Receive'
                        layoutClassName={bem.element('input')}
                        attribute={'bonds'}
                        inners={{
                            label: CurrencyEnum.getLabel(this.props.baseCurrency),
                            icon: CurrencyEnum.getIconClass(this.props.baseCurrency),
                        }}
                    />
                    <NumberField
                        required
                        inputProps={{
                            autoComplete: 'off',
                            onFocus: () => (this.isBondsFieldFocused = false),
                            type: 'text'
                        }}
                        label='Send'
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
                        label={`Buy ${CurrencyEnum.getLabel(this.props.baseCurrency)}`}
                    />
                </Form>
            </div>
        );
    }

    computeOrderPosition (price) {
        const { bondOrders } = this.props;

        let position = 0;
        bondOrders
            .forEach(order => {
                if (Number(price) <= Number(order.price)) {
                    position++;
                }
            });

        return position;
    }

    _onSubmit(values) {
        const { pairName, quoteCurrency } = this.props;
        const { dependPrice } = this.state;
        const contractPrice = Math.round(dependPrice * 100);
        const position = this.computeOrderPosition(contractPrice);

        return dal
            .setBondOrder(
                pairName,
                contractPrice,
                quoteCurrency,
                values.waves,
                position
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
                            text: 'You have canceled the order',
                        })
                    );
                } else if (err) {
                    store.dispatch(
                        openModal(MessageModal, {
                            text: `The order was canceled.\n Error: ${err.message}`
                        })
                    );
                }
            });
    }
}


export default connect(state => ({
    pairName: getPairName(state),
    baseCurrency: getBaseCurrency(state),
    quoteCurrency: getQuoteCurrency(state),
    formValues: getFormValues(FORM_ID)(state)
}))(BuyBondsForm);