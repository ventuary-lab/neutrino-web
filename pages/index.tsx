import React from 'react';
import dynamic from 'next/dynamic';
let routes, ROUTE_ROOT;

if (typeof window !== 'undefined') {
    const rs = require('routes');
    routes = rs.default;
    ROUTE_ROOT = rs.ROUTE_ROOT;
}

import 'style/index.scss';
import 'static/images/favicon.ico';
import 'shared/Layout/Layout.scss';

const App: React.FC = () => {
    const Layout = dynamic(() => import('../src/routes/LandingPage'), { ssr: true });

    return routes && ROUTE_ROOT ? <Layout page={routes[ROUTE_ROOT]} /> : <div style={{ display: 'none' }}>I am empty :(</div>;
};

export default App;
