import React from 'react';
import Modal from 'yii-steroids/ui/modal/Modal';
import Warning from './views/Warning';

import {html} from 'components';
import './WarningMobileModal.scss';

const bem = html.bem('WarningMobileModal');

export default class WarningMobileModal extends React.PureComponent {

    render() {
        return (
            <Modal
                {...this.props.modalProps}
                className={bem.block()}
            >
                <Warning />
            </Modal>
        );
    }
}