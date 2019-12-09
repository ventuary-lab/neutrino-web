import React from 'react';
import './Warning.scss';
import image from 'static/images/idea-image.svg';
import { html } from '../../../components';
import { t } from 'locales/config';

const bem = html.bem('Warning');

export default class Warning extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('text')}>
                    {t('views.not_available_for_mobile_sorry_message.label')}
                </div>
                <img
                    className={bem.element('illustration')}
                    src={image}
                    alt='Warning illustration'
                />
            </div>
        );
    }
}
