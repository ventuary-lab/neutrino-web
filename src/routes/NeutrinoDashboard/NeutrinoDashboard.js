import React from 'react';
import InputField from 'yii-steroids/ui/form/InputField';
import Form from 'yii-steroids/ui/form/Form';

import {html} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

import './NeutrinoDashboard.scss';

const bem = html.bem('NeutrinoDashboard');
const FORM_ID = 'generation';

export default class NeutrinoDashboard extends React.PureComponent {


    constructor() {
        super(...arguments);

        this.state = {
            step: 'generation',
        };
    }

    render() {
        const steps = [
            {
                id: 'generation',
                label: __('Collateralize & generation USDN'),
            },
            {
                id: 'details',
                label: __('Confirm details'),
            }
        ];

        return (
            <div className={bem.block()}>
                {this.renderStepChanger(steps)}
                {this.state.step === 'generation' && (
                    <Form
                        className={bem.element('form')}
                        formId={FORM_ID}
                    >
                        <div className={bem.element('form-inputs')}>
                            <InputField
                                attribute={'waves'}
                                inners={{
                                    label: BalanceCurrencyEnum.getLabel(BalanceCurrencyEnum.WAVES),
                                    icon: BalanceCurrencyEnum.getIconClass(BalanceCurrencyEnum.WAVES)
                                }}
                            />

                            <div className={bem.element('form-exchange-button')}>
                                <span className={'Icon Icon__exchange'}/>
                            </div>

                            <InputField
                                attribute={'currency'}
                                inners={{
                                    label: BalanceCurrencyEnum.getLabel(BalanceCurrencyEnum.USD_N),
                                    icon: BalanceCurrencyEnum.getIconClass(BalanceCurrencyEnum.USD_N)
                                }}
                            />
                        </div>
                    </Form>
                )}
            </div>
        );
    }

    renderStepChanger(steps) {
        return (
            <div className={bem.element('steps')}>
                {steps.map((item, index) => (
                    <div
                        key={item.id}
                        className={bem.element('step', {
                            active: this.state.step === item.id,
                        })}
                        onClick={() => this.setState({step: item.id})}
                    >
                            <span className={bem.element('step-count')}>
                                {index + 1}
                            </span>
                        <span className={bem.element('step-label')}>
                                {item.label}
                            </span>
                    </div>
                ))}
            </div>
        );
    }
}
