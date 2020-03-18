import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, change} from 'redux-form';
import Form from 'yii-steroids/ui/form/Form';
import NumberField from 'yii-steroids/ui/form/NumberField';
import Button from 'yii-steroids/ui/form/Button';
import _get from 'lodash/get';

import { dal, html, store } from 'components';
import CurrencyEnum from 'enums/CurrencyEnum';

import './LiquidateBondsFrom.scss';
import {getUser} from 'yii-steroids/reducers/auth';
import {getBaseCurrency, getPairName,} from 'reducers/currency';

const bem = html.bem('LiquidateBondsFrom');
const FORM_ID = 'LiquidateBondsFrom';

@connect(
    state => ({
        formValues: getFormValues(FORM_ID)(state),
        pairName: getPairName(state),
        bondBalance: _get(getUser(state), ['balances', getBaseCurrency(state)]),
        baseCurrency: getBaseCurrency(state),
    })
)
export default class LiquidateBondsFrom extends React.PureComponent {

    static propTypes = {
        formValues: PropTypes.object,
        bondBalance: PropTypes.number,
        baseCurrency: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {

        const percents = [25, 50, 75, 100];

        return (
            <div className={bem.block()}>

                <div className={bem.element('percents')}>
                    {percents.map(item => (
                        <div
                            key={item}
                            className={bem.element('percent')}
                            onClick={() => {
                                store.dispatch(change(FORM_ID, 'bonds', Math.round(this.props.bondBalance * item / 100)) || 0);
                            }}
                        >
                            {item}%
                        </div>
                    ))}
                </div>

                <Form
                    className={bem.element('form')}
                    formId={FORM_ID}
                    onSubmit={this._onSubmit}
                    validators={[
                        [['bonds'], 'required'],
                    ]}
                >
                    <NumberField
                        inputProps={{
                            autoComplete: 'off',
                        }}
                        label={__('Total')}
                        layoutClassName={bem.element('input')}
                        attribute={'bonds'}
                        inners={{
                            label: CurrencyEnum.getLabel(this.props.baseCurrency),
                            icon: CurrencyEnum.getIconClass(this.props.baseCurrency)
                        }}
                    />

                    <Button
                        type={'submit'}
                        color={'danger'}
                        block
                        className={bem.element('submit-button')}
                        label={__('Set liquidate {bonds} order', {
                            bonds: this.props.baseCurrency,
                        })}
                    />
                </Form>
            </div>
        );
    }

    _onSubmit() {
        return dal.setLiquidateOrder(this.props.pairName, this.props.baseCurrency,this.props.formValues.bonds);
    }
}
