import React from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import {html} from 'components';
import slide1 from 'static/images/slide1.svg';
import slide2 from 'static/images/slide2.svg';
import IndexSliderArrow from './views/IndexSliderArrow';

import './IndexSlider.scss';

const bem = html.bem('IndexSlider');

export default class IndexSlider extends React.Component {

    static propTypes = {

    };

    render() {

        return (
            <div className={bem.block()}>
                <h1 className={bem.element('title')}>
                    <span>{__('Welcome to the')}</span><br/>
                    <span>{__('Neutrino protocol dashboard!')}</span>
                </h1>

                <div className={bem.element('slider')}>
                    <Slick
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        prevArrow={(
                            <IndexSliderArrow direction='left'/>
                        )}
                        nextArrow={(
                            <IndexSliderArrow direction='right'/>
                        )}
                    >
                        <div className={bem.element('slide')}>
                            <div className={bem.element('slide-inner')}>
                                <img
                                    src={slide1}
                                    alt='neutrino'
                                />
                            </div>
                        </div>
                        <div className={bem.element('slide')}>
                            <div className={bem.element('slide-inner')}>
                                <img
                                    src={slide2}
                                    alt='neutrino'
                                />
                            </div>
                        </div>
                    </Slick>
                </div>
            </div>
        );
    }
}
