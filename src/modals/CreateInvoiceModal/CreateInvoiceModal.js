import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import Modal from 'yii-steroids/ui/modal/Modal';
import { Translation } from 'react-i18next';
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
            <Translation>
                {t => (
                    <Modal
                        {...this.props.modalProps}
                        header={t('modals.create_invoice.label')}
                        className={bem.block()}
                    >
                        <div className={bem.element('inner')}>
                            <div className={bem.element('form')}>
                                <TransferForm
                                    formId={FORM_ID}
                                    onSubmit={(address, amount) => this._onSubmit(address, amount, t)}
                                    buttonLabel={t('modals.get_share_link.label')}
                                    currency={this.props.currency}
                                />
                            </div>
                            {this.state.invoiceLink && (
                                <div className={bem.element('link-block')}>
                                    <span className={bem.element('link')}>
                                        {this.state.invoiceLink}
                                    </span>
                                    <CopyToClipboard copyText={this.state.invoiceLink} />
                                </div>
                            )}
                        </div>
                    </Modal>
                )}
            </Translation>
        );
    }

    _onSubmit(address, amount, t) {
        validate(address, [
            [
                'address',
                function(address) {
                    if (/^[A-Za-z0-9]{30,40}$/.test(address) === false) {
                        return t('modals.recipient_address_is_invalid.label');
                    }
                },
            ],
        ]);

        const link = `${location.origin}/${ROUTE_NEUTRINO}/${CurrencyEnum.USD_N}?invoiceAddress=${address}&invoiceAmount=${amount}&invoiceCurrency=${this.props.currency}`;

        this.setState({ invoiceLink: link });
    }
}
