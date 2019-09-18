import React from 'react';
import {Redirect, Route} from 'react-router';
import IndexPage from './IndexPage';
import NeutrinoDashboard from './NeutrinoDashboard';
import BoundsDashboard from './BoundsDashboard';
import LeadingDashboard from './LeadingDashboard';
import UserRole from 'enums/UserRole';

export const ROUTE_ROOT = 'root';
export const ROUTE_NUETRINO = 'neutrino';
export const ROUTE_NUETRINO_REDIRECT = 'neutrino_redirect';
export const ROUTE_BOUNDS = 'bounds';
export const ROUTE_BOUNDS_REDIRECT = 'bounds_redirect';
export const ROUTE_LEASING = 'leasing';
export const ROUTE_LEASING_REDIRECT = 'leasing_redirect';

const store = require('components').store;
const activeCurrency = store.getState().currency.quote;

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles: UserRole.getKeys(),
    label: __('Main'),
    isShowLeftSidebar: false,
    items: {
        [ROUTE_NUETRINO_REDIRECT]: {
            exact: true,
            path: '/neutrino',
            component: Route,
            componentProps: {
                render: () => (
                    <Redirect to={`/neutrino/${activeCurrency}`}/>
                )
            },
            isVisible: false,
            roles: UserRole.getAuth(),
        },
        [ROUTE_NUETRINO]: {
            exact: true,
            path: '/neutrino/:currency',
            component: NeutrinoDashboard,
            label: __('Neutrino dashboard'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        [ROUTE_BOUNDS_REDIRECT]: {
            exact: true,
            path: '/bounds',
            component: Route,
            componentProps: {
                render: () => (
                    <Redirect to={`/bounds/${activeCurrency}`}/>
                )
            },
            isVisible: false,
            roles: UserRole.getAuth(),
        },
        [ROUTE_BOUNDS]: {
            exact: true,
            path: '/bounds/:currency',
            component: BoundsDashboard,
            label: __('Bounds dashboard'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
        [ROUTE_LEASING_REDIRECT]: {
            exact: true,
            path: '/leasing',
            component: Route,
            componentProps: {
                render: () => (
                    <Redirect to={`/leasing/${activeCurrency}`}/>
                )
            },
            isVisible: false,
            roles: UserRole.getAuth(),
        },
        [ROUTE_LEASING]: {
            exact: true,
            path: '/leasing/:currency',
            component: LeadingDashboard,
            label: __('Leasing dashboard'),
            roles: UserRole.getAuth(),
            isShowLeftSidebar: true,
        },
    },
};
