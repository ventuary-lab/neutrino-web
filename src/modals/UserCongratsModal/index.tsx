import React from 'react';
import Modal from 'react-modal';
import { html } from 'components';
import { BlurContext } from 'shared/Layout/context';
import usdnLogo from 'static/icons/usd-n.svg';
import neutrinoManIcon from 'static/icons/neutrino-man.svg';
import graphsIcon from 'static/icons/graphs.svg';
import spotImage from 'static/icons/spot.svg';

import './style.scss';

const bem = html.bem('UserCongratsModal');

interface Props {
    title: string;
    isOpened: boolean;
    onClose: () => void;
}
interface Link {
    logo: string;
    url: string;
    label: string;
}

class UserCongratsModal extends React.Component<Props> {

    constructor(props) {
        super(props);

        this.mapLink = this.mapLink.bind(this);
    }

    static contextType = BlurContext;

    mapLink (link: Link) {

    }

    render() {
        const { title = 'Congratulations!' } = this.props;
        const links = [
            {
                
            }
        ].map(this.mapLink);

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
                        <div className={bem.element('body')}>
                            <img className={bem.element('usdn-logo')} src={usdnLogo} alt=""/>
                            <div className={bem.element('msg')}>
                                <span>You are holder of USD-Neutrino (USD-N) -  crypto-collateralized stablecoin.</span>
                            </div>
                            <img className={bem.element('spot')} src={spotImage} />
                            <div>
                                {links}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default UserCongratsModal;
