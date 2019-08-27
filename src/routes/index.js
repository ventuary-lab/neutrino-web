// import {Redirect, Route} from 'react-router';
import React from 'react';
import IndexPage from './IndexPage';
import NeutrinoDashboard from './NeutrinoDashboard';
import BoundsDashboard from './BoundsDashboard';
import LeadingDashboard from './LeadingDashboard';
import UserRole from 'enums/UserRole';

export const ROUTE_ROOT = 'root';
export const ROUTE_NUETRINO = 'neutrino';
export const ROUTE_BOUNDS = 'bounds';
export const ROUTE_LEASING = 'leasing';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles: UserRole.getKeys(),
    label: __('Main'),
    isShowLeftSidebar: false,
    items: {
        [ROUTE_NUETRINO]: {
            exact: true,
            path: '/neutrino',
            component: NeutrinoDashboard,
            label: __('Neutrino dashboard'),
            roles: UserRole.getKeys(),
            isShowLeftSidebar: true,
        },
        [ROUTE_BOUNDS]: {
            exact: true,
            path: '/bounds',
            component: BoundsDashboard,
            label: __('Bounds dashboard'),
            roles: UserRole.getKeys(),
            isShowLeftSidebar: true,
        },
        [ROUTE_LEASING]: {
            exact: true,
            path: '/leasing',
            component: LeadingDashboard,
            label: __('Leasing dashboard'),
            roles: UserRole.getKeys(),
            isShowLeftSidebar: true,
        },
    },
};
