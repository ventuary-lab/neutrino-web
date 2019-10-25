import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';
import Modal from 'yii-steroids/ui/modal/Modal';


import {html} from 'components';
import CopyToClipboard from 'shared/CopyToClipboard';
import TransferForm from 'shared/TransferForm';
import {getPairName} from 'reducers/currency';

import './CreateInvoiceModal.scss';

const bem = html.bem('CreateInvoiceModal');
const FORM_ID = 'CreateInvoiceModalForm';


@connect(
    state => ({
        pairName: getPairName(state),
        formValues: getFormValues(FORM_ID)(state),
    })
)
export default class CreateInvoiceModal extends React.PureComponent {


    static propTypes = {
        currency: PropTypes.string,
    };

    constructor() {
        super(...arguments);

        this.state = {
            invoiceLink: '',
        };

        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {

        return (
            <Modal
                {...this.props.modalProps}
                className={bem.block()}
            >
                <div className={bem.element('header')}>
                    {__('Create Invoice')}
                </div>
                <div className={bem.element('inner')}>
                    <div className={bem.element('form')}>
                        <TransferForm
                            formId={FORM_ID}
                            onSubmit={this._onSubmit}
                            buttonLabel={__('Get shareable link')}
                        />
                    </div>
                    {this.state.invoiceLink && (
                        <div className={bem.element('link-block')}>
                            <span className={bem.element('link')}>
                                {this.state.invoiceLink}
                            </span>
                            <CopyToClipboard copyText={this.state.invoiceLink}/>
                        </div>
                    )}
                </div>
            </Modal>
        );
    }

    _onSubmit(address, amount) {
        const link = `${location.origin}?invoiceAddress=${address}&invoiceAmount=${amount}&invoiceCurrency=${this.props.currency}`;

        this.setState({invoiceLink: link})
    }
}
