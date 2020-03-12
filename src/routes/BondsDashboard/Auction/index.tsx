import React from 'react';
import { html } from 'components'
// import usdnIcon from 'static/icons/usd-n.svg';
import usdnIcon from 'static/icons/n_icon/light-not-filled/Neutrino_N_ICON.svg';

const bem = html.bem('AuctionDiscount');

import './style.scss'

interface Props {
    roi: number;
}

const AuctionDiscount: React.FC<Props> = ({ roi }) => {
    const percent = roi;

    return (
        <div className={bem.block()}>
            <div className={bem.element('f-grid')}>
                <div>
                    <img src={usdnIcon}/>
                </div>
                <div>
                    <div className={bem.element('y-title', 'get-usdn')}>
                        <div>Get</div>
                        <div className={bem.element('w-title')}>USDN</div>
                    </div>
                    <div className={bem.element('y-title')}>
                        with
                    </div>
                </div>
            </div>
            <div className={bem.element('s-grid')}>
                <div className={bem.element('p-title')}>
                    {percent}%
                </div>
                <div className={bem.element('y-title')}>
                    <div>current discount</div>
                    <div>NOW</div>
                </div>
            </div>
        </div>
    )
}

export default AuctionDiscount;