import React from 'react';
import BaseInput from 'ui/form/BaseInput';
import PercentButton from 'ui/form/PercentButton';
import ExpectedValueSpan from 'shared/Auction/ExpectedValueSpan';
import Button from 'yii-steroids/ui/form/Button';
import CurrencyEnum from 'enums/CurrencyEnum'

// import usdnLogo from 'static/icons/usd-n.svg';
import nsbtLogo from 'static/icons/n_icon/light-not-filled/Neutrino_N_ICON.svg';
import wavesLogo from 'static/icons/wave.svg';

import './style.scss';

interface Props {}
interface State {}

enum OrderUrgency {
    BY_REQUEST = 0,
    INSTANT,
}

class OrderProvider extends React.Component<Props, State> {
    percentage: number[];

    constructor(props) {
        super(props);

        this.percentage = [5, 10, 15, 20, 25];
    }

    mapPercentage(num: number) {
        return <PercentButton label={`${num}%`} />;
    }

    render() {
        const { nsbt: nsbtValue, waves: wavesValue } = { nsbt: 1273, waves: 1000 };

        return (
            <div className="OrderProvider">
                <div className="buy">
                    <div className="buy-form">
                        <div>
                            <BaseInput
                                fieldName="Price"
                            />
                            <ExpectedValueSpan expected="4" />
                        </div>
                        <div className="percents">{this.percentage.map(this.mapPercentage)}</div>
                        <BaseInput
                            iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.USD_NB]}
                            icon={nsbtLogo}
                            value={nsbtValue}
                            fieldName="Receive"
                            required={true}
                        />
                        <BaseInput
                            iconLabel={CurrencyEnum.getLabels()[CurrencyEnum.WAVES]}
                            icon={wavesLogo}
                            value={wavesValue}
                            fieldName="Send"
                            required={true}
                        />
                        <p>You will receive {nsbtValue} NSBT for {wavesValue} WAVES when BR reaches X%</p>
                        <Button label="Place Request" />
                    </div>
                </div>

                <div className="liquidate"></div>
            </div>
        );
    }
}

export default OrderProvider;
