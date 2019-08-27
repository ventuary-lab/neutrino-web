import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, change} from 'redux-form';
import Link from 'yii-steroids/ui/nav/Link';
import DropDownField from 'yii-steroids/ui/form/DropDownField';
import Form from 'yii-steroids/ui/form/Form';
import {getCurrentItem, getNavItem, getNavItems, getNavUrl} from 'yii-steroids/reducers/navigation';
import {goToPage} from 'yii-steroids/actions/navigation';
import CurrencyEnum from 'enums/CurrencyEnum';

import {html} from 'components';
import logo from 'static/images/logo.svg';
import {ROUTE_ROOT} from 'routes';
import NavItemSchema from 'types/NavItemSchema';

import './Header.scss';

const bem = html.bem('Header');
const FORM_ID = 'SectionToggle';

@connect(
    state => ({
        formValues: getFormValues(FORM_ID)(state),
        navItems: getNavItems(state, ROUTE_ROOT),
        currentItem: getCurrentItem(state),
        activeCurrency: state.layout.currency,
    })
)
export default class Header extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        currentItem: NavItemSchema,
        activeCurrency: PropTypes.oneOf(CurrencyEnum.getKeys())
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.currentItem.id !== ROUTE_ROOT  && nextProps.currentItem.id === ROUTE_ROOT) {
            this.props.dispatch(change(FORM_ID, 'section', null))
        }
    }

    render() {
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
                        className={bem.element('section-toggle')}
                        items={this.props.navItems}
                        onItemChange={(item) => this.props.dispatch(goToPage(item.id, {
                            currency: this.props.activeCurrency
                        }))}
                        defaultItemLabel={'Products'}
                    />
                </Form>
            </header>
        );
    }
}
