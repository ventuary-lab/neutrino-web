import React from 'react';
import dynamic from 'next/dynamic';

// import LandingPage from '../src/routes/LandingPage';
import 'style/index.scss';
import './static/images/favicon.ico';
import 'shared/Layout/Layout.scss';

const App: React.FC = () => {
    const DynamicLandingPage = dynamic(() => {
        return typeof window === 'undefined' ? null : import('../src/routes/LandingPage')
    }, { ssr: true });

    return (
        <div className='Layout'>
            <div></div>
            <DynamicLandingPage />
        </div>
    )
};

export default App;
