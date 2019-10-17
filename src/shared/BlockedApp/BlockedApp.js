import React from 'react';

import {html} from 'components';

import './BlockedApp.scss';
import image from '../../static/images/security-image.svg';

const bem = html.bem('BlockedApp');

export default class BlockedApp extends React.PureComponent {

    render() {

        return (
            <div className={bem.block()}>
                <div className={bem.element('inner')}>
                    <div className={bem.element('text')}>
                        {__('For security and fraud prevention reasons, confirmation by 2/3 of oracles and admins is required')}
                    </div>
                    <img
                        className={bem.element('illustration')}
                        src={image}
                        alt='Blocked illustration'
                    />
                </div>
            </div>
        );
    }
}
