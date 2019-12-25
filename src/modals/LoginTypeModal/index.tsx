import React from 'react';
import Modal from 'react-modal';
import { html, dal } from 'components';
// import { goToPage } from 'yii-steroids/actions/navigation';
import { BlurContext } from 'shared/Layout/context';
import {
    InstallKeeperModalContext,
    // GlobalLinksContext,
    // LoginTypeModalContext,
} from 'shared/Layout/context';

import './style.scss';

const bem = html.bem('LoginTypeModal');

interface Props {
    title: string;
    isOpened: boolean;
    onClose: () => void;
}

class LoginTypeModal extends React.Component<Props> {
    constructor(props) {
        super(props);

        this.onKeeperLogin = this.onKeeperLogin.bind(this);
        this.onWebKeeperLogin = this.onWebKeeperLogin.bind(this);
    }

    static contextType = BlurContext;

    componentDidUpdate() {
        if (this.props.isOpened) {
            this.context.blur();
        } else {
            this.context.unblur();
        }
    }

    componentWillUnmount() {
        this.props.onClose();
        this.context.unblur();
    }

    onWebKeeperLogin() {
        dal.loginByWebKeeper();
    }

    onKeeperLogin() {}

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
                                    <div>
                                        <a href="#" onClick={() => {
                                            this.props.onClose();
                                            keeperContext.onLogin();
                                        }}>
                                            Login using Waves Keeper
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" onClick={this.onWebKeeperLogin}>
                                            Login using Web Keeper
                                        </a>
                                    </div>
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
