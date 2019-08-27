import React from 'react';

import {html} from 'components';

import './LeadingDashboard.scss';

const bem = html.bem('LeadingDashboard');

export default class LeadingDashboard extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                LeadingDashboard
            </div>
        );
    }
}
