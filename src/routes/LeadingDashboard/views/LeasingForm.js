import React from 'react';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';


import {html} from 'components';
import CurrencyEnum from 'enums/CurrencyEnum';

import './LeasingForm.scss';

const bem = html.bem('LeasingForm');

export default class LeasingForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('header')}>
                    <span className={bem.element('head')}>{__('Available')}</span>
                    <span className={bem.element('available-amount')}>
                        59,976.38 {CurrencyEnum.getLabel(CurrencyEnum.USD_N)}
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
                                label: CurrencyEnum.getLabel(CurrencyEnum.USD_N),
                                icon: CurrencyEnum.getIconClass(CurrencyEnum.USD_N)
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
        );
    }
}
