import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from 'shared/Tooltip';
import {html} from 'components';

import './Hint.scss';

const bem = html.bem('Hint');

export default class Hint extends React.PureComponent {

    static propTypes = {
        text: PropTypes.string,
    };

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('icon')}>
                    <span className={'Icon Icon__question'}/>
                    {this.props.text && (
                        <div className={bem.element('tooltip')}>
                            <Tooltip>
                                {this.props.text}
                            </Tooltip>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
