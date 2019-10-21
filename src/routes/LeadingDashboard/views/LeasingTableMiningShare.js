import React from 'react';
import './LeasingTableMiningShare.scss';

import {html} from 'components';
const bem = html.bem('LeasingMiningShare');

export default class MiningShare extends React.PureComponent {
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
