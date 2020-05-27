import React from 'react';
import moment from 'moment';
import { html, dal } from 'components';
// import Button from 'yii-steroids/ui/form/Button';
import logo from 'static/images/logo.svg';
import { Translation } from 'react-i18next';

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
        <Translation>
            {(t) => (
                <div className={bem.block()}>
                    <div className={bem.element('body')}>
                        <div className={bem.element('date')}>
                            <span>{t('common.check.label')} № {checkNumber}</span>
                            <span>
                                {moment(date).format('DD.MM.YY')} | {moment(date).format('hh:mm')}
                            </span>
                        </div>
                        <div className={bem.element('profit')}>{t('common.profit.label')}: {profit}</div>
                        <div className={bem.element('see-tx')}>
                            <img src={logo} />
                            <a
                                href={`https://wavesexplorer.com/tx/${prefix}${transactionUrl}`}
                                target="_blank"
                            >
                                {t('staking_dashboard.see_tx.label')}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </Translation>
    );
};

export default PayoutCheck;
