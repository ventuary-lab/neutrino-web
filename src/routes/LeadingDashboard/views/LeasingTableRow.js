import React from 'react';
import Favorites from './LeasingTableFavorites';
import MiningShare from './LeasingTableMiningShare';
import LeasersPayouts from './LeasingTablePayouts';
import LeasingSlider from './LeasingTableSlider';

import './LeasingTableRow.scss';

import {html} from 'components';
const bem = html.bem('LeasingTableRow');

export default class LeasingTableRow extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { leaser: { address, website, miningShare, leasersPayouts, myLeasing }, index } = this.props;
        const num = index + 1;

        return (
            <div className={bem.block()}>
                <div className={bem.element('td', 'num')}>
                    {num}
                </div>
                <div className={bem.element('td', 'favorites')}>
                    <Favorites />
                </div>
                <div className={bem.element('td', 'address')}>
                    {address}
                </div>
                <div className={bem.element('td', 'site')}>
                    {website}
                </div>
                <div className={bem.element('td', 'mining')}>
                    <MiningShare {...miningShare}/>
                </div>
                <div className={bem.element('td', 'payouts')}>
                    <LeasersPayouts {...leasersPayouts}/>
                </div>
                <div className={bem.element('td', 'leasing')}>
                    <LeasingSlider myLeasing={myLeasing}/>
                </div>
            </div>
        );
    }
}
