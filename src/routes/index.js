import React from 'react';
import { Redirect, Route } from 'react-router';
import { t as translateGetter } from 'locales/config';
// import IndexPage from './IndexPage';
import NeutrinoDashboard from './NeutrinoDashboard';
import BondsDashboard from './BondsDashboard';
// import LeadingDashboard from './LeadingDashboard';
import StakingLanding from 'shared/Staking/StakingLanding';
import LandingPage from './LandingPage';
import { getDefaultProductLinks } from 'shared/Layout/defaults';
import { getArticleLink } from 'shared/Layout/helpers';

// Temporary approach
import { ARTICLE_LABEL } from 'shared/Layout/constants';
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

export const getItems = (t = translateGetter) => ({
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
        label: t('heading.neutrino_dashboard.label'),
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
        label: t('heading.staking_dashboard.label'),
        roles: UserRole.getAuth(),
        isShowLeftSidebar: true,
    },
    [ROUTE_BONDS]: {
        exact: true,
        path: '/bonds/:currency',
        component: BondsDashboard,
        label: t('heading.bonds_dashboard.label'),
        roles: UserRole.getAuth(),
        isShowLeftSidebar: true,
    },
    [ARTICLE_LABEL]: {
        exact: true,
        label: ARTICLE_LABEL,
        roles: UserRole.getAuth(),
        isShowLeftSidebar: true,
        url: getArticleLink(getDefaultProductLinks(translateGetter)).url,
    },
    [ROUTE_STAKING_LANDING_PAGE]: {
        exact: true,
        path: '/staking',
        component: StakingLanding,
        label: t('heading.staking_rewards.label'),
        roles: UserRole.getAuth(),
        isShowLeftSidebar: true,
    },
});

export const getNavItemsList = (t) => Object.entries(getItems(t)).map(([key, val]) => val);

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: LandingPage,
    roles: UserRole.getKeys(),
    label: __('Main'),
    isShowLeftSidebar: false,
    items: getItems(),
};
