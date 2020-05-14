import React from 'react';
import { Translation } from 'react-i18next';

import { html } from 'components';

import './BlockedApp.scss';
import image from '../../static/images/security-image.svg';

const bem = html.bem('BlockedApp');

export default class BlockedApp extends React.PureComponent {
    render() {
        return (
            <Translation>
                {(t) => (
                    <div className={bem.block()}>
                        <div className={bem.element('inner')}>
                            <div className={bem.element('text')}>
                                {t('common.fraud_prevent.label')}
                            </div>
                            <img
                                className={bem.element('illustration')}
                                src={image}
                                alt="Blocked illustration"
                            />
                        </div>
                    </div>
                )}
            </Translation>
        );
    }
}
