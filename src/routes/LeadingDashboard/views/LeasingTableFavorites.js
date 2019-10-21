import React from 'react';
import './LeasingTableFavorites.scss';
import InlineSVG from 'svg-inline-react';

import {html} from 'components';
const bem = html.bem('LeasingFavorites');

export default class Favorites extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={bem.block()}>
                <InlineSVG className={bem.element('star')} src={require('!svg-inline-loader?classPrefix=star-!../../../static/icons/star.svg')} />
            </div>
        );
    }
}
