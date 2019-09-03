import React from 'react';
// import PropTypes from 'prop-types';
import Slick from 'react-slick';

import {html} from 'components';
import slide1 from 'static/images/slide1.svg';
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
                            <div className={bem.element('slide-inner', 'center')}>
                                <img
                                    src={slide1}
                                    alt='Neutrino concept'
                                />
                            </div>
                        </div>
                        <div className={bem.element('slide')}>
                            <div className={bem.element('slide-inner')}>
                                <div className={bem.element('slide-sub-title')}>
                                    {__('01. The concept')}
                                </div>
                                <h3 className={bem.element('slide-title')}>
                                    {__('What is a Collateralized Debt Position (CDP)?')}
                                </h3>
                                <p className={bem.element('slide-text')}>
                                    {__('A CDP enables the generation of USD-N stable coins against the collateral (currently WAVES) that you lock up in the CDP until you pay back the USD-N you generation')}
                                </p>
                            </div>
                        </div>
                        <div className={bem.element('slide')}>
                            <div className={bem.element('slide-inner')}>
                                <div className={bem.element('slide-sub-title')}>
                                    {__('02. The benefits')}
                                </div>
                                <h3 className={bem.element('slide-title')}>
                                    {__('What are the benefits of opening a CDP?')}
                                </h3>
                                <p className={bem.element('slide-text')}>
                                    {__('You can get liquidity by generation USD-N stable coins without giving up ownership of your collateral (as long as yo make sure that the CDP holds enough collateral to cover the value oh the USD-N stablecoins). When using WAVES as collateral, the value of the locked up collateral must always be more than 150% of the amount of USD-N stable coins that you generation')}
                                </p>
                            </div>
                        </div>
                        <div className={bem.element('slide')}>
                            <div className={bem.element('slide-inner')}>
                                <div className={bem.element('slide-sub-title')}>
                                    {__('03. The setup')}
                                </div>
                                <h3 className={bem.element('slide-title')}>
                                    {__('How does it work?')}
                                </h3>
                                <p className={bem.element('slide-text')}>
                                    {__('You determine how much WAVES you want to lock up in the CDP. You generate USD-N stablecoins against the WAVES you locked up, and spend them as you wish. You pay back the USD-N stablecoins when you no longer need the liquidity, together with a stability fee, and then you can withdraw the collateral that you locked up.')}
                                </p>
                            </div>
                        </div>
                        <div className={bem.element('slide')}>
                            <div className={bem.element('slide-inner')}>
                                <div className={bem.element('slide-sub-title')}>
                                    {__('04. The risks')}
                                </div>
                                <h3 className={bem.element('slide-title')}>
                                    {__('Is there any risk involved in creating a CDP?')}
                                </h3>
                                <p className={bem.element('slide-text')}>
                                    {__('As long as you monitor your CDP and make sure that the value of the locked up WAVES is always more than 150% of the USD-N stablecoins that you have generated, your CDP will not be liquidated. If the value of the collateral comes close to 150% you can add more collateral, or pay back some of the debt. If the value of the locked up collateral falls below 150% then your CDP will be liquidated. This means that your collateral is being sold by the system in order to cover the value of the USD-N stablecoins that you generated. Any leftover collateral is returned to you CDP so you can withdraw it. See the Terms of Service for risks involved.')}
                                </p>
                            </div>
                        </div>
                        <div className={bem.element('slide')}>
                            <div className={bem.element('slide-inner')}>
                                <div className={bem.element('slide-sub-title')}>
                                    {__('04. The cost')}
                                </div>
                                <h3 className={bem.element('slide-title')}>
                                    {__('Does it cost anything?')}
                                </h3>
                                <p className={bem.element('slide-text')}>
                                    {__('There is a stability fee on the USD-N stablecoins of 18.50% per year. You pay the fee with USD-NB when you pay back the USD-N. If your CDP becomes liquidated, then there is a 13% liquidation penalty that will be subtracted when the locked collateral is sold.')}
                                </p>
                            </div>
                        </div>
                    </Slick>
                </div>
            </div>
        );
    }
}
