import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'yii-steroids/ui/modal/Modal';
import _get from 'lodash-es/get';

import {html} from 'components';
import './MessageModal.scss';

const bem = html.bem('MessageModal');

export default class MessageModal extends React.PureComponent {


    static propTypes = {
        text: PropTypes.string,
        image: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
        }),
    };

    render() {
        return (
            <Modal
                {...this.props.modalProps}
                className={bem.block({
                    'with-image': !!_get(this.props,'image.src')
                })}
            >
                <div className={bem.element('inner')}>
                    {this.props.text && (
                        <p className={bem.element('text')}>
                            {this.props.text}
                        </p>
                    )}
                    {_get(this.props,'image.src') && (
                        <img
                            className={bem.element('image')}
                            src={this.props.image.src}
                            alt={this.props.image.alt}
                        />
                    )}
                </div>
            </Modal>
        );
    }
}
