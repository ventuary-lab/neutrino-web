import React from 'react';
import { dal, store } from 'components';
import { set as _set, get as _get, round as _round, floor as _floor } from 'lodash';
import * as Rx from 'rxjs';
import BaseInput from 'ui/form/BaseInput';
import MessageModal from 'modals/MessageModal';
import { openModal } from 'yii-steroids/actions/modal';

import PercentButton from 'ui/form/PercentButton';
import ExpectedValueSpan from 'shared/Auction/ExpectedValueSpan';
import Button from 'yii-steroids/ui/form/Button';
import CurrencyEnum from 'enums/CurrencyEnum';
// import BaseSelectInput, { SelectOption } from 'ui/form/BaseSelectInput';
import MenuSwitcher, { MenuOption } from 'ui/form/MenuSwitcher';

import TabSelector from 'ui/global/TabSelector';
import {
    computeNSBTFromROI,
    computeNSBTFromBR,
    computeNSBTContractApproach,
    computeBRFromROI,
    computeROI,
    computePriceWavesByBondCentsFromOrderPrice,
    computePriceWavesByBondCents,
    computeOrderPriceFromPriceWavesByBondCents,
    computeBRFromNSBTandWaves,
    convertWavesToNeutrino,
    convertNeutrinoToWaves,
    computeBondsAmountFromROI,
    computeWavesAmountFromROI,
    getComputedBondsFromROI,
    computeROIFromPriceWavesByBondCents,
} from 'reducers/contract/helpers';

import { computeOrderPosition } from './helpers';
import { Props, State, FormDefaults, OrderUrgency } from './types';

import usdnLogo from 'static/icons/usd-n.svg';
import nsbtLogo from 'static/icons/n_icon/light-not-filled/Neutrino_N_ICON.svg';
import wavesLogo from 'static/icons/wave.svg';

import './style.scss';
import { IOrder } from 'routes/BondsDashboard/types';

// const DEFAULT_ROI = 10;

const BUY_FORM_NAME = 'buy';
const APPROX_RECEIVE = 'approx_receive';
const LIQUIDATE_FORM_NAME = 'liquidate';
const SEND_FIELD_NAME = 'send';
const RECEIVE_FIELD_NAME = 'receive';

const APPROX_SYMBOL = '~';

class OrderProvider extends React.Component<Props, State> {
    buyFormSubject;
    liquidateFormSubject;
    subscriptions;
    auctionPercentage: number[];
    liquidatePercentage: number[];

    constructor(props) {
        super(props);

        this.getForms = this.getForms.bind(this);
        this.onSelectOption = this.onSelectOption.bind(this);
        this.setAmountPercentForField = this.setAmountPercentForField.bind(this);
        this.mapLiquidatePercentage = this.mapLiquidatePercentage.bind(this);
        this.mapBuyPercentage = this.mapBuyPercentage.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleBuyOrder = this.handleBuyOrder.bind(this);
        this.handleLiquidateOrder = this.handleLiquidateOrder.bind(this);
        this.handleOnCondition = this.handleOnCondition.bind(this);
        this.getMenuOptions = this.getMenuOptions.bind(this);
        this.onFormUpdate = this.onFormUpdate.bind(this);
        this.checkIsBrAbove = this.checkIsBrAbove.bind(this);

        this.auctionPercentage = [75, 95, 120, 195];
        this.liquidatePercentage = [100, 150, 200, 300];

        this.state = {
            orderUrgency: OrderUrgency.INSTANT,
            [BUY_FORM_NAME]: {
                [SEND_FIELD_NAME]: FormDefaults.WAVES_AMOUNT,
                [RECEIVE_FIELD_NAME]: FormDefaults.NSBT_AMOUNT,
                [APPROX_RECEIVE]: 0,
                price: _floor(this.props.backingRatio) || 0,
                br: 0,
            },
            [LIQUIDATE_FORM_NAME]: {
                [SEND_FIELD_NAME]: FormDefaults.NSBT_AMOUNT,
                [RECEIVE_FIELD_NAME]: FormDefaults.USDN_AMOUNT,
                [APPROX_RECEIVE]: 0,
                br: _floor(this.props.backingRatio) || 0,
                price: 0,
            },
        };

        // RX
        this.buyFormSubject = new Rx.Subject();
        this.liquidateFormSubject = new Rx.Subject();

        this.subscriptions = [];
    }

    calculateDefaults() {
        const { controlPrice, backingRatio } = this.props;

        // "RECEIVE" get computed based "SEND" value
        const bondsAmount = getComputedBondsFromROI(
            backingRatio,
            FormDefaults.WAVES_AMOUNT,
            controlPrice
        );

        const { buy, liquidate } = this.state;

        _set(buy, 'receive', bondsAmount);
        _set(liquidate, 'receive', bondsAmount);

        this.setState({ buy, liquidate });
    }

    componentDidMount() {
        this.calculateDefaults();

        this.subscriptions.push(
            this.buyFormSubject.subscribe((next) => this.onFormUpdate(next, BUY_FORM_NAME))
        );
        this.subscriptions.push(
            this.liquidateFormSubject.subscribe((next) =>
                this.onFormUpdate(next, LIQUIDATE_FORM_NAME)
            )
        );

        const { state } = this;

        this.buyFormSubject.next(state);
        this.liquidateFormSubject.next(state);
    }

    componentWillUnmount() {
        this.subscriptions.forEach((element) => {
            element.unsubscribe();
        });
    }

    onInputChange(event) {
        let { name, value } = event.target;
        const { state } = this;

        if (state.orderUrgency == OrderUrgency.BY_REQUEST) {
            if (name === `${BUY_FORM_NAME}.${RECEIVE_FIELD_NAME}` && value[0] !== APPROX_SYMBOL) {
                value = `${APPROX_SYMBOL}${value}`;
            }
        }

        _set(state, name, value);

        this.setState(state);

        this.buyFormSubject.next(state);
        this.liquidateFormSubject.next(state);
    }

    getFormReceiveAmount(state: State, formName: string): number {
        const raw = _get(state, `${formName}.${RECEIVE_FIELD_NAME}`);

        if (raw[0] == APPROX_SYMBOL) {
            return Number(raw.slice(1));
        }
        return Number(raw);
    }

    onFormUpdate(next: State, formName: string) {
        const { controlPrice } = this.props;

        let sendAmount, br, price, priceWavesByBondCents, receiveAmount: number;

        switch (next.orderUrgency) {
            case OrderUrgency.INSTANT:
                br = _floor(this.props.backingRatio);

                sendAmount = Number(_get(next, `${formName}.${SEND_FIELD_NAME}`));

                if (isNaN(sendAmount)) {
                    sendAmount = 0;
                }

                let computedRoi = 100 - br;
                // priceWavesByBondCents = _floor(
                //     computePriceWavesByBondCents(computedRoi, controlPrice)
                // );
                priceWavesByBondCents = computePriceWavesByBondCents(computedRoi, controlPrice);
                receiveAmount = computeNSBTContractApproach(sendAmount, priceWavesByBondCents);

                price = _floor(receiveAmount / sendAmount, 2);

                if (formName === LIQUIDATE_FORM_NAME && this.checkIsBrAbove(100)) {
                    br = _floor((receiveAmount / sendAmount) * 100);
                }

                _set(next, `${formName}.${APPROX_RECEIVE}`, _floor(receiveAmount));
                _set(next, `${formName}.br`, br);
                _set(next, `${formName}.${RECEIVE_FIELD_NAME}`, _floor(receiveAmount));
                _set(next, `${formName}.price`, price);

                this.setState(next);
                // debugger;
                break;
            case OrderUrgency.BY_REQUEST:
                let rawSendAmount = Number(_get(next, `${formName}.${SEND_FIELD_NAME}`));
                if (isNaN(rawSendAmount)) {
                    rawSendAmount = 0;
                }

                sendAmount = rawSendAmount;
                // receiveAmount = Number(_get(next, `${formName}.${RECEIVE_FIELD_NAME}`));
                receiveAmount = this.getFormReceiveAmount(next, formName);
                if (isNaN(receiveAmount)) {
                    receiveAmount = 0;
                }

                price = _round(receiveAmount / sendAmount, 2);

                let computeRoiResult = this.computeROIWithContractApproach(
                    sendAmount,
                    receiveAmount,
                    controlPrice
                );
                let { roi } = computeRoiResult;
                roi = _floor(roi, 2);

                if (formName === LIQUIDATE_FORM_NAME) {
                    br = _floor((receiveAmount / rawSendAmount) * 100);
                } else if (formName === BUY_FORM_NAME) {
                    br = 100 - roi;
                }

                priceWavesByBondCents = computeRoiResult.priceWavesByBondCents;
                const exactNSBT = computeNSBTContractApproach(sendAmount, priceWavesByBondCents);

                _set(next, `${formName}.${APPROX_RECEIVE}`, _floor(exactNSBT));
                _set(next, `${formName}.br`, _floor(br));
                _set(next, `${formName}.price`, price);
                this.setState(next);
                break;
        }

        // debugger;
    }

    handleOnCondition() {
        this.setState({ orderUrgency: OrderUrgency.BY_REQUEST });
    }

    async handleLiquidateOrder() {
        const { state } = this;
        const { pairName, baseCurrency, liquidateOrders } = this.props;

        const bondsAmount = _get(state, `${LIQUIDATE_FORM_NAME}.${SEND_FIELD_NAME}`);
        const price = _get(state, `${LIQUIDATE_FORM_NAME}.price`);
        const mappedOrders = (liquidateOrders as Record<string, any>[]).map((order) => ({
            ...order,
            order_next: order.orderNext,
            order_prev: order.orderPrev,
            is_first: order.isFirst,
            is_last: order.isLast,
            debugRoi: order.price,
        }));

        const roundedPrice = Math.round(price * 100);
        const position = computeOrderPosition(mappedOrders, roundedPrice);

        try {
            const response = await dal.setLiquidateOrder(
                pairName,
                baseCurrency,
                bondsAmount,
                roundedPrice,
                position
            );
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

    // control price is considered as int
    computeROIWithContractApproach(
        wavesAmount: number,
        bondsAmount: number,
        controlPrice: number
    ): { roi: number; orderPrice: number; priceWavesByBondCents: number } {
        let dependPrice = wavesAmount / bondsAmount;
        dependPrice *= 100;
        const priceWavesByBondCents = computePriceWavesByBondCentsFromOrderPrice(dependPrice);
        const roi = computeROIFromPriceWavesByBondCents(priceWavesByBondCents, controlPrice);
        return { roi, orderPrice: dependPrice, priceWavesByBondCents };
    }

    async handleBuyOrder() {
        const { pairName, quoteCurrency, bondOrders, controlPrice } = this.props;

        const { state } = this;
        const wavesAmount = Number(_get(state, `${BUY_FORM_NAME}.${SEND_FIELD_NAME}`));
        const bondsAmount = this.getFormReceiveAmount(state, BUY_FORM_NAME);

        const { orderPrice, roi } = this.computeROIWithContractApproach(
            wavesAmount,
            bondsAmount,
            controlPrice
        );
        const contractPrice = _floor(orderPrice);
        const position = computeOrderPosition(bondOrders as IOrder[], roi);

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

    onSelectOption(optionValue: Pick<MenuOption, 'value'>) {
        const { state } = this;
        const newState = { ...state, orderUrgency: Number(optionValue) };

        this.buyFormSubject.next(newState);
        this.liquidateFormSubject.next(newState);
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
        const { user, controlPrice } = this.props;

        let [formName, fieldName] = path.split('.');
        const currencyAmount = _get(state, path);

        fieldName = fieldName === SEND_FIELD_NAME ? RECEIVE_FIELD_NAME : SEND_FIELD_NAME;

        if (isNaN(+currencyAmount)) return;

        // const updatedValue = _round((num / 100) * Number(currencyAmount), 2);

        const desiredBR = num;
        const sendAmount = _get(state, path);
        let receiveAmount = computeNSBTFromBR(desiredBR / 100, currencyAmount, controlPrice);

        if (formName === LIQUIDATE_FORM_NAME) {
            // br = (receiveAmount / rawSendAmount) * 100
            // br = receiveAmount * 100 / rawSendAmount
            // receiveAmount * 100 = br * rawSendAmount
            // receiveAmount = br * rawSendAmount / 100
            receiveAmount = (desiredBR * sendAmount) / 100;
        }

        // _set(state, `${formName}.br`, desiredBR);
        _set(state, `${formName}.${fieldName}`, receiveAmount);
        this.setState(state);

        this.buyFormSubject.next(state);
        this.liquidateFormSubject.next(state);
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

    getButtonLabels(): { buyLabel: string; liquidateLabel: string } {
        const { orderUrgency } = this.state;
        let buyLabel = `Buy ${CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}`;
        let liquidateLabel = `Liquidate ${CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}`;

        if (orderUrgency === OrderUrgency.BY_REQUEST) {
            return {
                buyLabel: 'Place auction request',
                liquidateLabel: 'Place liquidation request',
            };
        }

        return { buyLabel, liquidateLabel };
    }

    getButtonClassNames(): { buyClassName: string; liquidateClassName: string } {
        const { orderUrgency } = this.state;

        if (orderUrgency === OrderUrgency.BY_REQUEST) {
            return { buyClassName: 'border-only', liquidateClassName: 'border-only' };
        }

        return { buyClassName: '', liquidateClassName: ' ' };
    }

    getSmallWarning(br): string {
        // system backing ratio
        const { backingRatio } = this.props;
        if (br >= 100 && backingRatio < 100)
            return 'In deficit, Exp. BR cannot be larger than 100%';
        if (br == 100) return 'Exp. BR cannot be equal to 100%';
        if (!(br >= 5 && br <= 195)) return 'Exp. BR should be >= 5% and <= 195%';

        const { state } = this;
        const buyAmount = _get(state, `${BUY_FORM_NAME}.${SEND_FIELD_NAME}`);

        if (Number(buyAmount) < 10) return '10 WAVES is the min. amount';
    }

    getLiquidateWarning(br): string {
        if (!(br >= 100)) return 'BR should be higher or equal to 100%';
    }

    checkIsBrAbove(limit: number = 100) {
        const { backingRatio } = this.props;
        return !(backingRatio >= limit);
    }

    getForms() {
        // const { backingRatio } = this.props;
        const { orderUrgency, buy, liquidate } = this.state;
        const { buyLabel, liquidateLabel } = this.getButtonLabels();
        const { buyClassName, liquidateClassName } = this.getButtonClassNames();

        const isBrAbove = orderUrgency == OrderUrgency.INSTANT && this.checkIsBrAbove(100);

        const brWarning = (
            <div className="br-warning">
                <span>
                    <b>Instant liquidation is possible only when BR &gt;= 100%.</b> Please use an
                    "on condition" request instead.
                </span>
            </div>
        );

        const isBuyFormInvalid = Boolean(this.getSmallWarning(buy.br));
        const isLiquidateFormInvalid = Boolean(this.getLiquidateWarning(liquidate.br));

        const approxReceiveNSBT = _floor(_get(this.state, `${BUY_FORM_NAME}.${APPROX_RECEIVE}`));

        const buyForm = (
            <div
                className={`buy-form ${orderUrgency == OrderUrgency.INSTANT ? 'mode-instant' : ''}`}
            >
                <div className="price">
                    <BaseInput disabled smallWarning={this.getSmallWarning(buy.br)} />
                    <ExpectedValueSpan
                        label={'Exp. BR'}
                        expected={isBuyFormInvalid ? 'Error' : `${APPROX_SYMBOL}${buy.br}%`}
                    />
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
                <div className="percents">{this.auctionPercentage.map(this.mapBuyPercentage)}</div>
                <p>
                    You will receive {approxReceiveNSBT} NSBT for {buy.send} WAVES when BR reaches{' '}
                    {buy.br}%
                </p>
                <Button
                    onClick={this.handleBuyOrder}
                    label={buyLabel}
                    className={buyClassName}
                    disabled={this.getSmallWarning(buy.br)}
                />
            </div>
        );
        const sellForm = (
            <div
                className={`liquidate-form ${isBrAbove ? 'on-condition' : ''} ${
                    orderUrgency == OrderUrgency.INSTANT ? 'mode-instant' : ''
                }`}
            >
                <div className="price">
                    <BaseInput disabled smallWarning={this.getLiquidateWarning(liquidate.br)} />
                    <ExpectedValueSpan
                        label="Exp. BR"
                        expected={isLiquidateFormInvalid ? 'Error' : `${liquidate.br}%`}
                    />
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
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}
                    icon={nsbtLogo}
                    onChange={this.onInputChange}
                    value={liquidate.send}
                    name="liquidate.send"
                    fieldName="Send"
                    required={true}
                />
                <div className="percents">
                    {this.liquidatePercentage.map(this.mapLiquidatePercentage)}
                </div>
                <p>
                    You will receive {liquidate.receive} USDN for {liquidate.send} NSBT when BR
                    reaches {liquidate.br}%
                </p>
                {isBrAbove ? (
                    <>
                        {brWarning}
                        <Button onClick={this.handleOnCondition} label={`On condition ⟶`} />
                    </>
                ) : (
                    <Button
                        color="danger"
                        onClick={this.handleLiquidateOrder}
                        label={liquidateLabel}
                        className={liquidateClassName}
                        disabled={this.getLiquidateWarning(liquidate.br)}
                    />
                )}
            </div>
        );
        return { buyForm, sellForm };
    }

    getMenuOptions() {
        const { orderUrgency } = this.state;
        return [
            { label: 'Instant', value: OrderUrgency.INSTANT, isSelected: true },
            { label: 'On condition', value: OrderUrgency.BY_REQUEST },
        ].map((option) => ({
            ...option,
            isSelected: orderUrgency === option.value,
        }));
    }

    render() {
        const { buyForm, sellForm } = this.getForms();

        const selectInput = (
            <MenuSwitcher onSelect={this.onSelectOption} options={this.getMenuOptions()} />
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
