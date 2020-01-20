import React from 'react';
import Modal from 'react-modal';
import InlineSVG from 'svg-inline-react';
import { html, dal } from 'components';
import crossIcon from '!svg-inline-loader!static/images/landing/cross-icon.svg';
import { wavesExchange as wavesExchangeLogo } from 'static/images/guide/companies';
import wavesKeeperLogo from 'static/images/logos/waves-romb.svg';
import { BlurContext } from 'shared/Layout/context';
import { hasBooleanPropChanged } from 'shared/Layout/helpers';
import { InstallKeeperModalContext } from 'shared/Layout/context';
import { IInstallKeeperModalContext } from 'shared/Layout/types';

import './style.scss';

const bem = html.bem('LoginTypeModal');

interface Props {
    title: string;
    isOpened: boolean;
    onClose: () => void;
}
interface ModalLink {
    className?: string;
    label: string;
    img: string;
    handler: (keeperContext: IInstallKeeperModalContext) => void;
}

class LoginTypeModal extends React.Component<Props> {
    constructor(props) {
        super(props);

        this.onWebKeeperLogin = this.onWebKeeperLogin.bind(this);
        this.onWavesKeeperLogin = this.onWavesKeeperLogin.bind(this);
    }

    static contextType = BlurContext;

    componentDidUpdate(prevProps) {
        hasBooleanPropChanged(prevProps, this.props, 'isOpened', {
            becameTrue: () => this.context.blur(),
            becameFalse: () => this.context.unblur(),
        });
    }

    componentWillUnmount() {
        this.props.onClose();
        this.context.unblur();
    }

    onWebKeeperLogin(keeperContext: IInstallKeeperModalContext) {
        this.props.onClose();
        keeperContext.onWebKeeperLogin();
    }

    onWavesKeeperLogin(keeperContext: IInstallKeeperModalContext) {
        this.props.onClose();
        keeperContext.onLogin();
    }

    mapModalLink(item: ModalLink, keeperContext: IInstallKeeperModalContext) {
        return (
            <a href="#" onClick={() => item.handler(keeperContext)}>
                <div className={bem.element('login-item')}>
                    <div className={item.className || ''}>
                        <img src={item.img} className={bem.element('login-item-img')} />
                    </div>
                    <span>{item.label}</span>
                </div>
            </a>
        );
    }

    getLinks(keeperContext: IInstallKeeperModalContext) {
        const links: ModalLink[] = [
            {
                label: 'Waves Signer',
                img: wavesExchangeLogo,
                className: bem.element('we-cont'),
                handler: () => this.onWebKeeperLogin(keeperContext),
            },
            {
                label: 'Waves Keeper',
                img: wavesKeeperLogo,
                handler: () => this.onWavesKeeperLogin(keeperContext),
            }
        ];

        return links.map(item => this.mapModalLink(item, keeperContext));
    }

    render() {
        return (
            <Modal
                className={bem.block()}
                isOpen={this.props.isOpened}
                onRequestClose={this.props.onClose}
                parentSelector={() => document.body}
            >
                <div>
                    <InstallKeeperModalContext.Consumer>
                        {keeperContext => (
                            <div className={bem.element('main')}>
                                <div className={bem.element('head')}>
                                    <span>Connect a wallet to get started</span>
                                    <div
                                        className={bem.element('head-icon')}
                                        onClick={this.props.onClose}
                                    >
                                        <InlineSVG src={crossIcon} />
                                    </div>
                                </div>
                                <div className={bem.element('list')}>
                                    {this.getLinks(keeperContext)}
                                </div>
                            </div>
                        )}
                    </InstallKeeperModalContext.Consumer>
                </div>
            </Modal>
        );
    }
}

export default LoginTypeModal;
