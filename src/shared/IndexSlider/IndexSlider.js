import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import Slick from 'react-slick';

import {html} from 'components';
import slide1 from 'static/images/slide1.svg';
import IndexSliderArrow from './views/IndexSliderArrow';

import './IndexSlider.scss';
import { openModal } from 'yii-steroids/actions/modal';
import WarningMobileModal from '../../modals/WarningMobileModal';

import {clientStorage} from 'components';
import { STORAGE_AUTH_KEY } from '../RightSidebar/RightSidebar';

const bem = html.bem('IndexSlider');

@connect()
export default class IndexSlider extends React.Component {

    static propTypes = {

    };

    componentDidMount() {
        const warningModalState = clientStorage.get('warningModalState');

        if(warningModalState === 'open') {
            this.props.dispatch(openModal(WarningMobileModal));
        }
    }

    render() {
        const slides = this.renderSlides();
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
                        afterChange={index => {
                            if(index === slides.length - 1) {
                                if(clientStorage.get('warningModalState')) return;

                                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Chrome/i.test(navigator.userAgent)) {
                                    clientStorage.set('warningModalState', 'open');
                                }
                            }
                        }}
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
                <img
                    src={slide1}
                    alt='Neutrino concept'
                />
            </div>,
            <div className={bem.element('slide-inner')}>
                <div className={bem.element('slide-sub-title')}>
                    {__('01. The concept')}
                </div>
                <h3 className={bem.element('slide-title')}>
                    {__('What is a Collateralized Debt Position (CDP)?')}
                </h3>
                <p className={bem.element('slide-text')}>
                    {__('A CDP enables the generation of USD-N stablecoins against the collateral (currently WAVES) that are locked up in the CDP until the generated USD-Ns are paid back.')}
                </p>
            </div>,
            <div className={bem.element('slide-inner')}>
                <div className={bem.element('slide-sub-title')}>
                    {__('02. The benefits')}
                </div>
                <h3 className={bem.element('slide-title')}>
                    {__('What are the benefits of opening a CDP?')}
                </h3>
                <p className={bem.element('slide-text')}>
                    {__('Users can derive liquidity by generating USD-N stablecoins without giving up ownership of the collateral, as long as they ensure that the CDP holds enough collateral to cover the value of the USD-N stablecoins. When using WAVES as collateral, the value of the locked up collateral must always be more than 150% of the amount of the USD-N stablecoins that were generated.')}
                </p>
            </div>,
            <div className={bem.element('slide-inner')}>
                <div className={bem.element('slide-sub-title')}>
                    {__('03. The setup')}
                </div>
                <h3 className={bem.element('slide-title')}>
                    {__('How does it work?')}
                </h3>
                <p className={bem.element('slide-text')}>
                    {__('First, you determine the amount of WAVES to lock up in the CDP. Some USD-N stablecoins are generated against the locked up WAVES. The user can spend those USD-Ns at their discretion. Finally, you pay back the USD-N stablecoins together with a stability fee when you no longer need the liquidity, and then you can withdraw the collateral that you locked up.')}
                </p>
            </div>,
            <div className={bem.element('slide-inner')}>
                <div className={bem.element('slide-sub-title')}>
                    {__('04. The risks')}
                </div>
                <h3 className={bem.element('slide-title')}>
                    {__('Is there any risk involved in creating a CDP?')}
                </h3>
                <p className={bem.element('slide-text')}>
                    {__('As long as you monitor your CDP and ensure that the value of the locked up WAVES is always more that 150% of the USD-N stablecoins that you have generated, your CDP will not be liquidated. If the value of the collateral approaches 150%, you can add more collateral or pay back some of the debt. If the value of the locked up collateral fails below 150%, then your CDP will be liquidated. This means that your collateral is being sold automatically to cover the value of the USD-N stablecoins that you generated. Any remaining collateral is returned to your CDP and made available for withdrawal. See the Terms of Service for risks involved.')}
                </p>
            </div>,
            <div className={bem.element('slide-inner')}>
                <div className={bem.element('slide-sub-title')}>
                    {__('05. The cost')}
                </div>
                <h3 className={bem.element('slide-title')}>
                    {__('Does it cost anything?')}
                </h3>
                <p className={bem.element('slide-text')}>
                    {__('There is a stability fee on the USD-N stablecoins of 18.50% per year. You pay the fee with USD-NB (bonds) when you pay back the USD-N. If your CDP is liquidated, there is a 13% liquidation penalty subtracted when the locked collateral is sold.')}
                </p>
            </div>
        ];
    }
}
