import React from 'react';
import './LeasingTablePayouts.scss';

import {html} from 'components';
const bem = html.bem('LeasersPayouts');

export default class LeasersPayouts extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { absolute, percent } = this.props;

        return (
            <div className={bem.block()}>
                <span className={bem.element('abs')}>
                    {absolute}
                </span>
                <div className={bem.element('bar')}>
                    <div style={{width: `${percent}%`}} className={bem.element('progress')}></div>
                    <span className={bem.element('percent')}>{`${percent}%`}</span>
                </div>
            </div>
        );
    }
}
