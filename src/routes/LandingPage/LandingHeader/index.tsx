import React from 'react';
import { buildBem } from '../helpers';
import { goToPage } from 'yii-steroids/actions/navigation';
import OutsideAlerter from 'ui/global/OutsideAlerter';
import CurrencyEnum from 'enums/CurrencyEnum';
import { GlobalLinksContext, InstallKeeperModalContext } from 'shared/Layout/context';
import { Translation } from 'react-i18next';

import { Link } from 'ui/global/types';

const mainLogo = 'static/images/logo.svg';
const arrowDown = 'static/images/landing/arrow-down.svg';
const burgerIcon = 'static/images/landing/burger.svg';
const crossIcon = 'static/images/landing/cross-icon.svg';

import './style.scss';

const bem = buildBem('LandingHeader');

interface Props {}
interface State {
    isProductsListVisible: boolean;
    isLearnListVisible: boolean;
    isMobileMenuVisible: boolean;
}

class LandingHeader extends React.Component<Props, State> {
    // productLinks!: Link[];
    learnLinks!: Link[];

    constructor(props) {
        super(props);

        this.mapLink = this.mapLink.bind(this);
        this.outsideHandler = this.outsideHandler.bind(this);
        this.triggerLearnList = this.triggerLearnList.bind(this);
        this.triggerProductsList = this.triggerProductsList.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.onErrorLogin = this.onErrorLogin.bind(this);
        this.getLinks = this.getLinks.bind(this);

        this.state = {
            isProductsListVisible: false,
            isLearnListVisible: false,
            isMobileMenuVisible: false,
        };
    }

    getLinks (t): Link[] {
        return [
            {
                label: t('common.product.label'),
                onClick: this.triggerProductsList,
                icon: arrowDown,
            },
            {
                label: t('common.learn.label'),
                onClick: this.triggerLearnList,
                icon: arrowDown,
            },
            {
                label: t('common.login.label'),
            },
        ];
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

    onErrorLogin() {}

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
            <Translation>
                {t => (
                    <div className={bem.element('main')}>
                        <GlobalLinksContext.Consumer>
                            {context => (
                                <InstallKeeperModalContext.Consumer>
                                    {installKeeperContext => {
                                        const currentLinks = this.getLinks(t);

                                        currentLinks[currentLinks.length - 1] = {
                                            ...currentLinks[currentLinks.length - 1],
                                            onClick: async () => {
                                                window.location.href = `/neutrino/${CurrencyEnum.USD_N}?openKeeperWarning=1`;
                                            },
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
                                                <div
                                                    className={bem.element('mobile-menu')}
                                                    style={{
                                                        display: !isMobileMenuVisible ? 'none' : '',
                                                    }}
                                                >
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
                                                <OutsideAlerter
                                                    handler={this.outsideHandler}
                                                    className={bem.element('actions')}
                                                >
                                                    {isProductsListVisible && (
                                                        <div
                                                            className={bem.element(
                                                                'sub-dp',
                                                                'products'
                                                            )}
                                                        >
                                                            <ul>{productLinks}</ul>
                                                        </div>
                                                    )}
                                                    {isLearnListVisible && (
                                                        <div
                                                            className={bem.element(
                                                                'sub-dp',
                                                                'learn'
                                                            )}
                                                        >
                                                            <ul>
                                                                {context.links.map(this.mapLink)}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    <ul className={bem.element('links')}>
                                                        {links}
                                                    </ul>
                                                </OutsideAlerter>
                                            </>
                                        );
                                    }}
                                </InstallKeeperModalContext.Consumer>
                            )}
                        </GlobalLinksContext.Consumer>
                    </div>
                )}
            </Translation>
        );
    }
}

export default LandingHeader;
