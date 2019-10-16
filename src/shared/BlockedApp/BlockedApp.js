import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {dal, html} from 'components';

import './BlockedApp.scss';
import illustration from '../../static/images/modal-blocked-illustration.svg';

const bem = html.bem('BlockedApp');

@connect(
    state => ({

    })
)
export default class BlockedApp extends React.PureComponent {

    static propTypes = {

    };

    render() {

        return (
            <div className={bem.block()}>
                <div className={bem.element('inner')}>
                    <div className={bem.element('text')}>
                        {__('For security and fraud prevention reasons, confirmation by 2/3 of oracles and admins is required')}
                    </div>
                    <img
                        className={bem.element('illustration')}
                        src={illustration}
                        alt='blocked illustration'
                    />
                </div>
            </div>
        );
    }
}
