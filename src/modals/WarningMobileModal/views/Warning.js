import React from 'react';
import './Warning.scss';
import illustration from 'static/images/modal-warning-illustration.svg';
import { html } from '../../../components';

const bem = html.bem('Warning');

export default class Warning extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('text')}>
                    {__('Sorry, Neutrino is currently unavailable on mobile devices. Please switch to your desktop for the best experience.')}
                </div>
                <img
                    className={bem.element('illustration')}
                    src={illustration}
                    alt='warning illustration'
                />
            </div>
        );
    }
}