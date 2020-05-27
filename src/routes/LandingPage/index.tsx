import React from 'react';
// import { html, dal } from 'components';
import { Translation } from 'react-i18next';

import { buildBem } from './helpers';
import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';
import { GlobalLinksContext } from 'shared/Layout/context';
import { TERMS_OF_USE_LABEL } from 'shared/Layout/constants';
// import { SocLink } from 'ui/global/types';
import {
    NEUTRINO_FACEBOOK_LINK,
    NEUTRINO_MEDIUM_LINK,
    NEUTRINO_TELEGRAM_LINK,
    NEUTRINO_TWITTER_LINK,
} from 'ui/global/variables';

const backgroundImage = 'static/images/landing/background.png';
const usdnLogo = 'static/icons/usd-n_blue.svg';
const boxesImage = 'static/images/landing/boxes.svg';
const coloredBoxesImage = 'static/images/landing/colored_boxes.svg';
const fbIcon = 'static/images/landing/socials/fb-icon.svg';
const mediumIcon = 'static/images/landing/socials/medium-icon.svg';
const tgIcon = 'static/images/landing/socials/tg-icon.svg';
const twitterIcon = 'static/images/landing/socials/twitter.svg';

import './style.scss';

const bem = buildBem('LandingPage');

interface Props {}

class LandingPage extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const boxes = Array(2).fill(<img src={boxesImage} />);
        const coloredBoxes = Array(2).fill(<img src={coloredBoxesImage} />);

        const socLinks = [
            { icon: fbIcon, route: NEUTRINO_FACEBOOK_LINK },
            { icon: mediumIcon, route: NEUTRINO_MEDIUM_LINK },
            { icon: tgIcon, route: NEUTRINO_TELEGRAM_LINK },
            { icon: twitterIcon, route: NEUTRINO_TWITTER_LINK },
        ];

        return (
            <Translation>
                {(t) => {
                    const paragraph = (
                        <p>
                            <span>
                                {t('landing.first_paragraph.label')}.&nbsp;
                            </span>
                            <span>
                                {t('landing.second_paragraph.label')}
                            </span>
                        </p>
                    );

                    return (
                        <div className={bem.element('main')}>
                            <div
                                className={bem.element('first-part')}
                                style={{ backgroundImage: `url('${backgroundImage}')` }}
                            >
                                <LandingHeader />
                                <div className={bem.element('txt-body')}>
                                    <span>{t('landing.neutrino_main_title.label')}</span>
                                    {paragraph}
                                </div>
                            </div>
                            <div className={bem.element('second-part')}>
                                <div className={bem.element('abs-boxes', 'top')}>{boxes}</div>
                                <div className={bem.element('abs-boxes', 'bottom')}>
                                    {coloredBoxes}
                                </div>
                                <div className={bem.element('romb')}>
                                    <div className={bem.element('inner-romb')}>
                                        <div className={bem.element('romb-text')}>
                                            <span>
                                                <img
                                                    src={usdnLogo}
                                                    className={bem.element('usdn-logo')}
                                                />
                                                <span>1</span>
                                            </span>
                                            <span>=</span>
                                            <span>$1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={bem.element('action-buttons')}>
                                    <a
                                        className="base-button"
                                        target="_blank"
                                        href="/neutrino/usd-n"
                                    >
                                         {t('landing.get_usdn.label')}
                                    </a>
                                    <a
                                        className="base-button alt"
                                        target="_blank"
                                        href="https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354"
                                    >
                                         {t('landing.how_it_works.label')}
                                    </a>
                                </div>
                                <div className={bem.element('mobile-info')}>{paragraph}</div>
                                <GlobalLinksContext.Consumer>
                                    {(context) => {
                                        const tosLink = context.links.find(
                                            (link) => link.label === TERMS_OF_USE_LABEL
                                        ).url;

                                        const email = 'info@neutrino.at';
                                        return (
                                            <div className={bem.element('links-cont')}>
                                                <div className={bem.element('custom-link')}>
                                                    <a href={tosLink} target="_blank">
                                                        {TERMS_OF_USE_LABEL}
                                                    </a>
                                                </div>
                                                <div className={bem.element('custom-link')}>
                                                    <a href={`mailto:${email}`} target="_blank">
                                                        {email}
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    }}
                                </GlobalLinksContext.Consumer>
                                <LandingFooter links={socLinks} />
                            </div>
                        </div>
                    );
                }}
            </Translation>
        );
    }
}

export default LandingPage;
