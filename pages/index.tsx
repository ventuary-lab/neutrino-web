import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import 'style/index.scss';
import 'shared/Layout/Layout.scss';

class App extends React.Component {
    render() {
        const DynamicLandingPage = dynamic(() => import('routes/LandingPage'), { ssr: true });
        const landingProps = {};

        return (
            <div>
                <Head>
                    <link rel="icon" href={'static/images/favicon.ico'} />
                </Head>
                <div className="Layout">
                    <div></div>
                    <DynamicLandingPage {...landingProps}/>
                </div>
                <style jsx>{`
                    background: #f1f1f1;
                `}</style>
            </div>
        );
    }
}

export default App;
