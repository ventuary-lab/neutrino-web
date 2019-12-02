import React from 'react';
import { html, store, dal } from 'components';
import { goToPage } from 'yii-steroids/actions/navigation';
import OutsideAlerter from 'ui/global/OutsideAlerter';
import CurrencyEnum from 'enums/CurrencyEnum';
import { GlobalLinksContext, InstallKeeperModalContext } from 'shared/Layout/context';

import { Link } from 'ui/global/types';
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

class LandingHeader extends React.Component<Props, State> {
    // productLinks!: Link[];
    learnLinks!: Link[];
    links!: Link[];

    constructor(props) {
        super(props);

        this.mapLink = this.mapLink.bind(this);
        this.outsideHandler = this.outsideHandler.bind(this);
        this.triggerLearnList = this.triggerLearnList.bind(this);
        this.triggerProductsList = this.triggerProductsList.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.onErrorLogin = this.onErrorLogin.bind(this);
        this.onSuccessLogin = this.onSuccessLogin.bind(this);

        this.links = [
            {
                label: 'Products',
                onClick: this.triggerProductsList,
                icon: arrowDown,
            },
            {
                label: 'Learn',
                onClick: this.triggerLearnList,
                icon: arrowDown,
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
        this.setState(prevState => ({
            isProductsListVisible: false,
            isLearnListVisible: !prevState.isLearnListVisible,
        }));
    }

    triggerProductsList() {
        this.setState(prevState => ({
            isLearnListVisible: false,
            isProductsListVisible: !prevState.isProductsListVisible,
        }));
    }

    mapLink({ onClick = () => {}, label, icon, url, ...restProps }: Link) {
        const { isProductsListVisible, isLearnListVisible } = this.state;
        const isChecked =
            (label === 'Products' && isProductsListVisible) ||
            (label === 'Learn' && isLearnListVisible)
                ? 'opened'
                : '';

        return (
            <li>
                <a
                    {...restProps}
                    href={url || '#'}
                    onClick={onClick}
                    className={bem.element('h-link', isChecked)}
                >
                    <span>{label}</span>
                    {icon && <img src={icon} alt="" />}
                </a>
            </li>
        );
    }

    onSuccessLogin () {
        store.dispatch(goToPage('neutrino', { currency: CurrencyEnum.USD_N }));
    }

    onErrorLogin () {}

    outsideHandler() {
        this.setState({
            isProductsListVisible: false,
            isLearnListVisible: false,
        });
    }

    render() {
        // const productLinks = this.productLinks.map(this.mapLink);
        const { isProductsListVisible, isLearnListVisible, isMobileMenuVisible } = this.state;

        return (
            <div className={bem.element('main')}>
                <GlobalLinksContext.Consumer>
                    {context => (
                        <InstallKeeperModalContext.Consumer>
                            {installKeeperContext => {
                                const { links: currentLinks } = this;
                                currentLinks[currentLinks.length - 1] = {
                                    ...currentLinks[currentLinks.length - 1],
                                    onClick: async () => {

                                        try {
                                            await dal.login();
                                            store.dispatch(goToPage('neutrino', { currency: CurrencyEnum.USD_N }));
                                        } finally {
                                            installKeeperContext.openModal();
                                        }
                                    }
                                };
                                const links = currentLinks.map(this.mapLink);
                                const productLinks = context.product.map(this.mapLink);

                                return (
                                    <>
                                        <div
                                            className={bem.element('burger')}
                                            onClick={this.openMobileMenu}
                                        >
                                            <img src={burgerIcon} />
                                        </div>
                                        <div className={bem.element('logo')}>
                                            <a href="/">
                                                <img src={mainLogo} alt="neutrino" />
                                            </a>
                                            <span>beta</span>
                                        </div>
                                        {isMobileMenuVisible && (
                                            <div className={bem.element('mobile-menu')}>
                                                <div>
                                                    <img
                                                        src={crossIcon}
                                                        alt=""
                                                        onClick={this.hideMobileMenu}
                                                    />
                                                </div>
                                                <ul>
                                                    {links[links.length - 1]}
                                                    {productLinks}
                                                    {context.links.map(this.mapLink)}
                                                </ul>
                                            </div>
                                        )}
                                        <OutsideAlerter
                                            handler={this.outsideHandler}
                                            className={bem.element('actions')}
                                        >
                                            {isProductsListVisible && (
                                                <div className={bem.element('sub-dp', 'products')}>
                                                    <ul>{productLinks}</ul>
                                                </div>
                                            )}
                                            {isLearnListVisible && (
                                                <div className={bem.element('sub-dp', 'learn')}>
                                                    <ul>{context.links.map(this.mapLink)}</ul>
                                                </div>
                                            )}
                                            <ul className={bem.element('links')}>{links}</ul>
                                        </OutsideAlerter>
                                    </>
                                );
                            }}
                        </InstallKeeperModalContext.Consumer>
                    )}
                </GlobalLinksContext.Consumer>
            </div>
        );
    }
}

export default LandingHeader;
