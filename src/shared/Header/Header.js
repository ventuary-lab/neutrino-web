import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, change } from 'redux-form';
import Link from 'yii-steroids/ui/nav/Link';
import DropDownField from 'yii-steroids/ui/form/DropDownField';
import Form from 'yii-steroids/ui/form/Form';
import { getCurrentItem, getNavItems } from 'yii-steroids/reducers/navigation';
import { goToPage } from 'yii-steroids/actions/navigation';
import Button from 'yii-steroids/ui/form/Button';
import { getUserRole } from 'yii-steroids/reducers/auth';
import { InstallKeeperModalContext, GlobalLinksContext } from 'shared/Layout/context';
import { getExchangeLink } from 'shared/Layout/helpers';

import { html, store } from 'components';
import { getQuoteCurrency } from 'reducers/currency';
import InfoDropDown from 'shared/InfoDropDown';
import logo from 'static/images/logo.svg';
import { ROUTE_ROOT } from 'routes';
import NavItemSchema from 'types/NavItemSchema';

import './Header.scss';

const bem = html.bem('Header');
const FORM_ID = 'SectionToggle';

@connect(state => ({
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

    componentDidUpdate(prevProps) {
        this.lastNavItem = prevProps.currentItem;

        if (this.props.currentItem.id !== ROUTE_ROOT && prevProps.currentItem.id === ROUTE_ROOT && this.lastNavItem) {
            store.dispatch(change(FORM_ID, 'section', this.lastNavItem.id));
        }
    }

    onNavItemChange(item, dexLink) {
        if (item.label === 'Exchange' && this.lastNavItem) {
            window.open(dexLink);
            store.dispatch(change(FORM_ID, 'section', this.lastNavItem.id));
        } else {
            store.dispatch(
                goToPage(item.id, {
                    currency: this.props.quoteCurrency,
                })
            );
        }
    }

    render() {
        const showNav = !!this.props.navItems.find(item =>
            item.roles.includes(this.props.userRole)
        );

        return (
            <GlobalLinksContext.Consumer>
                {links => (
                    <header className={bem.block()}>
                        <Link className={bem.element('logo')} noStyles toRoute={ROUTE_ROOT}>
                            <img className={bem.element('logo-image')} src={logo} alt="Neutrino" />
                        </Link>
                        {(showNav && (
                            <div className={bem.element('section-toggle')}>
                                <Form
                                    formId={FORM_ID}
                                    initialValues={{
                                        section: this.props.navItems
                                            .map(item => item.id)
                                            .includes(this.props.currentItem.id)
                                            ? this.props.currentItem.id
                                            : null,
                                    }}
                                >
                                    <DropDownField
                                        attribute={'section'}
                                        items={this.props.navItems}
                                        onItemChange={item => this.onNavItemChange(item, getExchangeLink(links.product).url)}
                                        defaultItemLabel={'Products'}
                                    />
                                </Form>
                            </div>
                        )) || (
                            <InstallKeeperModalContext.Consumer>
                                {context => (
                                    <Button
                                        className={bem.element('auth-button')}
                                        label={__('Login with Keeper')}
                                        color="secondary"
                                        onClick={() => context.onLogin()}
                                    />
                                )}
                            </InstallKeeperModalContext.Consumer>
                        )}
                        <div className={'info-dropdown'}>
                            <InfoDropDown
                                icon={'Icon__learn'}
                                label={__('Learn')}
                                items={links.links.map(link => ({ ...link, linkUrl: link.url }))}
                            />
                        </div>
                    </header>
                )}
            </GlobalLinksContext.Consumer>
        );
    }
}
