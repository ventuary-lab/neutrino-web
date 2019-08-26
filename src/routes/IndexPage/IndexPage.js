import React from 'react';

import {html} from 'components';
import IndexSlider from 'shared/IndexSlider';

import './IndexPage.scss';

const bem = html.bem('IndexPage');

export default class IndexPage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <IndexSlider/>
            </div>
        );
    }
}
