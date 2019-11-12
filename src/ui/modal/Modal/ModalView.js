import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import {html} from 'components';
import './ModalView.scss';

const bem = html.bem('ModalView');

export default class ModalView extends React.PureComponent {

    static propTypes = {
        onClose: PropTypes.func,
        children: PropTypes.node,
        canNotClose: PropTypes.bool,
        blurOverlay: PropTypes.bool,
    };

    static defaultProps = {
        canNotClose: false,
        blurOverlay: true,
    };

    render() {
        return (
            <div className={bem.block({
                'has-header': !!this.props.header,
            })}>
                <Modal
                    isOpen={true}
                    overlayClassName={bem.element('overlay', {
                        blur: this.props.blurOverlay,
                    })}
                    ariaHideApp={false}
                    {...this.props}
                    className={bem(
                        bem.element('modal'),
                        this.props.className
                    )}
                >
                    <div className={bem.element('inner')}>
                        {this.props.header && (
                            <div className={bem.element('header')}>
                                {this.props.header}
                            </div>
                        )}
                        {!this.props.canNotClose && (
                            <button
                                type={'button'}
                                className={bem.element('close')}
                                onClick={this.props.onClose}
                            />
                        )}
                        <div className={bem.element('content')}>
                            {this.props.children}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }

}
