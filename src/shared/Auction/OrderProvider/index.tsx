import React from 'react';
import BaseInput from 'ui/form/BaseInput';
import PercentButton from 'ui/form/PercentButton';
import ExpectedValueSpan from 'shared/Auction/ExpectedValueSpan';
import Button from 'yii-steroids/ui/form/Button';
import CurrencyEnum from 'enums/CurrencyEnum';
import BaseSelectInput, { SelectOption } from 'ui/form/BaseSelectInput';
import TabSelector from 'ui/global/TabSelector';

import usdnLogo from 'static/icons/usd-n.svg';
import nsbtLogo from 'static/icons/n_icon/light-not-filled/Neutrino_N_ICON.svg';
import wavesLogo from 'static/icons/wave.svg';

import './style.scss';

enum OrderUrgency {
    BY_REQUEST = 0,
    INSTANT,
}
interface Props {}
interface State {
    orderUrgency: OrderUrgency;
}

class OrderProvider extends React.Component<Props, State> {
    percentage: number[];

    constructor(props) {
        super(props);

        this.getForms = this.getForms.bind(this);
        this.onSelectOption = this.onSelectOption.bind(this);

        this.percentage = [5, 10, 15, 20, 25];

        this.state = {
            orderUrgency: OrderUrgency.BY_REQUEST,
        };
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

    mapPercentage(num: number) {
        return <PercentButton label={`${num}%`} />;
    }

    getForms() {
        const { orderUrgency } = this.state;
        const { nsbt: nsbtValue, usdn: usdnValue, waves: wavesValue } = {
            nsbt: 1273,
            waves: 1000,
            usdn: 352345,
        };

        const buyForm = (
            <div className="buy-form">
                <div className="price">
                    <BaseInput fieldName="Price" />
                    <ExpectedValueSpan expected="4" />
                </div>
                <div className="percents">{this.percentage.map(this.mapPercentage)}</div>
                <BaseInput
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}
                    icon={nsbtLogo}
                    value={nsbtValue}
                    fieldName="Receive"
                    required={true}
                    disabled={orderUrgency == OrderUrgency.INSTANT}
                />
                <BaseInput
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.WAVES]}
                    icon={wavesLogo}
                    value={wavesValue}
                    fieldName="Send"
                    required={true}
                />
                <p>
                    You will receive {nsbtValue} NSBT for {wavesValue} WAVES when BR reaches X%
                </p>
                <Button label={`Buy ${CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}`} />
            </div>
        );
        const sellForm = (
            <div className="liquidate-form">
                <div className="price">
                    <BaseInput fieldName="Price" />
                    <ExpectedValueSpan expected="4" />
                </div>
                <div className="percents">{this.percentage.map(this.mapPercentage)}</div>
                <BaseInput
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.USD_N]}
                    icon={usdnLogo}
                    value={usdnValue}
                    fieldName="Receive"
                    required={true}
                    disabled={orderUrgency == OrderUrgency.INSTANT}
                />
                <BaseInput
                    iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.WAVES]}
                    icon={wavesLogo}
                    value={wavesValue}
                    fieldName="Send"
                    required={true}
                />
                <p>
                    You will receive {nsbtValue} USDN for {wavesValue} WAVES when BR reaches X%
                </p>
                <Button
                    color="danger"
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
