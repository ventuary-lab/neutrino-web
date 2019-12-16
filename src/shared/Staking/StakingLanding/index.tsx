import React from 'react';
import { buildBem } from 'routes/LandingPage/helpers';
import LandingFooter from 'routes/LandingPage/LandingFooter';
import LandingHeader from 'routes/LandingPage/LandingHeader';
import { GlobalLinksContext } from 'shared/Layout/context';
import { TERMS_OF_USE_LABEL } from 'shared/Layout/constants';

import {
    NEUTRINO_FACEBOOK_LINK,
    NEUTRINO_MEDIUM_LINK,
    NEUTRINO_TELEGRAM_LINK,
    NEUTRINO_TWITTER_LINK,
} from 'ui/global/variables';

const backgroundImage = 'static/images/landing/background.png';
const fbIcon = 'static/images/landing/socials/fb-icon.svg';
const mediumIcon = 'static/images/landing/socials/medium-icon.svg';
const tgIcon = 'static/images/landing/socials/tg-icon.svg';
const twitterIcon = 'static/images/landing/socials/twitter.svg';

import './style.scss';

const bem = buildBem('StakingLanding');

interface Props {}
// interface State {}

class StakingLanding extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const socLinks = [
            { icon: fbIcon, route: NEUTRINO_FACEBOOK_LINK },
            { icon: mediumIcon, route: NEUTRINO_MEDIUM_LINK },
            { icon: tgIcon, route: NEUTRINO_TELEGRAM_LINK },
            { icon: twitterIcon, route: NEUTRINO_TWITTER_LINK },
        ];

        return (
            <div className={bem.element('main')}>
                <div
                    className={bem.element('first-part')}
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                >
                    <LandingHeader />
                </div>
                <div className={bem.element('yield-section')}>
                    <div>
                        <h1>Earn staking rewards with us dollar neutrino stablecoin</h1>
                        <p>
                            Neutrino dApp distributes staking rewards in USD-N tokens derived from
                            Waves LPoS decentralized monetary policy.
                        </p>
                        <button className={bem.element('start-staking-btn')}>Start staking</button>
                    </div>
                    <div></div>
                </div>
                <GlobalLinksContext.Consumer>
                    {context => {
                        const tosLink = context.links.find(
                            link => link.label === TERMS_OF_USE_LABEL
                        ).url;
                        return (
                            <div className="tos-link">
                                <a href={tosLink} target="_blank">
                                    {TERMS_OF_USE_LABEL}
                                </a>
                            </div>
                        );
                    }}
                </GlobalLinksContext.Consumer>
                <LandingFooter links={socLinks} />
            </div>
        );
    }
}

export default StakingLanding;
