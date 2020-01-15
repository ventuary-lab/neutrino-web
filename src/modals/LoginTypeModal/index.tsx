import React from 'react';
import Modal from 'react-modal';
import { html, dal } from 'components';
import { wavesExchange as wavesExchangeLogo } from 'static/images/guide/companies';
import wavesKeeperLogo from 'static/images/logos/waves-keeper.png';
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
            <a
                href="#"
                className={bem.element('login-item')}
                onClick={() => item.handler(keeperContext)}
            >
                <img src={item.img} className={bem.element('login-item-img')} />
                <span>{item.label}</span>
            </a>
        );
    }

    getLinks(keeperContext: IInstallKeeperModalContext) {
        const links: ModalLink[] = [
            {
                label: 'Login using Waves Keeper',
                img: wavesKeeperLogo,
                handler: () => this.onWavesKeeperLogin(keeperContext),
            },
            {
                label: ' Login using Web Keeper',
                img: wavesExchangeLogo,
                handler: () => this.onWebKeeperLogin(keeperContext),
            },
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
