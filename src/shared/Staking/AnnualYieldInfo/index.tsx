import React from 'react';

interface Props {}
interface State {}

class AnnualYieldInfo extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Info</h1>
                <div>
                    <div>
                        <span>6.85</span>
                        <span>%</span>
                    </div>
                    <span>Average Estimated Annual Yield</span>
                    <span>
                        Estimated Annual Yield is depending on waves token price, can be 1%-20%
                        based on market situation
                    </span>
                </div>
            </div>
        );
    }
}

export default AnnualYieldInfo;
