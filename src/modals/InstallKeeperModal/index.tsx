import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import Button from 'yii-steroids/ui/form/Button';
import { html } from 'components';
// @ts-ignore
import browsersImage from 'static/images/guide/browsers.svg';
// @ts-ignore
import imageOne from 'static/images/guide/img1.jpg';
// @ts-ignore
import imageTwo from 'static/images/guide/img2.jpg';
// @ts-ignore
import helpIcon from 'static/images/guide/help.svg';

import './InstallKeeperModal.scss';

const bem = html.bem('InstallKeeperModal');

import { State, Props } from './types';

const customStyles: { [key: string]: string } = {
    backgroundColor: 'unset',
};

Modal.defaultStyles.overlay.backgroundColor = 'unset';
Modal.defaultStyles.overlay.zIndex = '11';

function HelpLink () {
    return (
        <a href='https://t.me/neutrino_protocol_group' target='_blank' className={bem.element('tg-link')}>
            <img src={helpIcon}/>
            <span>Ask for help in Telegram group</span>
        </a>
    )
}

class InstallKeeperModal extends React.Component {
    readonly state: State;
    readonly props: Props;
    readonly sliderConfig: { [key: string]: any };
    sliderRef: React.RefObject<any>;

    constructor(props: Props) {
        super(props);

        this.getPrevView = this.getPrevView.bind(this);
        this.getNextView = this.getNextView.bind(this);
        this.getMainView = this.getMainView.bind(this);
        this.isFirstActive = this.isFirstActive.bind(this);
        this.onChangeIndex = this.onChangeIndex.bind(this);

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
                        <img src={imageOne} />
                    </div>
                    <HelpLink />
                </div>
            </>
        );
    }

    getThirdView() {
        return (
            <>
                <div className={bem.element('third-view')}>
                    <h3>Check Waves Keeper permissions</h3>
                    <div>
                        <div>
                            If you haven’t yet given Waves Keeper access to Ventuary DAO, you will
                            need to do the following steps: Open Waves Keeper. Go to Settings menu
                            (in the right upper corner) Open Permissions Control menu Give access to
                            beta.ventuary.space by clicking a power button icon on the left
                        </div>
                        <img src={imageTwo} />
                    </div>
                    <HelpLink />
                </div>
            </>
        );
    }

    getPrevView() {
        if (!this.sliderRef.current) return;

        this.sliderRef.current.slickPrev();
    }

    getNextView() {
        if (!this.sliderRef.current) return;

        this.sliderRef.current.slickNext();
    }

    render() {
        const views = [this.getMainView(), this.getSecondView(), this.getThirdView()];

        return (
            <div>
                <Modal className={bem.block()} isOpen={this.props.isOpened} style={customStyles}>
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
                            label={'Next'}
                        />
                        <div></div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default InstallKeeperModal;
