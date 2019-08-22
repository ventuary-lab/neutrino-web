import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './IndexPage.scss';

const bem = html.bem('IndexPage');

export default class IndexPage extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <div className={bem.block()}>
                Index Page
            </div>
        );
    }
}
