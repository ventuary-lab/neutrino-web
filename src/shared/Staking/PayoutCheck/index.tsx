import React from 'react';
import moment from 'moment';
import { html } from 'components';
import Button from 'yii-steroids/ui/form/Button';
import logo from 'static/images/logo.svg';

import './style.scss';

const bem = html.bem('PayoutCheck');

interface Props {
    checkNumber: number;
    date: Date;
    profit: number;
    onSeeTransaction: () => void;
}

const PayoutCheck = (props: Props) => {
    const { checkNumber, date, profit, onSeeTransaction } = {
        checkNumber: 14,
        date: new Date(),
        profit: 0.55,
        onSeeTransaction: () => {},
    };

    return (
        <div className={bem.block()}>
            <div className={bem.element('body')}>
                <div>
                    <span>Check № {checkNumber}</span>
                    <span>
                        {moment(date).format('dd.mm.yy')} | {moment(date).format('hh:mm')}
                    </span>
                </div>
                <div>Profit: {profit}</div>
                <div>
                    <Button label="See transaction" />
                </div>
            </div>
        </div>
    );
};

export default PayoutCheck;
