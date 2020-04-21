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
    computeBRFromROI,
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
    buyFormSubject;
    liquidateFormSubject;
    subscriptions;

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

        this.percentage = [25, 50, 75, 100];

        this.state = {
            orderUrgency: OrderUrgency.INSTANT,
            [BUY_FORM_NAME]: {
                [SEND_FIELD_NAME]: FormDefaults.WAVES_AMOUNT,
                [RECEIVE_FIELD_NAME]: FormDefaults.NSBT_AMOUNT,
                price: _floor(this.props.backingRatio, 2) || 0,
            },
            [LIQUIDATE_FORM_NAME]: {
                [SEND_FIELD_NAME]: FormDefaults.NSBT_AMOUNT,
                [RECEIVE_FIELD_NAME]: FormDefaults.USDN_AMOUNT,
                price: _floor(this.props.backingRatio, 2) || 0,
            },
        };

        // RX
        this.buyFormSubject = new Rx.Subject()
        this.liquidateFormSubject = new Rx.Subject()

        this.subscriptions = []
    }

    calculateDefaults() {
        const { controlPrice, backingRatio } = this.props;

        // "RECEIVE" get computed based "SEND" value
        const bondsAmount = getComputedBondsFromROI(backingRatio, FormDefaults.WAVES_AMOUNT, controlPrice);

        const { buy, liquidate } = this.state;

        _set(buy, 'receive', bondsAmount);
        _set(liquidate, 'receive', bondsAmount);
        // _set(buy, 'price', dependPrice);
        // _set(liquidate, 'price', dependPrice);

        this.setState({ buy, liquidate });
    }

    componentDidMount() {
        this.calculateDefaults();

        this.subscriptions.push(this.buyFormSubject.subscribe(next => this.onFormUpdate(next, BUY_FORM_NAME)))
        this.subscriptions.push(this.liquidateFormSubject.subscribe(next => this.onFormUpdate(next, LIQUIDATE_FORM_NAME)))
    }

    componentWillUnmount() {
        this.subscriptions.forEach(element => {
            element.unsubscribe()
        });
    }

    onInputChange(event) {
        let { name, value } = event.target;
        const { state } = this;

        if (isNaN(Number(value))) {
            return;
        }

        _set(state, name, Number(value));

        this.setState(state);

        // this.recalculateFormFields({ name, value });
        // this.recalculateBR({ name, value });

        this.buyFormSubject.next(state)
        this.liquidateFormSubject.next(state)
    }

    onFormUpdate(next: State, formName: string) {
        const { controlPrice } = this.props;

        let sendAmount, br, receiveAmount: number;

        switch(next.orderUrgency) {
            case OrderUrgency.INSTANT:
                br = _round(computeBRFromROI(this.props.roi), 2)
                _set(next, `${formName}.price`, br)

                sendAmount = _get(next, `${formName}.${SEND_FIELD_NAME}`);
                receiveAmount = computeBondsAmountFromROI(br, sendAmount, controlPrice / 100)

                _set(next, `${formName}.${RECEIVE_FIELD_NAME}`, _round(receiveAmount))
                this.setState(next)

                break;
            case OrderUrgency.BY_REQUEST:
                sendAmount = _get(next, `${formName}.${SEND_FIELD_NAME}`);
                receiveAmount = _get(next, `${formName}.${RECEIVE_FIELD_NAME}`);

                console.log({ sendAmount, receiveAmount })
                const roi = computeROI(receiveAmount, sendAmount, controlPrice / 100)
                br = Math.abs(computeBRFromROI(roi / 100))
                console.log({ roi, br })

                _set(next, `${formName}.price`, _round(br, 2))
                this.setState(next)
                break;
        }
    }

    handleOnCondition() {
        this.setState({ orderUrgency: OrderUrgency.BY_REQUEST });
    }

    async handleLiquidateOrder() {
        const { state } = this;
        const { pairName, baseCurrency } = this.props;

        const bondsAmount = _get(state, `${LIQUIDATE_FORM_NAME}.${SEND_FIELD_NAME}`);

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

    onSelectOption(optionValue: Pick<MenuOption, 'value'>) {
        const { state } = this;
        const newState = { ...state, orderUrgency: Number(optionValue) }

        this.buyFormSubject.next(newState)
        this.liquidateFormSubject.next(newState)
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

        const [formName] = path.split('.');
        const currency = formName === BUY_FORM_NAME ? CurrencyEnum.WAVES : CurrencyEnum.USD_NB;
        const currencyAmount = user.balances[currency];

        if (isNaN(+currencyAmount)) return;

        const updatedValue = _round((num / 100) * Number(currencyAmount), 2);
        _set(state, path, updatedValue);
        this.setState(state);

        this.buyFormSubject.next(state)
        this.liquidateFormSubject.next(state)
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
                buyLabel: 'Place request',
                liquidateLabel: 'Place request',
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

    getSmallWarning(price): string {
        if (price >= 100) return 'Exp. BR cannot be equal to 100%'
        if (!(price >= 5 && price <= 195)) return 'Exp. BR should be >= 5% and <= 195%'
    }

    getForms() {
        const { backingRatio } = this.props;
        const { orderUrgency, buy, liquidate } = this.state;
        const { buyLabel, liquidateLabel } = this.getButtonLabels();
        const { buyClassName, liquidateClassName } = this.getButtonClassNames();

        const isBrAbove = orderUrgency == OrderUrgency.INSTANT && backingRatio >= 100;

        const brWarning = (
            <div className="br-warning">
                <span>
                    <b>Instant liquidation is possible only when BR &gt;= 100%.</b> Please use an
                    "on condition" request instead.
                </span>
            </div>
        );

        const buyForm = (
            <div className="buy-form">
                <div className="price">
                    <BaseInput
                        fieldName="Price"
                        disabled
                        smallWarning={this.getSmallWarning(buy.price)}
                    />
                    <ExpectedValueSpan label="Exp. BR" expected={`${buy.price}%`} />
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
                <Button onClick={this.handleBuyOrder} label={buyLabel} className={buyClassName} disabled={this.getSmallWarning(buy.price)}/>
            </div>
        );
        const sellForm = (
            <div className={`liquidate-form ${isBrAbove ? 'on-condition' : ''}`}>
                <div className="price">
                    <BaseInput
                        fieldName="Price"
                        disabled
                        smallWarning={this.getSmallWarning(liquidate.price)}
                    />
                    <ExpectedValueSpan label="Exp. BR" expected={`${liquidate.price}%`} />
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
                <div className="percents">{this.percentage.map(this.mapLiquidatePercentage)}</div>
                <p>
                    You will receive {liquidate.receive} USDN for {liquidate.send} NSBT when BR
                    reaches X%
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
                        disabled={this.getSmallWarning(liquidate.price)}
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
