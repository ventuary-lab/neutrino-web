import React from 'react';

import {html} from 'components';

import './BoundsDashboard.scss';

const bem = html.bem('BoundsDashboard');

export default class BoundsDashboard extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                BoundsDashboard
            </div>
        );
    }
}
