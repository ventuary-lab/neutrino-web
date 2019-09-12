import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, change} from 'redux-form';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';

import {html} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

import './LiquidateBoundsFrom.scss';

const bem = html.bem('LiquidateBoundsFrom');
const FORM_ID = 'LiquidateBoundsFrom';

@connect(
    state => ({
        // activeCurrency: getQuoteCurrency(state),
        formValues: getFormValues(FORM_ID)(state),
    })
)
export default class LiquidateBoundsFrom extends React.PureComponent {

    static propTypes = {

    };


    render() {

        const percents = [25, 50, 75, 100];

        return (
            <div className={bem.block()}>

                <div className={bem.element('percents')}>
                    {percents.map(item => (
                        <div
                            key={item}
                            className={bem.element('percent')}
                        >
                            {item}%
                        </div>
                    ))}
                </div>

                <Form
                    className={bem.element('form')}
                    formId={FORM_ID}
                >
                    <NumberField
                        inputProps={{
                            autocomplete: 'off',
                        }}
                        label={__('Total')}
                        layoutClassName={bem.element('input')}
                        attribute={'bounds'}
                        inners={{
                            label: BalanceCurrencyEnum.getLabel(BalanceCurrencyEnum.USD_NB),
                            icon: BalanceCurrencyEnum.getIconClass(BalanceCurrencyEnum.USD_NB)
                        }}
                    />

                    <Button
                        type={'submit'}
                        color={'danger'}
                        block
                        className={bem.element('submit-button')}
                        label={__('Set liquidate {bounds} order', {
                            bounds: BalanceCurrencyEnum.USD_NB,
                        })}
                    />
                </Form>
            </div>
        );
    }
}
