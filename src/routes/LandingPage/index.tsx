import React from 'react';
import { html } from 'components';
import LandingHeader from './LandingHeader';
import backgroundImage from 'static/images/landing/background.png';
import usdnLogo from 'static/icons/usd-n.svg';
import boxesImage from 'static/images/landing/boxes.svg';
import coloredBoxesImage from 'static/images/landing/colored_boxes.svg';
import fbIcon from 'static/images/landing/socials/fb-icon.svg';
import mediumIcon from 'static/images/landing/socials/medium-icon.svg';
import tgIcon from 'static/images/landing/socials/tg-icon.svg';
import twitterIcon from 'static/images/landing/socials/twitter.svg';
import poweredByWavesLogo from 'static/images/landing/powered_by_waves.svg';

import './style.scss';

const bem = html.bem('LandingPage');

interface Props {}

type SocLink = { icon: string; route: string };

class LandingPage extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const boxes = Array(2).fill(<img src={boxesImage} />);
        const coloredBoxes = Array(2).fill(<img src={coloredBoxesImage} />);
        const socLinks = [
            { icon: fbIcon, route: 'https://www.facebook.com/Neutrino-Protocol-106351204088941/' },
            { icon: mediumIcon, route: 'https://medium.com/@neutrinoteam' },
            { icon: tgIcon, route: 'https://t.me/neutrino_protocol_group' },
            { icon: twitterIcon, route: 'https://twitter.com/neutrino_proto' },
        ].map((item: SocLink) => (
            <a href={item.route} target="_blank">
                <img src={item.icon} />
            </a>
        ));

        const paragraph = (
            <p>
                <span>
                    Dollars neutrino (USD-N) is a crypto-collateralized token pegged to the one US
                    dollar.
                </span>
                <span>
                    The first stablecoin protocol which let neutrino holders an ability of staking
                    with rewards from the waves platform’s economy.
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
                        <span>Decentralized price stable currency</span>
                        {paragraph}
                    </div>
                </div>
                <div className={bem.element('second-part')}>
                    <div className={bem.element('abs-boxes', 'top')}>{boxes}</div>
                    <div className={bem.element('abs-boxes', 'bottom')}>{coloredBoxes}</div>
                    <div className={bem.element('romb')}>
                        <div className={bem.element('inner-romb')}>
                            <div className={bem.element('romb-text')}>
                                <span>
                                    <img src={usdnLogo} className={bem.element('usdn-logo')} />
                                    <span>1</span>
                                </span>
                                <span>=</span>
                                <span>$1</span>
                            </div>
                        </div>
                    </div>
                    <div className={bem.element('action-buttons')}>
                        <a className="base-button" href="/neutrino/usd-n">
                            Buy USD-N
                        </a>
                        <a
                            className="base-button alt"
                            href="https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354"
                        >
                            How it works
                        </a>
                    </div>
                    <div className={bem.element('mobile-info')}>{paragraph}</div>
                    <div className={bem.element('tos')}>
                        <a href="https://docs.google.com/document/d/1gQPtVj5LZ9tbZlyBUYlSYvqAjPpKmEH3ksfiIYlp5CM/edit?usp=sharing">
                            Terms of Service
                        </a>
                    </div>
                    <div className={bem.element('soc-links')}>{socLinks}</div>
                    <div className={bem.element('powered-by-waves')}>
                        <img src={poweredByWavesLogo} alt="powered by waves" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
