import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import Modal from 'yii-steroids/ui/modal/Modal';
import { ROUTE_NEUTRINO } from 'routes';
import CurrencyEnum from 'enums/CurrencyEnum';

import { html } from 'components';
import CopyToClipboard from 'shared/CopyToClipboard';
import TransferForm from 'shared/TransferForm';
import { getPairName } from 'reducers/currency';
import validate from 'shared/validate';

import './CreateInvoiceModal.scss';

const bem = html.bem('CreateInvoiceModal');
const FORM_ID = 'CreateInvoiceModalForm';

@connect(state => ({
    pairName: getPairName(state),
    formValues: getFormValues(FORM_ID)(state),
}))
export default class CreateInvoiceModal extends React.PureComponent {
    static propTypes = {
        currency: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            invoiceLink: '',
        };

        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {
        return (
            <Modal
                {...this.props.modalProps}
                header={__('Creating Invoice')}
                className={bem.block()}
            >
                <div className={bem.element('inner')}>
                    <div className={bem.element('form')}>
                        <TransferForm
                            formId={FORM_ID}
                            onSubmit={this._onSubmit}
                            buttonLabel={__('Get shareable link')}
                            currency={this.props.currency}
                        />
                    </div>
                    {this.state.invoiceLink && (
                        <div className={bem.element('link-block')}>
                            <span className={bem.element('link')}>{this.state.invoiceLink}</span>
                            <CopyToClipboard copyText={this.state.invoiceLink} />
                        </div>
                    )}
                </div>
            </Modal>
        );
    }

    _onSubmit(address, amount) {
        // validate(address, [
        //     [
        //         'address',
        //         function(address) {
        //             if (/^[A-Za-z0-9]{30,40}$/.test(address) === false) {
        //                 return __('Recipient address is not valid');
        //             }
        //         },
        //     ],
        // ]);

        const link = `${location.origin}/${ROUTE_NEUTRINO}/${CurrencyEnum.USD_N}?invoiceAddress=${address}&invoiceAmount=${amount}&invoiceCurrency=${this.props.currency}`;

        this.setState({ invoiceLink: link });
    }
}
