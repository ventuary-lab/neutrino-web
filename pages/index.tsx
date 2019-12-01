import React from 'react';
import dynamic from 'next/dynamic';

import 'style/index.scss';
import 'static/images/favicon.ico';
import 'shared/Layout/Layout.scss';

const App: React.FC = () => {
    const DynamicLandingPage = dynamic(() => import('../src/routes/LandingPage'), { ssr: false });

    return (
        <div className='Layout'>
            <div></div>
            <DynamicLandingPage />
        </div>
    )
};

export default App;
