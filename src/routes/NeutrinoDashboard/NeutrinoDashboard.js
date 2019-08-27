import React from 'react';

import {html} from 'components';

import './NeutrinoDashboard.scss';

const bem = html.bem('NeutrinoDashboard');

export default class NeutrinoDashboard extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                NeutrinoDashboard
            </div>
        );
    }
}
