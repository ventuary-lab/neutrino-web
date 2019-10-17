import React from 'react';

import {html} from 'components';
import './Tooltip.scss';

const bem = html.bem('Tooltip');

export default class Tooltip extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('tooltip')}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
