import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './RightSidebar.scss';

const bem = html.bem('RightSidebar');

export default class RightSidebar extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <div className={bem.block()}>
                Right
            </div>
        );
    }
}
