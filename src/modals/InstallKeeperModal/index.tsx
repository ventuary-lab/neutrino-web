import React from 'react';
import _ from 'lodash';
import Modal from 'react-modal';
import Slider from 'react-slick';
import Button from 'yii-steroids/ui/form/Button';
import { html, store } from 'components';
import { openModal } from 'yii-steroids/actions/modal';
import WarningMobileModal from 'modals/WarningMobileModal';
import crossIcon from 'static/images/landing/cross-icon.svg';
import browsersImage from 'static/images/guide/browsers.svg';
import imageOne from 'static/images/guide/img1.jpg';
import imageTwo from 'static/images/guide/img2.jpg';
import helpIcon from 'static/images/guide/help.svg';
import playIcon from 'static/images/guide/playbutton.svg';
import * as companyImages from 'static/images/guide/companies';

import './InstallKeeperModal.scss';

const bem = html.bem('InstallKeeperModal');

import { State, Props } from './types';

const customStyles: { [key: string]: string } = {
    backgroundColor: 'unset',
};

Modal.defaultStyles.overlay.backgroundColor = 'unset';
Modal.defaultStyles.overlay.zIndex = '11';

function HelpLink() {
    return (
        <>
            <a
                href="https://youtu.be/8Hs0jEe8E3c"
                target="_blank"
                className={bem.element('tg-link')}
            >
                <img src={playIcon} />
                <span>Watch video instructions</span>
            </a>
            <a
                href="https://t.me/neutrino_protocol_group"
                target="_blank"
                className={bem.element('tg-link')}
            >
                <img src={helpIcon} />
                <span>Ask for help in Telegram group</span>
            </a>
        </>
    );
}

interface ImageLink {
    [key: string]: any;
    link: string;
    img: string;
    title: string;
}

class InstallKeeperModal extends React.Component<Props, State> {
    readonly sliderConfig: { [key: string]: any };
    sliderRef: React.RefObject<any>;
    views: React.ReactNode[];
    links: ImageLink[];

    constructor(props: Props) {
        super(props);

        this.getPrevView = this.getPrevView.bind(this);
        this.getNextView = this.getNextView.bind(this);
        this.getMainView = this.getMainView.bind(this);
        this.getCompaniesView = this.getCompaniesView.bind(this);
        this.isFirstActive = this.isFirstActive.bind(this);
        this.onChangeIndex = this.onChangeIndex.bind(this);
        this.getNextButtonLabel = this.getNextButtonLabel.bind(this);

        this.state = {
            isOpened: props.isOpened,
            currentViewIndex: 0,
        };

        this.sliderConfig = {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            afterChange: this.onChangeIndex,
        };

        this.sliderRef = React.createRef();

        this.links = [
            {
                link: 'https://www.binance.com/en/trade/WAVES_BTC',
                img: companyImages.binance,
                title: 'Binance',
            },
            {
                link: 'https://www.kraken.com/prices',
                img: companyImages.kraken,
                title: 'Kraken',
            },
            {
                link: 'https://global.bittrex.com/Market/Index?MarketName=btc-WAVES',
                img: companyImages.bittrex,
                title: 'Bittrex',
            },
            {
                link: 'https://www.huobi.co/en-us/exchange/waves_btc/',
                img: companyImages.huobi,
                title: 'Huobi',
            },
            {
                link:
                    'https://waves.exchange/dex?assetId1=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p&assetId2=8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS',
                img: companyImages.wavesExchange,
                title: 'Waves Exchange',
            },
            {
                link: 'https://changelly.com/',
                img: companyImages.changelly,
                title: 'Changelly',
            },
            {
                link: 'https://shapeshift.io/#/coins',
                img: companyImages.shapeshift,
                title: 'Shapeshift',
            },
        ];

        this.views = [
            this.getMainView(),
            this.getSecondView(),
            this.getThirdView(),
            this.getCompaniesView(),
        ];
    }

    onChangeIndex(index: number) {
        this.setState({ currentViewIndex: index });
    }

    isFirstActive() {
        return this.state.currentViewIndex === 0;
    }

    getCurrentView() {
        switch (this.state.currentViewIndex) {
            case 0:
                return this.getMainView();
        }
    }

    getMainView() {
        return (
            <div>
                <div className={bem.element('main-view')}>
                    <h3>Please install Waves Keeper first</h3>
                    <p>
                        It is a browser extension that allows to create your Waves wallet and manage
                        your private keys to interact with our platform
                    </p>
                    <span>Available in Chrome, Firefox, Edge, Opera and Brave</span>
                    <img src={browsersImage} />

                    <a
                        className={bem.element('link')}
                        href="https://wavesplatform.com/technology/keeper"
                        target="_blank"
                    >
                        <Button
                            block
                            className={bem.element('install-button')}
                            label={'Install Waves Keeper'}
                        />
                    </a>
                    <HelpLink />
                </div>
            </div>
        );
    }

    getNextButtonLabel() {
        return this.views.length - 1 === this.state.currentViewIndex ? 'Got It' : 'Next';
    }

    getSecondView() {
        return (
            <>
                <div className={bem.element('second-view')}>
                    <h3>Create a Waves wallet</h3>
                    <div>
                        <div>
                            Click “Add account” in your Waves Keeper browser extension and select
                            “Create a new account”, or click “Import Account” below  if you already
                            have a Waves wallet.
                            <br />
                            Don’t forget to make sure that the extension is in "Mainnet" mode
                            <span>If you’ve done this, click on “Got it” to proceed!</span>
                        </div>
                        <img src={imageOne} className={bem.element('img-keeper')} />
                    </div>
                    <HelpLink />
                </div>
            </>
        );
    }

    getCompaniesView() {
        const mapIcon = (item: ImageLink) => (
            <a href={item.link} target="_blank">
                <img src={item.img} />
                <span>Buy WAVES on {item.title}</span>
            </a>
        );

        const images = this.links.map(mapIcon);

        return (
            <div className={bem.element('companies-view')}>
                <h3>Finally, deposit waves to your wallet</h3>
                <div className={bem.element('companies-flex')}>
                    <div>{images.slice(0, -2)}</div>
                    <div>{images.slice(-2)}</div>
                </div>
            </div>
        );
    }

    getThirdView() {
        return (
            <>
                <div className={bem.element('third-view')}>
                    <h3>Check Waves Keeper permissions</h3>
                    <div>
                        <div>
                            If you haven’t yet given Waves Keeper access to Neutrino, you will need
                            to do the following steps: Open Waves Keeper. Go to Settings menu (in
                            the right upper corner) Open Permissions Control menu Give access to
                            beta.neutrino.at by clicking a power button icon on the left
                        </div>
                        <img src={imageTwo} className={bem.element('img-keeper')} />
                    </div>
                    <HelpLink />
                </div>
            </>
        );
    }

    getPrevView() {
        if (!this.sliderRef.current) {
            return;
        }

        this.sliderRef.current.slickPrev();
    }

    getNextView() {
        if (!this.sliderRef.current) {
            return;
        }

        if (this.views.length - 1 === this.state.currentViewIndex) {
            if (document.body.offsetWidth < 650) {
                // store.dispatch(openModal(WarningMobileModal));
            } else {
                window.open('https://wavesplatform.com/technology/keeper');
            }
            return;
        }

        this.sliderRef.current.slickNext();
    }

    render() {
        const { views } = this;

        return (
            <div>
                <Modal
                    className={bem.block()}
                    isOpen={this.props.isOpened}
                    style={customStyles}
                    onRequestClose={this.props.onClose}
                >
                    <img
                        className={bem.element('cross')}
                        src={crossIcon}
                        alt="cross"
                        onClick={this.props.onClose}
                    />
                    <h1>Welcome to the Neutrino!</h1>
                    <div className={bem.element('cont')}>
                        <Slider {...this.sliderConfig} ref={this.sliderRef}>
                            {views}
                        </Slider>
                    </div>
                    <div className={bem.element('buttons')}>
                        {!this.isFirstActive() ? (
                            <Button
                                block
                                onClick={this.getPrevView}
                                className={bem.element('next-button')}
                                label={'Back'}
                            />
                        ) : (
                            <div></div>
                        )}
                        <Button
                            block
                            onClick={this.getNextView}
                            className={bem.element('next-button')}
                            label={this.getNextButtonLabel()}
                        />
                        <div></div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default InstallKeeperModal;
