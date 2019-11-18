import React from 'react';
import Modal from 'react-modal';

import './InstallKeeperModal.scss';

import { State } from './types';

const customStyles = {
    backgroundColor: 'unset'
}

Modal.setAppElement('#root');

class InstallKeeperModal extends React.Component {
    readonly state: State;

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            isOpened: false,
        };
    }

    openModal () {
        this.setState({ isOpened: true });
    }

    closeModal () {
        this.setState({ isOpened: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    className="InstallKeeperModal"
                    isOpen={this.state.isOpened}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                </Modal>
            </div>
        );
    }
}

export default InstallKeeperModal;
