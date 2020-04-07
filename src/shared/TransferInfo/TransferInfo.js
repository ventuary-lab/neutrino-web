import React from 'react';
import PropTypes from 'prop-types';
import Button from 'yii-steroids/ui/form/Button';
import CurrencyEnum from 'enums/CurrencyEnum';

import { html } from 'components';
import './TransferInfo.scss';

const bem = html.bem('TransferInfo');

export default class TransferInfo extends React.PureComponent {
    static propTypes = {
        address: PropTypes.string,
        amount: PropTypes.number,
        onSubmit: PropTypes.func,
        buttonLabel: PropTypes.string,
    };

    render() {
        const { address, amount, currency, buttonLabel, onSubmit, onClose } = this.props;
        const renderCurrency = CurrencyEnum.getLabels()[currency];

        return (
            <div className={bem.block()}>
                <div className={bem.element('inner')}>
                    <div className={bem.element('item')}>
                        <span className={bem.element('label')}>{__('Transfer recipient')}</span>
                        <span className={bem.element('value')}>{address}</span>
                    </div>
                    <div className={bem.element('item')}>
                        <span className={bem.element('label')}>{__('Transfer amount')}</span>
                        <span className={bem.element('value')}>
                            {amount} {renderCurrency}
                        </span>
                    </div>
                </div>
                <Button
                    color={'success'}
                    className={bem.element('submit-button')}
                    label={buttonLabel || __('Ok')}
                    onClick={onClose || onSubmit}
                />
            </div>
        );
    }
}
