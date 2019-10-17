import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';
import arrowRight from 'static/icons/arrow-right.svg';

import './IndexSliderArrow.scss';

const bem = html.bem('IndexSliderArrow');

export default class IndexSliderArrow extends React.Component {
    static propTypes = {
        direction: PropTypes.oneOf(['left', 'right']).isRequired,
        onClick: PropTypes.func,
    };

    render() {
        return (
            <div
                className={bem.block({direction: this.props.direction})}
                onClick={this.props.onClick}
            >
                <img
                    className={bem.element('arrow')}
                    src={arrowRight}
                    alt={this.props.direction === 'left' ? 'Назад' : 'Вперед'}
                />
            </div>
        );
    }
}
