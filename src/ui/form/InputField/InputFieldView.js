import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';

import {html} from 'components';

import './InputFieldView.scss';
const bem = html.bem('InputFieldView');

export default class InputFieldView extends React.PureComponent {

    static propTypes = {
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        inners: PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.string,
        }),
        hint: PropTypes.string,
        required: PropTypes.bool,
        type: PropTypes.oneOf(['text', 'email', 'hidden', 'phone', 'password']),
        placeholder: PropTypes.string,
        isInvalid: PropTypes.bool,
        disabled: PropTypes.bool,
        inputProps: PropTypes.object,
        className: PropTypes.string,
    };

    render() {

        const innerLabel = _get(this.props, 'inners.label');
        const innerIcon = _get(this.props, 'inners.icon');

        return (
            <div className={bem(
                bem.block({
                    'is-invalid': this.props.isInvalid,
                    'with-inners': !!(innerLabel || innerIcon),
                }),
                this.props.className
            )}>
                {!!(innerLabel || innerIcon) && (
                    <div className={bem.element('inners')}>
                        {innerIcon && (
                            <span className={bem(
                                bem.element('inner-icon', {
                                    'with-label': !!innerLabel,
                                }),
                                `Icon ${innerIcon}`
                            )}/>
                        )}
                        {innerLabel && (
                            <span className={bem.element('inner-label')}>
                                {innerLabel}
                            </span>
                        )}
                    </div>
                )}
                <input
                    className={bem.element('input')}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    {...this.props.inputProps}
                />
            </div>
        );
    }

}
