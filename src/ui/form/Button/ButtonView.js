import React from 'react';
import PropTypes from 'prop-types';
import _isString from 'lodash-es/isString';

import {html} from 'components';

import './ButtonView.scss';

const bem = html.bem('ButtonView');

export default class ButtonView extends React.PureComponent {

    static propTypes = {
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.any,
        ]),
        type: PropTypes.oneOf(['button', 'submit']),
        color: PropTypes.oneOf([
            'primary',
            'secondary',
            'danger',
            'info',
            'secondary'
        ]),
        block: PropTypes.bool,
        link: PropTypes.bool,
        url: PropTypes.string,
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        submitting: PropTypes.bool,
        isLoading: PropTypes.bool,
        className: PropTypes.string,
        view: PropTypes.func,
    };

    render() {
        return this.props.link || this.props.url ? this.renderLink() : this.renderButton();
    }

    renderLink() {
        return (
            <a
                className={this._getClassName({link: true})}
                href={this.props.url}
                onClick={this.props.onClick}
            >
                {this.renderLabel()}
            </a>
        );
    }

    renderButton() {
        return (
            <button
                type={this.props.type}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                className={this._getClassName()}
            >
                {this.renderLabel()}
            </button>
        );
    }

    renderLabel() {
        return (
            <>
                {this.props.isLoading && (
                    <div className={bem.element('preloader')}>
                        <span>Loading...</span>
                    </div>
                )}
                <span
                    className={bem.element('label')}
                >
                    {this.props.icon && (
                        <span
                            className={bem(
                                bem.element('icon', !this.props.label && 'without-label'),
                                'material-icons'
                            )}
                            title={_isString(this.props.label) ? this.props.label : null}
                        >
                            {this.props.icon}
                        </span>
                    )}
                    {this.props.children}
                </span>
            </>
        );
    }

    _getClassName(modifiers) {
        if (this.props.noStyles) {
            return bem(
                this.props.className,
            );
        }
        return bem(
            bem.block({
                color: this.props.color,
                block: this.props.block,
                disabled: this.props.disabled,
                submitting: this.props.submitting,
                'is-loading': this.props.isLoading,
                ...modifiers,
            }),
            this.props.className,
        );
    }
}
