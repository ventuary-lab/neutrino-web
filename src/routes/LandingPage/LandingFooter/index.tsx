import React from 'react';
import { buildBem } from 'ui/global/helpers';
import { SocLink } from 'ui/global/types';

import './style.scss';

const bem = buildBem('LandingFooter');

const poweredByWavesLogo = 'static/images/landing/powered_by_waves.svg';

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
        <div className={bem.element('powered-by-waves')}>
            <img src={poweredByWavesLogo} alt="powered by waves" />
        </div>
    </>
)

export default LandingFooter;
