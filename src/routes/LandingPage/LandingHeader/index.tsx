import React from 'react';
import { html } from 'components';
import OutsideAlerter from 'ui/global/OutsideAlerter';
import mainLogo from 'static/images/logo.svg';
import arrowDown from 'static/images/landing/arrow-down.svg';
import burgerIcon from 'static/images/landing/burger.svg';
import crossIcon from 'static/images/landing/cross-icon.svg';

import './style.scss';

const bem = html.bem('LandingHeader');

interface Props {}
interface State {
    isProductsListVisible: boolean;
    isLearnListVisible: boolean;
    isMobileMenuVisible: boolean;
}
interface Link {
    label: string;
    onClick?: () => void;
    icon?: string;
}

class LandingHeader extends React.Component<Props, State> {
    productLinks!: Link[];
    links!: Link[];

    constructor(props) {
        super(props);

        this.mapLink = this.mapLink.bind(this);
        this.outsideHandler = this.outsideHandler.bind(this);
        this.triggerLearnList = this.triggerLearnList.bind(this);
        this.triggerProductsList = this.triggerProductsList.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
        this.openMobileMenu = this.openMobileMenu.bind(this);

        this.productLinks = [
            {
                label: 'Neutrino dashboard',
            },
            {
                label: 'Bonds dashboard',
            },
            {
                label: 'Staking dashboard',
            },
        ];
        this.links = [
            {
                label: 'Products',
                onClick: this.triggerProductsList,
                icon: arrowDown,
            },
            {
                label: 'Learn',
            },
            {
                label: 'Login',
            },
        ];

        this.state = {
            isProductsListVisible: false,
            isLearnListVisible: false,
            isMobileMenuVisible: false,
        };
    }

    hideMobileMenu() {
        this.setState({ isMobileMenuVisible: false });
    }

    openMobileMenu() {
        this.setState({ isMobileMenuVisible: true });
    }

    triggerLearnList() {
        this.setState(prevState => ({ isLearnListVisible: !prevState.isLearnListVisible }));
    }

    triggerProductsList() {
        this.setState(prevState => ({ isProductsListVisible: !prevState.isProductsListVisible }));
    }

    mapLink({ onClick = () => {}, label, icon }: Link) {
        const { isProductsListVisible, isLearnListVisible } = this.state;
        const isChecked =
            (label === 'Products' && isProductsListVisible) ||
            (label === 'Learn' && isLearnListVisible)
                ? 'opened'
                : '';

        return (
            <li>
                <a href="#" onClick={onClick} className={bem.element('h-link', isChecked)}>
                    <span>{label}</span>
                    {icon && <img src={icon} alt="" />}
                </a>
            </li>
        );
    }

    outsideHandler() {
        this.setState({
            isProductsListVisible: false,
            isLearnListVisible: false,
        });
    }

    render() {
        const links = this.links.map(this.mapLink);
        const productLinks = this.productLinks.map(this.mapLink);
        const { isProductsListVisible, isLearnListVisible, isMobileMenuVisible } = this.state;

        return (
            <div className={bem.element('main')}>
                <div className={bem.element('burger')} onClick={this.openMobileMenu}>
                    <img src={burgerIcon} />
                </div>
                <div className={bem.element('logo')}>
                    <img src={mainLogo} alt="neutrino" />
                    <span>beta</span>
                </div>
                {isMobileMenuVisible && (
                    <div className={bem.element('mobile-menu')}>
                        <div>
                            <img src={crossIcon} alt="" onClick={this.hideMobileMenu} />
                        </div>
                        <ul>
                            {links}
                            {productLinks}
                        </ul>
                    </div>
                )}
                <OutsideAlerter handler={this.outsideHandler} className={bem.element('actions')}>
                    {isProductsListVisible && (
                        <div className={bem.element('products-dp')}>
                            <ul>{productLinks}</ul>
                        </div>
                    )}
                    <ul className={bem.element('links')}>{links}</ul>
                </OutsideAlerter>
            </div>
        );
    }
}

export default LandingHeader;
