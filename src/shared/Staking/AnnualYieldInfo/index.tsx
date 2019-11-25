import React from 'react';
import { html } from 'components';

const bem = html.bem('AnnualYieldInfo');

import './style.scss';

interface Props {}
interface State {}

class AnnualYieldInfo extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={bem.block()}>
                <span>Info</span>
                <div className={bem.element('main')}>
                    <div className={bem.element('yield-percent')}>
                        <span>6.85</span>
                        <span>%</span>
                    </div>
                    <span className={bem.element('title')}>Average Estimated Annual Yield</span>
                    <span className={bem.element('body')}>
                        Estimated Annual Yield is depending on waves token price, can be 1%-20%
                        based on market situation
                    </span>
                </div>
            </div>
        );
    }
}

export default AnnualYieldInfo;
