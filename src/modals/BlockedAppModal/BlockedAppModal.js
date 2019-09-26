import React from 'react';
import Modal from 'yii-steroids/ui/modal/Modal';

import {html} from 'components';
import './BlockedAppModal.scss';
import illustration from '../../static/images/modal-blocked-illustration.svg';

const bem = html.bem('BlockedAppModal');

export default class BlockedAppModal extends React.PureComponent {

    render() {
        return (
            <Modal
                {...this.props.modalProps}
                className={bem.block()}
                canNotClose
                blurOverlay
            >
                <div className={bem.element('inner')}>
                    <div className={bem.element('text')}>
                        {__('For security and fraud prevention reasons, confirmation by 2/3 of oracles and admins is required')}
                    </div>
                    <img
                        className={bem.element('illustration')}
                        src={illustration}
                        alt='blocked illustration'
                    />
                </div>
            </Modal>
        );
    }
}
