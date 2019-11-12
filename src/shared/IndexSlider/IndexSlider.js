import React from 'react';
import Slick from 'react-slick';

import { html } from 'components';
import slide1 from 'static/images/slide1.svg';
import IndexSliderArrow from './views/IndexSliderArrow';

import './IndexSlider.scss';

const bem = html.bem('IndexSlider');

export default class IndexSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const slides = this.renderSlides();

        return (
            <div className={bem.block()}>
                <h1 className={bem.element('title')}>
                    <span>{__('Welcome to the')}</span>
                    <br />
                    <span>{__('Neutrino protocol dashboard!')}</span>
                </h1>

                <div className={bem.element('slider')}>
                    <Slick
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        prevArrow={<IndexSliderArrow direction="left" />}
                        nextArrow={<IndexSliderArrow direction="right" />}
                    >
                        {slides.map((content, index) => (
                            <div key={index} className={bem.element('slide')}>
                                {content}
                            </div>
                        ))}
                    </Slick>
                </div>
            </div>
        );
    }

    renderSlides() {
        return [
            <div className={bem.element('slide-inner', 'center')}>
                <img src={slide1} alt="Neutrino concept" />
            </div>,
            <div className={bem.element('slide-inner')}>
                <div className={bem.element('slide-sub-title')}>
                    {__('01. The concept')}
                </div>
                <h3 className={bem.element('slide-title')}>
                    {__(
                        'What is a collateralised stable coin or synthetic asset?'
                    )}
                </h3>
                <p className={bem.element('slide-text')}>
                    {__(
                        'It is a token on the Waves platform whose capitalization and price stability is ensured by WAVES tokens reserved on the smart contract.'
                    )}
                </p>
            </div>,
            <div className={bem.element('slide-inner')}>
                <div className={bem.element('slide-sub-title')}>
                    {__('02. The benefits')}
                </div>
                <h3 className={bem.element('slide-title')}>
                    {__(
                        'What are the benefits of minting and staking neutrino based assets?'
                    )}
                </h3>
                <p className={bem.element('slide-text')}>
                    {__(
                        'You can mitigate the volatility risk of the WAVES token and receive income in stable coins or synthetic assets through leasing.'
                    )}
                </p>
            </div>,
            <div className={bem.element('slide-inner')}>
                <div className={bem.element('slide-sub-title')}>
                    {__('03. The setup')}
                </div>
                <h3 className={bem.element('slide-title')}>
                    {__('How does one work with Neutrino?')}
                </h3>
                <p className={bem.element('slide-text')}>
                    {__(
                        'Send WAVES to the smart contract using the Neutrino dashboard and receive a Neutrino-based asset back. Buy bonds in an open auction and make a profit from their liquidation in the Bonds dashboard.'
                    )}
                </p>
            </div>
        ];
    }
}
