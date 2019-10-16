import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import _isFunction from 'lodash-es/isFunction';
import _includes from 'lodash-es/includes';

import {html} from 'components';
import './DropDownFieldView.scss';
const bem = html.bem('DropDownFieldView');

export default class DropDownFieldView extends React.PureComponent {

    static propTypes = {
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        hint: PropTypes.string,
        required: PropTypes.bool,
        placeholder: PropTypes.string,
        isInvalid: PropTypes.bool,
        searchPlaceholder: PropTypes.string,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        disabled: PropTypes.bool,
        className: PropTypes.string,
        searchInputProps: PropTypes.object,
        searchAutoFocus: PropTypes.bool,
        multiple: PropTypes.bool,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.bool,
            ]),
            label: PropTypes.string,
            icon: PropTypes.string,
        })),
        selectedItems: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.bool,
            ]),
            label: PropTypes.string,
            icon: PropTypes.string,
            isSelected: PropTypes.bool,
            isHovered: PropTypes.bool,
        })),
        autoComplete: PropTypes.bool,
        autoCompleteMinLength: PropTypes.number,
        autoCompleteDelay: PropTypes.number,
        isOpened: PropTypes.bool,
        showReset: PropTypes.bool,
        onOpen: PropTypes.func,
        onReset: PropTypes.func,
        onItemClick: PropTypes.func,
        onItemMouseOver: PropTypes.func,
        onItemChange: PropTypes.func,
        defaultItemLabel: PropTypes.string,
        excludeSelectedFromItems: PropTypes.bool,
    };

    static defaultProps = {
        searchAutoFocus: true,
    };

    componentDidUpdate(prevProps) {
        // Auto focus on search
        if (this.props.searchAutoFocus && this.props.autoComplete && !prevProps.isOpened && this.props.isOpened) {
            const input = findDOMNode(this).querySelector('.' + bem.element('search-input'));
            if (input) {
                input.focus();
            }
        }
    }

    render() {
        const items = this.props.excludeSelectedFromItems
            ? this.props.items.filter(item => !_includes(this.props.selectedItems.map(item => item.id), item.id))
            : this.props.items;

        return (

            <div className={bem.block({size: this.props.size})}>
                <div
                    className={bem.element('selected-items', {
                        reset: this.props.showReset,
                        'is-invalid': this.props.isInvalid,
                    })}
                    onClick={this.props.onOpen}
                >
                    {this.props.selectedItems && this.props.selectedItems.length > 0 && (
                        <>
                            {this.props.selectedItems.map(item => (
                                <div
                                    className={bem.element('selected-item')}
                                    key={item.id}
                                >
                                    {item.icon && (
                                        <span className={bem(bem.element('item-icon'), `Icon ${item.icon}`)}/>
                                    )}
                                    <span>
                                        {item.label}
                                    </span>
                                    &nbsp;
                                </div>
                            ))}
                        </>
                    ) || (
                        <>
                            {this.props.defaultItemLabel && (
                                <span>
                                    {this.props.defaultItemLabel} &nbsp;
                                </span>
                            )}
                        </>
                    )}
                    <span className={bem(
                        bem.element('arrow', {
                            down: !this.props.isOpened,
                        }),
                        'Icon Icon__arrow-up'
                    )}/>
                </div>
                {this.props.showReset && !!this.props.selectedItems.length && (
                    <span
                        className={bem.element('reset')}
                        onClick={this.props.onReset}
                    />
                )}
                {this.props.isOpened && (
                    <div className={bem.element('drop-down')}>
                        {this.props.autoComplete && (
                            <div className={bem.element('search')}>
                                <input
                                    {...this.props.searchInputProps}
                                    className={bem(bem.element('search-input'), 'form-control')}
                                />
                            </div>
                        )}
                        <div className={bem.element('drop-down-list')}>
                            {items.map(item => (
                                <div
                                    key={item.id}
                                    className={bem.element('drop-down-item', {hover: item.isHovered, select: item.isSelected})}
                                    onClick={() => {
                                        this.props.onItemClick(item);
                                        if (this.props.onItemChange && _isFunction(this.props.onItemChange)) {
                                            this.props.onItemChange(item);
                                        }
                                    }}
                                    onMouseOver={() => this.props.onItemMouseOver(item)}
                                >
                                    {item.icon && (
                                        <span className={bem(bem.element('item-icon'), `Icon ${item.icon}`)}/>
                                    )}
                                    <span>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

}
