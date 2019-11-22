import React from 'react';
import { html } from 'components';
import backgroundImage from 'static/images/landing/background.png';
import usdnLogo from 'static/icons/usd-n.svg';
import boxesImage from 'static/images/landing/boxes.svg';
import coloredBoxesImage from 'static/images/landing/colored_boxes.svg';

import './style.scss';

const bem = html.bem('LandingPage');

interface Props {}
interface State {}

class LandingPage extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const boxes = Array(2).fill(<img src={boxesImage} />);
        const coloredBoxes = Array(2).fill(<img src={coloredBoxesImage} />);

        return (
            <div className={bem.element('main')}>
                <div
                    className={bem.element('first-part')}
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                >
                    <div className={bem.element('header')}>Neutrino</div>
                    <div className={bem.element('txt-body')}>
                        <span>Decentralized price stable currency</span>
                        <p>
                            Dollars neutrino (USD-N) is a crypto-collateralized token pegged to the
                            one US dollar. The first stablecoin protocol which let neutrino holders
                            an ability of staking with rewards from the waves platform’s economy.
                        </p>
                    </div>
                </div>
                <div className={bem.element('second-part')}>
                    <div className={bem.element('abs-boxes', 'top')}>{boxes}</div>
                    <div className={bem.element('abs-boxes', 'bottom')}>{coloredBoxes}</div>
                    <div className={bem.element('romb')}>
                        <div className={bem.element('inner-romb')}>
                            <div className={bem.element('romb-text')}>
                                <span>
                                    <img src={usdnLogo} className={bem.element('usdn-logo')} />
                                    <span>1</span>
                                </span>
                                <span>=</span>
                                <span>$1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
