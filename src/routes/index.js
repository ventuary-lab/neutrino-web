// import {Redirect, Route} from 'react-router';
import React from 'react';
import IndexPage from './IndexPage';
import UserRole from 'enums/UserRole';

export const ROUTE_ROOT = 'root';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles: UserRole.getKeys(),
    label: __('Main'),
    items: {},
};
