import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _get from 'lodash-es/get';
import { getFormValues, change } from 'redux-form';
import Form from 'yii-steroids/ui/form/Form';
import InputField from 'yii-steroids/ui/form/InputField';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';
import CurrencyEnum from 'enums/CurrencyEnum';

import { html, store, dal } from 'components';
import './TransferForm.scss';

const bem = html.bem('TransferForm');

@connect((state, props) => ({
    formValues: getFormValues(props.formId)(state)
}))
export default class TransferForm extends React.PureComponent {
    static propTypes = {
        formId: PropTypes.string,
        onSubmit: PropTypes.func,
        buttonLabel: PropTypes.string
    };

    constructor(props) {
        super(props);

        this._setInitialAddress = this._setInitialAddress.bind(this);
    }

    componentDidMount () {
        this._setInitialAddress();
    }

    _setInitialAddress () {
        const { formId } = this.props;

        if (formId !== 'CreateInvoiceModalForm') {
            return;
        }

        const address = dal.balance._address;
        store.dispatch(change(formId, 'address', address));
    }

    render() {
        const address = _get(this.props, 'formValues.address');
        const amount = _get(this.props, 'formValues.amount');
        const { currency } = this.props;
        const transeftAmountLabel = `Transfer amount (${CurrencyEnum.getLabels()[currency]})`;

        return (
            <Form
                className={bem.block()} 
                formId={this.props.formId}
                onSubmit={() => this.props.onSubmit(address, amount)}
            >
                <InputField
                    layoutClassName={bem.element('input')}
                    attribute={'address'}
                    label={__('Transfer recipient')}
                    inputProps={{
                        autoComplete: 'off'
                    }}
                />
                <NumberField
                    step="any"
                    inputProps={{
                        autoComplete: 'off'
                    }}
                    label={__(transeftAmountLabel)}
                    layoutClassName={bem.element('input')}
                    attribute={'amount'}
                />
                <Button
                    label={this.props.buttonLabel || __('Transfer')}
                    color={'success'}
                    type={'submit'}
                    disabled={!amount || !address}
                    className={bem.element('submit-button')}
                />
            </Form>
        );
    }
}
