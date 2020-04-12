import React from 'react';
import { html } from 'components';
import { Translation } from 'react-i18next';

import usdnIcon from 'static/icons/n_icon/light-not-filled/Neutrino_N_ICON.svg';

const bem = html.bem('AuctionDiscount');

import './style.scss';

interface Props {
    roi: number;
}

const AuctionDiscount: React.FC<Props> = ({ roi }) => {
    const percent = roi;

    return (
        <Translation>
            {(t) => (
                <div className={bem.block()}>
                    <div className={bem.element('f-grid')}>
                        <div>
                            <img src={usdnIcon} />
                        </div>
                        <div>
                            <div className={bem.element('y-title', 'get-usdn')}>
                                <div>{t('common.get.label')}</div>
                                <div className={bem.element('w-title')}>USDN</div>
                            </div>
                            <div className={bem.element('y-title')}>
                                {t('common.with.label')}
                            </div>
                        </div>
                    </div>
                    <div className={bem.element('s-grid')}>
                        <div className={bem.element('p-title')}>{percent}%</div>
                        <div className={bem.element('y-title')}>
                            <div>{t('common.current_discount.label')}</div>
                            <div>{t('common.now.label')}</div>
                        </div>
                    </div>
                </div>
            )}
        </Translation>
    );
};

export default AuctionDiscount;
