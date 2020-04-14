import React from 'react';
import { dal, store } from 'components';
import { set as _set, get as _get, round as _round } from 'lodash';
import BaseInput from 'ui/form/BaseInput';
import MessageModal from 'modals/MessageModal';
import { openModal } from 'yii-steroids/actions/modal';

import PercentButton from 'ui/form/PercentButton';
import ExpectedValueSpan from 'shared/Auction/ExpectedValueSpan';
import Button from 'yii-steroids/ui/form/Button';
import CurrencyEnum from 'enums/CurrencyEnum';
import BaseSelectInput, { SelectOption } from 'ui/form/BaseSelectInput';
import TabSelector from 'ui/global/TabSelector';
import {
    computeROI,
    computeBondsAmountFromROI,
    computeWavesAmountFromROI,
    getComputedBondsFromROI,
} from 'reducers/contract/helpers';

import { computeOrderPosition } from './helpers';
import { Props, State, FormDefaults, OrderUrgency } from './types';

import usdnLogo from 'static/icons/usd-n.svg';
import nsbtLogo from 'static/icons/n_icon/light-not-filled/Neutrino_N_ICON.svg';
import wavesLogo from 'static/icons/wave.svg';

import './style.scss';

// const DEFAULT_ROI = 10;

const BUY_FORM_NAME = 'buy';
const LIQUIDATE_FORM_NAME = 'liquidate';
const SEND_FIELD_NAME = 'send';
const RECEIVE_FIELD_NAME = 'receive';

class OrderProvider extends React.Component<Props, State> {
    percentage: number[];

    constructor(props) {
        super(props);

        this.getForms = this.getForms.bind(this);
        this.onSelectOption = this.onSelectOption.bind(this);
        this.setAmountPercentForField = this.setAmountPercentForField.bind(this);
        this.mapLiquidatePercentage = this.mapLiquidatePercentage.bind(this);
        this.mapBuyPercentage = this.mapBuyPercentage.bind(this);
        this.setAmountPercentForField = this.setAmountPercentForField.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleBuyOrder = this.handleBuyOrder.bind(this);
        this.handleLiquidateOrder = this.handleLiquidateOrder.bind(this);

        this.percentage = [25, 50, 75, 100];

        this.state = {
            orderUrgency: OrderUrgency.BY_REQUEST,
            [BUY_FORM_NAME]: {
                [SEND_FIELD_NAME]: FormDefaults.WAVES_AMOUNT,
                [RECEIVE_FIELD_NAME]: FormDefaults.NSBT_AMOUNT,
                price: 0,
            },
            [LIQUIDATE_FORM_NAME]: {
                [SEND_FIELD_NAME]: FormDefaults.WAVES_AMOUNT,
                [RECEIVE_FIELD_NAME]: FormDefaults.USDN_AMOUNT,
                price: 0,
            },
        };
    }

    calculateDefaults() {
        const { controlPrice, roi = 10 } = this.props;
        const bondsAmount = getComputedBondsFromROI(roi, FormDefaults.WAVES_AMOUNT, controlPrice);
        const dependPrice = Math.round(FormDefaults.WAVES_AMOUNT / bondsAmount);

        const { buy, liquidate } = this.state;

        _set(buy, 'receive', bondsAmount);
        _set(liquidate, 'receive', bondsAmount);
        _set(buy, 'price', dependPrice);
        _set(liquidate, 'price', dependPrice);

        this.setState({ buy, liquidate });
    }

    componentDidMount() {
        this.calculateDefaults();
    }

    onInputChange(event) {
        let { name, value } = event.target;
        const { state } = this;
        const { orderUrgency } = state;

        if (isNaN(Number(value))) {
            return;
        }

        _set(state, name, Number(value));

        this.setState(state);

        // if (orderUrgency === OrderUrgency.BY_REQUEST) {
        //     return;
        // }

        this.recalculateFormFields({ name, value });
    }

    recalculateFormFields({ name, value }: { name: string; value: string | number }) {
        const [formType, formField] = name.split('.');
        const computedFormPath = [
            formType,
            formField === RECEIVE_FIELD_NAME ? SEND_FIELD_NAME : RECEIVE_FIELD_NAME,
        ].join('.');

        if (
            formField === RECEIVE_FIELD_NAME &&
            (formType === BUY_FORM_NAME || formType === LIQUIDATE_FORM_NAME)
        ) {
            this.recalculateWavesAmount(computedFormPath, Number(value));
        }

        if (
            formField === SEND_FIELD_NAME &&
            (formType === BUY_FORM_NAME || formType === LIQUIDATE_FORM_NAME)
        ) {
            this.recalculateBondsAmount(computedFormPath, Number(value));
        }
    }

    recalculateBondsAmount(path: string, wavesAmount: number) {
        const { state } = this;
        const { roi, controlPrice } = this.props;
        const bondsAmount = computeBondsAmountFromROI(roi, wavesAmount, controlPrice / 100);

        // console.log({ wavesAmount, roi, bondsAmount, controlPrice });
        _set(state, path, Math.round(bondsAmount));
        this.setState(state);
    }

    recalculateWavesAmount(path: string, bondsAmount: number) {
        const { state } = this;
        const { roi, controlPrice } = this.props;
        const wavesAmount = computeWavesAmountFromROI(roi, bondsAmount, controlPrice / 100);

        // console.log({ wavesAmount, roi, bondsAmount, controlPrice });
        _set(state, path, Math.round(wavesAmount));
        this.setState(state);
    }

    async handleLiquidateOrder() {
        const { state } = this;
        const { pairName, baseCurrency } = this.props;

        const bondsAmount = _get(state, `${LIQUIDATE_FORM_NAME}.${RECEIVE_FIELD_NAME}`);

        try {
            const response = await dal.setLiquidateOrder(pairName, baseCurrency, bondsAmount);
            console.log({ response });
        } catch (err) {
            console.log('---liquidate error', err);

            store.dispatch(
                openModal(MessageModal, {
                    text: `Fail on liquidate order add.\n Error: ${err.message}`,
                })
            );
        }
    }

    async handleBuyOrder() {
        const { pairName, quoteCurrency, bondOrders, controlPrice } = this.props;
        const { state } = this;
        const wavesAmount = _get(state, `${BUY_FORM_NAME}.${SEND_FIELD_NAME}`);
        const bondsAmount = _get(state, `${BUY_FORM_NAME}.${RECEIVE_FIELD_NAME}`);
        const dependPrice = wavesAmount / bondsAmount;
        const roi = computeROI(wavesAmount, bondsAmount, controlPrice / 100);

        const contractPrice = Math.round(dependPrice * 100);
        const position = computeOrderPosition(bondOrders, roi);

        try {
            const response = await dal.setBondOrder(
                pairName,
                contractPrice,
                quoteCurrency,
                wavesAmount,
                position
            );
            console.log({ response });
        } catch (err) {
            console.log('---setBondOrder error', err);

            store.dispatch(
                openModal(MessageModal, {
                    text: `The order was canceled.\n Error: ${err.message}`,
                })
            );
        }
    }

    onSelectOption(event) {
        switch (Number(event.target.value)) {
            case OrderUrgency.BY_REQUEST:
                this.setState({ orderUrgency: OrderUrgency.BY_REQUEST });
                break;
            case OrderUrgency.INSTANT:
                this.setState({ orderUrgency: OrderUrgency.INSTANT });
                break;
        }
    }

    mapBuyPercentage(num: number) {
        return (
            <PercentButton
                onClick={() =>
                    this.setAmountPercentForField(`${BUY_FORM_NAME}.${SEND_FIELD_NAME}`, num)
                }
                label={`${num}%`}
            />
        );
    }

    // Percents
    setAmountPercentForField(path: string, num: number) {
        const { state } = this;
        const { user } = this.props;
        const wavesAmount = user.balances[CurrencyEnum.WAVES];

        if (isNaN(+wavesAmount)) return;

        const updatedValue = _round((num / 100) * Number(wavesAmount), 2);
        _set(state, path, updatedValue);
        this.setState(state);

        this.recalculateFormFields({
            name: path,
            value: updatedValue,
        });
    }

    mapLiquidatePercentage(num: number) {
        return (
            <PercentButton
                onClick={() =>
                    this.setAmountPercentForField(`${LIQUIDATE_FORM_NAME}.${SEND_FIELD_NAME}`, num)
                }
                label={`${num}%`}
            />
        );
    }

    getForms() {
        const { orderUrgency, buy, liquidate } = this.state;

        const buyForm = (
            <div className="buy-form">
                <div className="price">
                    <BaseInput fieldName="Price" disabled />
                    <ExpectedValueSpan label="Exp. BR" expected={buy.price} />
                </div>
                <BaseInput
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}
                    icon={nsbtLogo}
                    value={buy.receive}
                    fieldName="Receive"
                    name="buy.receive"
                    onChange={this.onInputChange}
                    required={true}
                    disabled={orderUrgency == OrderUrgency.INSTANT}
                />
                <BaseInput
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.WAVES]}
                    icon={wavesLogo}
                    value={buy.send}
                    name="buy.send"
                    onChange={this.onInputChange}
                    fieldName="Send"
                    required={true}
                />
                <div className="percents">{this.percentage.map(this.mapBuyPercentage)}</div>
                <p>
                    You will receive {buy.receive} NSBT for {buy.send} WAVES when BR reaches X%
                </p>
                <Button
                    onClick={this.handleBuyOrder}
                    label={`Buy ${CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}`}
                />
            </div>
        );
        const sellForm = (
            <div className="liquidate-form">
                <div className="price">
                    <BaseInput fieldName="Price" disabled />
                    <ExpectedValueSpan label="Exp. BR" expected={liquidate.price} />
                </div>
                <BaseInput
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.USD_N]}
                    icon={usdnLogo}
                    value={liquidate.receive}
                    onChange={this.onInputChange}
                    fieldName="Receive"
                    name="liquidate.receive"
                    required={true}
                    disabled={orderUrgency == OrderUrgency.INSTANT}
                />
                <BaseInput
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.WAVES]}
                    icon={wavesLogo}
                    onChange={this.onInputChange}
                    value={liquidate.send}
                    name="liquidate.send"
                    fieldName="Send"
                    required={true}
                />
                <div className="percents">{this.percentage.map(this.mapLiquidatePercentage)}</div>
                <p>
                    You will receive {liquidate.receive} USDN for {liquidate.send} WAVES when BR
                    reaches X%
                </p>
                <Button
                    color="danger"
                    onClick={this.handleLiquidateOrder}
                    label={`Liquidate ${CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}`}
                />
            </div>
        );
        return { buyForm, sellForm };
    }

    render() {
        const { buyForm, sellForm } = this.getForms();

        const selectInput = (
            <BaseSelectInput
                onSelect={this.onSelectOption}
                options={[
                    { label: 'By request', value: OrderUrgency.BY_REQUEST },
                    { label: 'Instant', value: OrderUrgency.INSTANT },
                ]}
            />
        );

        return (
            <>
                <div className="OrderProvider">
                    <div className="buy">
                        {selectInput}
                        {buyForm}
                    </div>
                    <div className="liquidate">{sellForm}</div>
                </div>
                <div className="OrderProvider OrderProvider-mobile">
                    <TabSelector
                        tabs={[
                            {
                                label: 'Buy NSBT',
                                node: (
                                    <div className="OrderProviderTab">
                                        {selectInput}
                                        {buyForm}
                                    </div>
                                ),
                            },
                            {
                                label: 'Sell NSBT',
                                node: (
                                    <div className="OrderProviderTab">
                                        {selectInput}
                                        {sellForm}
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </>
        );
    }
}

export default OrderProvider;
