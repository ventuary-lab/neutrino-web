import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './Footer.scss';

const bem = html.bem('Footer');

export default class Footer extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <footer className={bem.block()}>
                Footer
            </footer>
        );
    }
}
