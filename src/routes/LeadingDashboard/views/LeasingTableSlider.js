import React from 'react';
import Slider from 'rc-slider';

import {html} from 'components';

import './LeasingTableSlider.scss';

const bem = html.bem('LeasingSlider');


export default class LeasingSlider extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { myLeasing } = this.props;

        const counter = (
            <div className={bem.element('counter')}>
                <span>-</span>
                <span>20</span>
                <span>+</span>
            </div>
        );

        const slider = (
            <Slider
                className={bem.element('rc-slider')}
                min={0}
                max={100}
                defaultValue={myLeasing}
            />
        );

        return (
            <div className={bem.block()}>
                {slider}
                {counter}
            </div>
        );
    }
}
