import React from 'react';
import moment from 'moment';
import { html, dal } from 'components';
// import Button from 'yii-steroids/ui/form/Button';
import logo from 'static/images/logo.svg';

import './style.scss';

const bem = html.bem('PayoutCheck');

interface Props {
    checkNumber: number;
    date: Date;
    profit: number;
    transactionUrl: string;
}

const PayoutCheck = (props: Props) => {
    const { checkNumber, date, profit, transactionUrl } = props;
    const prefix = dal && dal.network === 'testnet' ? 'testnet/' : '';

    return (
        <div className={bem.block()}>
            <div className={bem.element('body')}>
                <div className={bem.element('date')}>
                    <span>Check № {checkNumber}</span>
                    <span>
                        {moment(date).format('DD.MM.YY')} | {moment(date).format('hh:mm')}
                    </span>
                </div>
                <div className={bem.element('profit')}>Profit: {profit}</div>
                <div className={bem.element('see-tx')}>
                    <img src={logo} />
                    {/* <Button label="See transaction" onClick={onSeeTransaction}/> */}
                    <a href={`https://wavesexplorer.com/tx/${prefix}${transactionUrl}`} target="_blank">
                        See transaction
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PayoutCheck;
