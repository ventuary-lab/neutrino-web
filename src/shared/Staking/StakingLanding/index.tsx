
import React from 'react';
import { buildBem } from 'routes/LandingPage/helpers';
import LandingFooter from 'routes/LandingPage/LandingFooter';
import LandingHeader from 'routes/LandingPage/LandingHeader';

import {
    NEUTRINO_FACEBOOK_LINK,
    NEUTRINO_MEDIUM_LINK,
    NEUTRINO_TELEGRAM_LINK,
    NEUTRINO_TWITTER_LINK,
} from 'ui/global/variables';

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

    render () {
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
                <LandingFooter links={socLinks}/>
            </div>
        )
    }
}

export default StakingLanding;

