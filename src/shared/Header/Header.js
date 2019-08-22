import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './Header.scss';

const bem = html.bem('Header');

export default class Header extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <header className={bem.block()}>
                Header
            </header>
        );
    }
}
