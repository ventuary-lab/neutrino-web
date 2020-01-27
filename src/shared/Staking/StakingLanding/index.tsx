import React from 'react';
import { round as _round } from 'lodash';
import axios from 'axios';
import { buildBem } from 'routes/LandingPage/helpers';
import LandingFooter from 'routes/LandingPage/LandingFooter';
import LandingHeader from 'routes/LandingPage/LandingHeader';
import { GlobalLinksContext } from 'shared/Layout/context';
import { TERMS_OF_USE_LABEL } from 'shared/Layout/constants';
import { omitThousandsNumber } from 'ui/global/helpers';
import { ILongPullingComponent } from 'ui/global/types';

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
interface State {
    annualYield?: number;
    totalIssued?: number;
    totalStaked?: number;
}

class StakingLanding extends React.Component<Props, State> implements ILongPullingComponent {
    _updateInterval;
    _updateTimeout;

    constructor(props) {
        super(props);

        this._updateListener = this._updateListener.bind(this);

        this._updateTimeout = 3000;

        this.state = {};
    }

    async _updateListener () {
        await this.loadExplorerData();
    }

    startListening () {
        this._updateInterval = setInterval(async () => await this._updateListener(), this._updateTimeout);
    }

    stopListening () {
        clearInterval(this._updateInterval);
    }

    async loadExplorerData() {
        const annualYieldRes = await axios.get<number>('/api/explorer/get_annual_yield');
        const totalStaked = await axios.get<number>('/api/explorer/get_staked');
        const totalIssued = await axios.get<number>('/api/explorer/get_total_issued');

        try {
            this.setState({
                annualYield: annualYieldRes.data,
                totalStaked: totalStaked.data,
                totalIssued: totalIssued.data,
            });
        } catch (err) {
            console.warn('Error occured on props fetch');
        }
    }

    componentWillMount() {
        (async () => {
            await this.loadExplorerData();
            this.startListening();
        })()
    }

    componentWillUnmount() {
        this.stopListening();
    }

    render() {
        const socLinks = [
            { icon: fbIcon, route: NEUTRINO_FACEBOOK_LINK },
            { icon: mediumIcon, route: NEUTRINO_MEDIUM_LINK },
            { icon: tgIcon, route: NEUTRINO_TELEGRAM_LINK },
            { icon: twitterIcon, route: NEUTRINO_TWITTER_LINK },
        ];

        let { annualYield = 53.7, totalIssued = 100000, totalStaked = 10000 } = this.state;
        annualYield = _round(annualYield, 2);
        totalIssued = _round(totalIssued, 2);
        totalStaked = _round(totalStaked, 2);

        const stakedFromIssuedPercent = _round((1 - ((totalIssued - totalStaked) / totalIssued)) * 100, 2);

        const mapBigNumber = (num: number) => omitThousandsNumber(_round(num));

        return (
            <div className={bem.element('main')}>
                <div
                    className={bem.element('first-part')}
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                >
                    <LandingHeader />
                </div>
                <div className={bem.element('yield-section')}>
                    <div className={bem.element('yield-section-item')}>
                        <span className={bem.element('yield-section-item-head')}>
                            Earn staking rewards with US dollar neutrino stablecoin
                        </span>
                        <p className={bem.element('yield-section-item-body')}>
                            <span className="bold">Neutrino dApp</span> distributes staking rewards
                            in <span className="bold">USDN</span> tokens derived from Waves LPoS
                            decentralized monetary policy.
                        </p>
                        <a className="base-button" href="/rpd/usd-n">
                            Start staking
                        </a>
                    </div>
                    <div className={bem.element('delim')}></div>
                    <div className={bem.element('yield-section-item', 'right')}>
                        <span className={bem.element('yield-section-romb')}>
                            <div></div>
                            <span>{annualYield}%</span>
                        </span>
                        <div>
                            <span className={bem.element('yield-section-item-head')}>
                                Average estimated annual yield
                            </span>
                            <p className={bem.element('yield-section-item-body')}>
                                This value comprises <span className="bold">6.7%</span> annual yield
                                from leasing of Waves tokens on the smart contract and{' '}
                                <span className="bold">~{stakedFromIssuedPercent}%</span> of total{' '}
                                <span className="bold">USDN</span> supply in staking: *[
                                    {mapBigNumber(totalStaked)} from {mapBigNumber(totalIssued)}
                                ]
                            </p>
                        </div>
                    </div>
                </div>
                <div className={bem.element('footer-cont')}>
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
                    <div>
                        <LandingFooter links={socLinks} />
                    </div>
                </div>
            </div>
        );
    }
}

export default StakingLanding;
