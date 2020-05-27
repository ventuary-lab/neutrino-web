import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, change } from 'redux-form';
import Link from 'yii-steroids/ui/nav/Link';
import { Translation } from 'react-i18next';
import LanguageSwitcher from 'shared/LanguageSwitcher';
import DropDownField from 'yii-steroids/ui/form/DropDownField';
import Form from 'yii-steroids/ui/form/Form';
import { getCurrentItem, getNavItems } from 'yii-steroids/reducers/navigation';
import { goToPage } from 'yii-steroids/actions/navigation';
import Button from 'yii-steroids/ui/form/Button';
import { getUserRole } from 'yii-steroids/reducers/auth';
import { getLanguageDropdownProps } from 'locales/config';
import {
    // InstallKeeperModalContext,
    GlobalLinksContext,
    LoginTypeModalContext,
} from 'shared/Layout/context';
import { getArticleLink } from 'shared/Layout/helpers';
import {
    TRANSFERS_LABEL,
    ARTICLE_LABEL,
    INVOICES_LABEL,
    getLabelTranslationMap,
} from 'shared/Layout/constants';

import { html, store } from 'components';
import { getQuoteCurrency } from 'reducers/currency';
import InfoDropDown from 'shared/InfoDropDown';
import logo from 'static/images/logo.svg';
import { ROUTE_ROOT, ROUTE_STAKING_LANDING_PAGE } from 'routes';
import NavItemSchema from 'types/NavItemSchema';

import './Header.scss';

const bem = html.bem('Header');
const FORM_ID = 'SectionToggle';

@connect((state) => ({
    formValues: getFormValues(FORM_ID)(state),
    navItems: getNavItems(state, ROUTE_ROOT),
    currentItem: getCurrentItem(state),
    quoteCurrency: getQuoteCurrency(state),
    userRole: getUserRole(state),
}))
export default class Header extends React.PureComponent {
    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        currentItem: NavItemSchema,
        quoteCurrency: PropTypes.string,
        userRole: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.onNavItemChange = this.onNavItemChange.bind(this);

        this.lastNavItem = null;
    }

    componentDidMount() {}

    componentDidUpdate(prevProps) {
        this.lastNavItem = prevProps.currentItem;

        if (
            this.props.currentItem.id !== ROUTE_ROOT &&
            prevProps.currentItem.id === ROUTE_ROOT &&
            this.lastNavItem
        ) {
            store.dispatch(change(FORM_ID, 'section', this.lastNavItem.id));
        }
    }

    onNavItemChange(item, dexLink) {
        if (item.label === ARTICLE_LABEL && this.lastNavItem) {
            window.open(dexLink);
            store.dispatch(change(FORM_ID, 'section', this.lastNavItem.id));
        } else {
            if ([TRANSFERS_LABEL, INVOICES_LABEL].includes(item.label)) {
                store.dispatch(
                    goToPage('neutrino', {
                        currency: this.props.quoteCurrency,
                    })
                );
                setImmediate(() =>
                    store.dispatch(
                        goToPage(item.id, {
                            currency: this.props.quoteCurrency,
                        })
                    )
                );
                return;
            }

            store.dispatch(
                goToPage(item.id, {
                    currency: this.props.quoteCurrency,
                })
            );
        }
    }

    render() {
        const showNav = !!this.props.navItems.find((item) =>
            item.roles.includes(this.props.userRole)
        );
        let navItems = this.props.navItems.filter(
            (item) => [ROUTE_STAKING_LANDING_PAGE].indexOf(item.id) === -1
        );

        return (
            <Translation>
                {(t) => {
                    const translationMap = getLabelTranslationMap(t);
                    navItems = navItems.map((navItem) => {
                        navItem.label = translationMap[navItem.label] || navItem.label;
                        return navItem;
                    });

                    return (
                        <GlobalLinksContext.Consumer>
                            {(links) => (
                                <header className={bem.block()}>
                                    <Link
                                        className={bem.element('logo')}
                                        noStyles
                                        toRoute={ROUTE_ROOT}
                                    >
                                        <img
                                            className={bem.element('logo-image')}
                                            src={logo}
                                            alt="Neutrino"
                                        />
                                    </Link>
                                    {(showNav && (
                                        <div className={bem.element('section-toggle')}>
                                            <Form
                                                formId={FORM_ID}
                                                initialValues={{
                                                    section: navItems
                                                        .map((item) => item.id)
                                                        .includes(this.props.currentItem.id)
                                                        ? this.props.currentItem.id
                                                        : null,
                                                }}
                                            >
                                                <DropDownField
                                                    attribute={'section'}
                                                    items={navItems}
                                                    onItemChange={(item) => {
                                                        const link = getArticleLink(links.product);
                                                        return this.onNavItemChange(
                                                            item,
                                                            link && link.url
                                                        );
                                                    }}
                                                    defaultItemLabel={'Products'}
                                                />
                                            </Form>
                                        </div>
                                    )) || (
                                        <LoginTypeModalContext.Consumer>
                                            {(loginContext) => (
                                                <Button
                                                    className={bem.element('auth-button')}
                                                    label={t('common.login.label')}
                                                    color="secondary"
                                                    onClick={() => {
                                                        loginContext.onOpen();
                                                    }}
                                                />
                                            )}
                                        </LoginTypeModalContext.Consumer>
                                    )}
                                    <div className={'info-dropdown'}>
                                        <InfoDropDown
                                            icon={'Icon__learn'}
                                            label={t('common.learn.label')}
                                            items={links.links.map((link) => ({
                                                ...link,
                                                label: translationMap[link.label] || link.label,
                                                linkUrl: link.url,
                                            }))}
                                        />
                                        <LanguageSwitcher {...getLanguageDropdownProps()} />
                                    </div>
                                </header>
                            )}
                        </GlobalLinksContext.Consumer>
                    );
                }}
            </Translation>
        );
    }
}
