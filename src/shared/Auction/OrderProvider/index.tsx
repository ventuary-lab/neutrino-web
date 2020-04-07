import React from 'react';
import BaseInput from 'ui/form/BaseInput';
import PercentButton from 'ui/form/PercentButton';
import Button from 'yii-steroids/ui/form/Button';

import usdnLogo from 'static/icons/usd-n.svg';

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

    mapPercentage (num: number) {
        return <PercentButton label={`${num}%`}/>
    }

    render() {
        return (
            <div className="OrderProvider">
                <div className="buy">
                    <BaseInput
                        iconLabel="USDN"
                        // icon={usdnLogo}
                        // value={0}
                        // onChange={this.onChangeUsdn}
                    />
                    <div className='percents'>
                        {this.percentage.map(this.mapPercentage)}
                    </div>

                    <BaseInput
                        iconLabel="USDN"
                        icon={usdnLogo}
                        value={0}
                        // onChange={this.onChangeUsdn}
                    />
                    <BaseInput
                        iconLabel="USDN"
                        icon={usdnLogo}
                        value={0}
                        // onChange={this.onChangeUsdn}
                    />
                    <Button label='Place Request'/>
                </div>

                <div className="liquidate"></div>
            </div>
        );
    }
}

export default OrderProvider;
