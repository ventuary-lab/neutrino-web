import React from 'react';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';

import './LeasingForm.scss';

import {html} from 'components';
const bem = html.bem('LeasingForm');
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

export default class LeasingForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('header')}>
                    <span className={bem.element('head')}>__('Available')</span>
                    <span className={bem.element('available-amount')}>
                        59,976.38 {BalanceCurrencyEnum.getLabel(BalanceCurrencyEnum.USD_N)}
                    </span>
                </div>
                <div className={bem.element('form-wrap')}>
                    <Form
                        formId={'leasing-form'}
                        className={bem.element('form')}
                    >
                        <NumberField
                            min={0}
                            inputProps={{
                                autocomplete: 'off'
                            }}
                            label={__('Select amount')}
                            className={bem.element('input')}
                            attribute={'neutrino'}
                            inners={{
                                label: BalanceCurrencyEnum.getLabel(BalanceCurrencyEnum.USD_N),
                                icon: BalanceCurrencyEnum.getIconClass(BalanceCurrencyEnum.USD_N)
                            }}
                        />
                        <Button
                            type={'submit'}
                            block
                            className={bem.element('submit-button')}
                            label={__('Withdraw')}
                        />
                    </Form>
                </div>
            </div>
        )
    }
}