import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, change} from 'redux-form';
import Link from 'yii-steroids/ui/nav/Link';
import DropDownField from 'yii-steroids/ui/form/DropDownField';
import Form from 'yii-steroids/ui/form/Form';
import {getCurrentItem, getNavItems} from 'yii-steroids/reducers/navigation';
import {goToPage} from 'yii-steroids/actions/navigation';

import {dal, html} from 'components';
import {getQuoteCurrency} from 'reducers/currency';
import CurrencyEnum from 'enums/CurrencyEnum';
import InfoDropDown from 'shared/InfoDropDown';
import logo from 'static/images/logo.svg';
import {ROUTE_ROOT} from 'routes';
import NavItemSchema from 'types/NavItemSchema';

import './Header.scss';
import {getUserRole} from 'yii-steroids/reducers/auth';
import UserSchema from 'types/UserSchema';
import Button from 'yii-steroids/ui/form/Button';

const bem = html.bem('Header');
const FORM_ID = 'SectionToggle';

@connect(
    state => ({
        formValues: getFormValues(FORM_ID)(state),
        navItems: getNavItems(state, ROUTE_ROOT),
        currentItem: getCurrentItem(state),
        activeCurrency: getQuoteCurrency(state),
        userRole: getUserRole(state),
    })
)
export default class Header extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        currentItem: NavItemSchema,
        activeCurrency: PropTypes.oneOf(CurrencyEnum.getKeys()),
        userRole: PropTypes.string,
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.currentItem.id !== ROUTE_ROOT  && nextProps.currentItem.id === ROUTE_ROOT) {
            this.props.dispatch(change(FORM_ID, 'section', null));
        }
    }

    render() {
        const showNav = !!this.props.navItems.find(item => item.roles.includes(this.props.userRole));
        return (
            <header className={bem.block()}>
                <Link
                    className={bem.element('logo')}
                    noStyles
                    toRoute={ROUTE_ROOT}
                >
                    <img
                        className={bem.element('logo-image')}
                        src={logo}
                        alt='Neutrino'
                    />
                </Link>
                {showNav && (
                    <div className={bem.element('section-toggle')}>
                        <Form
                            formId={FORM_ID}
                            initialValues={{
                                section: this.props.navItems.map(item => item.id).includes(this.props.currentItem.id)
                                    ? this.props.currentItem.id
                                    : null
                            }}
                        >
                            <DropDownField
                                attribute={'section'}
                                items={this.props.navItems}
                                onItemChange={(item) => this.props.dispatch(goToPage(item.id, {
                                    currency: this.props.activeCurrency
                                }))}
                                defaultItemLabel={'Products'}
                            />
                        </Form>
                    </div>
                ) || (
                    <Button
                        className={bem.element('auth-button')}
                        label={__('Login with Keeper')}
                        color='secondary'
                        onClick={() => dal.login()}
                    />
                )}
                <div className={'info-dropdown'}>
                    <InfoDropDown
                        icon={'Icon__learn'}
                        label={__('Learn')}
                        items={[
                            {
                                label: __('White paper'),
                                linkUrl: 'https://drive.google.com/file/d/1rJz2LIwPsK7VUxT9af8DKGFIMA5ksioW/view'
                            },
                            {
                                label: __('Blog'),
                                //action: todo
                            }
                        ]}
                    />
                </div>
            </header>
        );
    }
}
