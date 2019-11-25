import React from 'react';
import { Redirect, Route } from 'react-router';
import IndexPage from './IndexPage';
import NeutrinoDashboard from './NeutrinoDashboard';
import BoundsDashboard from './BoundsDashboard';
import LeadingDashboard from './LeadingDashboard';
import LandingPage from './LandingPage';

// Temporary approach
import RpdDashboard from './RpdDashboard';
// import StakingDashboard from 'shared/Staking/Dashboard';
import UserRole from 'enums/UserRole';

export const ROUTE_ROOT = 'root';
export const ROUTE_LANDING_PAGE = 'landing';
export const ROUTE_NEUTRINO = 'neutrino';
export const ROUTE_NEUTRINO_SHOW_TRANSFERS = 'neutrino_show_transfers';
export const ROUTE_NEUTRINO_SHOW_INVOICE_GEN = 'neutrino_show_invoice_gen';
export const ROUTE_NEUTRINO_REDIRECT = 'neutrino_redirect';
export const ROUTE_BONDS = 'bonds';
export const ROUTE_BONDS_REDIRECT = 'bounds_redirect';
export const ROUTE_LEASING = 'leasing';
export const ROUTE_LEASING_REDIRECT = 'leasing_redirect';
export const ROUTE_RPD = 'rpd';
export const ROUTE_RPD_REDIRECT = 'rpd_redirect';

const store = require('components').store;
const activeCurrency = store.getState().currency.quote;

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: LandingPage,
    roles: UserRole.getKeys(),
    label: __('Main'),
    isShowLeftSidebar: false,
    items: {
        [ROUTE_NEUTRINO_REDIRECT]: {
            exact: true,
            path: '/neutrino',
            component: Route,
            componentProps: {
                render: () => <Redirect to={`/neutrino/${activeCurrency}`} />,
            },
            isVisible: false,
            roles: UserRole.getAuth(),
        },
        [ROUTE_NEUTRINO]: {
            exact: true,
            path: '/neutrino/:currency',
            component: NeutrinoDashboard,
            label: __('Neutrino dashboard'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        [ROUTE_BONDS_REDIRECT]: {
            exact: true,
            path: '/bonds',
            component: Route,
            componentProps: {
                render: () => <Redirect to={`/bonds/${activeCurrency}`} />,
            },
            isVisible: false,
            roles: UserRole.getAuth(),
        },
        [ROUTE_LEASING_REDIRECT]: {
            exact: true,
            path: '/leasing',
            component: Route,
            componentProps: {
                render: () => <Redirect to={`/leasing/${activeCurrency}`} />,
            },
            isVisible: false,
            roles: UserRole.getAuth(),
        },
        [ROUTE_LEASING]: {
            exact: true,
            isVisible: false, //TODO del when leasing dashboard was ready
            path: '/leasing/:currency',
            component: LeadingDashboard,
            label: __('Leasing dashboard'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        [ROUTE_RPD_REDIRECT]: {
            exact: true,
            path: '/rpd',
            component: Route,
            componentProps: {
                render: () => <Redirect to={`/rpd/${activeCurrency}`} />,
            },
            isVisible: false,
            roles: UserRole.getAuth(),
        },
        [ROUTE_RPD]: {
            exact: true,
            path: '/rpd/:currency',
            component: RpdDashboard,
            label: __('Staking dashboard'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        [ROUTE_NEUTRINO_SHOW_TRANSFERS]: {
            exact: true,
            path: '/transfers/:currency',
            component: NeutrinoDashboard,
            label: __('Transfers'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        [ROUTE_NEUTRINO_SHOW_INVOICE_GEN]: {
            exact: true,
            path: '/invoices/:currency',
            component: NeutrinoDashboard,
            label: __('Invoice generator'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        [ROUTE_BONDS]: {
            exact: true,
            path: '/bonds/:currency',
            component: BoundsDashboard,
            label: __('Bonds dashboard'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        }
    },
};
