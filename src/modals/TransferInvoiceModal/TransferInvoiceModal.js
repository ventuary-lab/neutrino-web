import React from 'react';
import { replace } from 'react-router-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'yii-steroids/ui/modal/Modal';
import { Translation } from 'react-i18next';

import { html, dal } from 'components';
import TransferInfo from 'shared/TransferInfo';
// import {getPairName} from 'reducers/currency';
import PairsEnum from 'enums/PairsEnum';

import './TransferInvoiceModal.scss';

const bem = html.bem('TransferInvoiceModal');

@connect((state) => ({
    // pairName: getPairName(state),
}))
export default class TransferInvoiceModal extends React.PureComponent {
    static propTypes = {
        currency: PropTypes.string,
        address: PropTypes.string,
        amount: PropTypes.amount,
    };

    constructor() {
        super(...arguments);

        this.state = {
            isSuccess: false,
        };

        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <Modal
                        {...this.props.modalProps}
                        header={
                            this.state.isSuccess
                                ? t('modals.successful_transfer.label')
                                : t('modals.please_transfer_funds_message.label')
                        }
                        className={bem.block({
                            // 'is-success': this.state.isSuccess,
                        })}
                    >
                        <div className={bem.element('inner')}>
                            {this.state.isSuccess && (
                                <div className={bem.element('success-icon')}>
                                    <span className={'Icon Icon__successful'} />
                                </div>
                            )}
                            <TransferInfo
                                amount={this.props.amount}
                                address={this.props.address}
                                currency={this.props.currency}
                                onSubmit={
                                    this.state.isSuccess ? this.props.onClose : this._onSubmit
                                }
                                buttonLabel={this.state.isSuccess ? __('Ok') : __('Transfer')}
                            />
                        </div>
                    </Modal>
                )}
            </Translation>
        );
    }

    _onSubmit() {
        dal.transferFunds(
            PairsEnum.USDNB_USDN, //TODO
            this.props.currency,
            this.props.address,
            this.props.amount
        )
            .then(() => {
                this.setState({
                    isSuccess: true,
                });
            })
            .catch((err) => console.log('Transfer error: ', err));
    }
}
