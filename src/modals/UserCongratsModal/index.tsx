import React from 'react';
import Modal from 'react-modal';
import { html } from 'components';
import { BlurContext } from 'shared/Layout/context';
import usdnLogo from 'static/icons/usd-n.svg';
import neutrinoManICon from 'static/icons/neutrino-man.svg';
import graphsIcon from 'static/icons/graphs.svg';
import spotImage from 'static/icons/spot.svg';

import './style.scss';

const bem = html.bem('UserCongratsModal');

interface Props {
    title: string;
    isOpened: boolean;
    onClose: () => void;
}

class UserCongratsModal extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    static contextType = BlurContext;

    render() {
        const { title = 'Congratulations!' } = this.props;

        return (
            <Modal
                className={bem.block()}
                isOpen={this.props.isOpened}
                onRequestClose={this.props.onClose}
                parentSelector={() => document.body}
            >
                <div>
                    <div className={bem.element('main')}>
                        <div className={bem.element('title')}>
                            {title}
                        </div>
                        <div>
                            <img src={usdnLogo} alt=""/>
                            <div>
                                <span>You are holder of USD-Neutrino (USD-N) -  crypto-collateralized stablecoin.</span>
                            </div>
                            <div>
                                <a href="#"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default UserCongratsModal;
