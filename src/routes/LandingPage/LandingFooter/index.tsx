import React from 'react';
import { buildBem } from '../helpers';
import { SocLink } from 'ui/global/types';

import './style.scss';

const bem = buildBem('LandingFooter');

const poweredByWavesLogo = 'static/icons/wx-icon2.svg';

interface Props {
    links: SocLink[]
}

const mapLink = (item: SocLink) => (
    <a href={item.route} target="_blank">
        <img src={item.icon} />
    </a>
)

const LandingFooter: React.FC<Props> = ({ links }) => (
    <>
        <div className={bem.element('soc-links')}>{links.map(mapLink)}</div>
        <div className={bem.element('powered-by-wx')}>
            <a href='https://waves.exchange' target='_blank'>
            <img src={poweredByWavesLogo} alt="powered by wx" />
            </a>
        </div>
    </>
)

export default LandingFooter;
