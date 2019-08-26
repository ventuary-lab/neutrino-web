import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './LeftSidebar.scss';

const bem = html.bem('LeftSidebar');

export default class LeftSidebar extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <div className={bem.block()}>
                Left
            </div>
        );
    }
}
