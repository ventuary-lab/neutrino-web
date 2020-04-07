import React from 'react';
import BaseInput from 'ui/form/BaseInput';
import PercentButton from 'ui/form/PercentButton';
import ExpectedValueSpan from 'shared/Auction/ExpectedValueSpan';
import Button from 'yii-steroids/ui/form/Button';

import usdnLogo from 'static/icons/usd-n.svg';
import nsbtLogo from 'static/icons/n_icon/light-not-filled/Neutrino_N_ICON.svg';

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
        const { nsbt, waves } = { nsbt: 1273, waves: 1000 }

        return (
            <div className="OrderProvider">
                <div className="buy">
                    <div className="buy-form">
                        <div>
                            <BaseInput
                                fieldName="Price"
                                iconLabel="USDN"
                                // icon={usdnLogo}
                                // value={0}
                                // onChange={this.onChangeUsdn}
                            />
                            <ExpectedValueSpan expected="4" />
                        </div>
                        <div className="percents">{this.percentage.map(this.mapPercentage)}</div>

                        <BaseInput
                            iconLabel="USDN"
                            icon={nsbtLogo}
                            value={nsbt}
                            fieldName="Receive"
                            required={true}
                            // onChange={this.onChangeUsdn}
                        />
                        <BaseInput
                            iconLabel="WAVES"
                            icon={nsbtLogo}
                            value={waves}
                            fieldName="Send"
                            required={true}
                            // onChange={this.onChangeUsdn}
                        />
                        <p>You will receive 1278 NSBT for 1000 WAVES when BR reaches X%</p>
                        <Button label="Place Request" />
                    </div>
                </div>

                <div className="liquidate"></div>
            </div>
        );
    }
}

export default OrderProvider;
