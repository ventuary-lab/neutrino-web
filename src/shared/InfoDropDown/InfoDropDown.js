import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

import {html} from 'components';

import './InfoDropDown.scss';

const bem = html.bem('InfoDropDown');

@enhanceWithClickOutside
export default class InfoDropDown extends React.PureComponent {

    static propTypes = {
        isOpen: PropTypes.bool,
        onToggle: PropTypes.func,
        label: PropTypes.string,
        icon: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            linkUrl: PropTypes.string,
            action: PropTypes.func,
        }))
    };

    constructor() {
        super(...arguments);

        this.state = {
            isOpen: false,
        };

        this.onToggle = this.onToggle.bind(this);
    }

    render() {
        return (
            <div className={bem.block()}>
                <div
                    className={bem.element('label-container')}
                    onClick={this.onToggle}
                >
                    {this.props.icon && (
                        <span className={bem(bem.element('icon'), `Icon ${this.props.icon}`)}/>
                    )}
                    <span className={bem.element('label')}>
                        {this.props.label}
                    </span>
                    <span className={bem(
                        bem.element('arrow', {
                            down: !this.state.isOpen,
                        }),
                        'Icon Icon__arrow-up'
                    )}/>
                </div>
                {this.state.isOpen && (
                    <ul className={bem.element('items')}>
                        {this.props.items.map((item, index) => (
                            <li
                                key={index}
                                className={bem.element('item')}
                                onClick={this.onToggle}
                            >
                                {item.linkUrl && (
                                    <a
                                        href={item.linkUrl}
                                        target={'_blank'}
                                    >
                                        {item.label}
                                    </a>
                                ) || (
                                    <span onClick={() => item.action()}>
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    onToggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleClickOutside() {
        this.setState({isOpen: false});
    }
}
