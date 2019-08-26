import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, change} from 'redux-form';
import Link from 'yii-steroids/ui/nav/Link';
import DropDownField from 'yii-steroids/ui/form/DropDownField';
import Form from 'yii-steroids/ui/form/Form';
import {getCurrentItem, getNavItem, getNavItems, getNavUrl} from 'yii-steroids/reducers/navigation';
import {goToPage} from 'yii-steroids/actions/navigation';

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
        indexItem: getNavItem(state, ROUTE_ROOT),
        currentItem: getCurrentItem(state),
    })
)
export default class Header extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.arrayOf(NavItemSchema),
        indexItem: NavItemSchema,
        currentItem: NavItemSchema,
    };

    render() {

        return (
            <header className={bem.block()}>
                <Link
                    className={bem.element('logo')}
                    onClick={() => {
                        this.props.dispatch(goToPage(this.props.indexItem));
                        this.props.dispatch(change(FORM_ID, 'section', null))
                    }}
                    noStyles
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
                            : 'dfs'
                    }}
                >
                    <DropDownField
                        attribute={'section'}
                        className={bem.element('section-toggle')}
                        items={this.props.navItems}
                        onItemChange={(item) => this.props.dispatch(goToPage(item.id))}
                        defaultItemLabel={'Products'}
                    />
                </Form>
            </header>
        );
    }
}
