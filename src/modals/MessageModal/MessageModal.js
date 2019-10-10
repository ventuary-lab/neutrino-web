import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'yii-steroids/ui/modal/Modal';

import {html} from 'components';
import './MessageModal.scss';

const bem = html.bem('MessageModal');

export default class MessageModal extends React.PureComponent {


    static propTypes = {
        description: PropTypes.string,
    };

    render() {
        return (
            <Modal
                {...this.props.modalProps}
                className={bem.block()}
            >
                <div className={bem.element('description')}>
                    {this.props.description}
                </div>
            </Modal>
        );
    }
}
