import React from 'react';
import { Redirect, Route } from 'react-router';
// import IndexPage from './IndexPage';
import NeutrinoDashboard from './NeutrinoDashboard';
import BondsDashboard from './BondsDashboard';
import LeadingDashboard from './LeadingDashboard';
import StakingLanding from 'shared/Staking/StakingLanding';
import LandingPage from './LandingPage';
import { defaultProductLinks } from 'shared/Layout/defaults';
import { getArticleLink } from 'shared/Layout/helpers';
import {
    // INVOICES_LABEL,
    // TRANSFERS_LABEL,
    // EXCHANGE_LABEL,
    ARTICLE_LABEL,
    NEUTRINO_DASHBOARD_LABEL,
    BONDS_DASHBOARD_LABEL,
    STAKING_DASHBOARD_LABEL,
} from 'shared/Layout/constants';

// Temporary approach
import RpdDashboard from './RpdDashboard';
// import StakingDashboard from 'shared/Staking/Dashboard';
import UserRole from 'enums/UserRole';

export const ROUTE_ROOT = 'root';
export const ROUTE_LANDING_PAGE = 'landing';
export const ROUTE_STAKING_LANDING_PAGE = 'staking';
export const ROUTE_NEUTRINO = 'neutrino';
export const ROUTE_NEUTRINO_SHOW_TRANSFERS = 'neutrino_show_transfers';
export const ROUTE_NEUTRINO_SHOW_INVOICE_GEN = 'neutrino_show_invoice_gen';
export const ROUTE_NEUTRINO_REDIRECT = 'neutrino_redirect';
export const ROUTE_BONDS = 'bonds';
export const ROUTE_BONDS_REDIRECT = 'bonds_redirect';
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
            label: __(NEUTRINO_DASHBOARD_LABEL),
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
            label: __(STAKING_DASHBOARD_LABEL),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        // Exchange: {
        //     exact: true,
        //     // path: '#',
        //     label: __(EXCHANGE_LABEL),
        //     roles: UserRole.getAuth(),
        //     isShowLeftSidebar: true,
        //     url: getExchangeLink(defaultProductLinks),
        // },
        // [ROUTE_NEUTRINO_SHOW_TRANSFERS]: {
        //     exact: true,
        //     path: '/transfers/:currency',
        //     component: NeutrinoDashboard,
        //     label: __(TRANSFERS_LABEL),
        //     roles: UserRole.getAuth(),
        //     isShowLeftSidebar: true,
        // },
        // [ROUTE_NEUTRINO_SHOW_INVOICE_GEN]: {
        //     exact: true,
        //     path: '/invoices/:currency',
        //     component: NeutrinoDashboard,
        //     label: __(INVOICES_LABEL),
        //     roles: UserRole.getAuth(),
        //     isShowLeftSidebar: true,
        // },
        [ROUTE_BONDS]: {
            exact: true,
            path: '/bonds/:currency',
            component: BondsDashboard,
            label: __(BONDS_DASHBOARD_LABEL),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        [ARTICLE_LABEL]: {
            exact: true,
            label: __(ARTICLE_LABEL),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
            url: getArticleLink(defaultProductLinks).url,
        },
        [ROUTE_STAKING_LANDING_PAGE]: {
            exact: true,
            path: '/staking',
            component: StakingLanding,
            label: __('Staking Rewards'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        }
    },
};
