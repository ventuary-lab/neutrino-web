import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import 'style/index.scss';
import 'shared/Layout/Layout.scss';

interface State {
    isInstallModalOpened: boolean;
}

class App extends React.Component<{}, State> {

    render() {
        const DynamicLandingPage = dynamic(() => import('routes/LandingPage'), { ssr: true });
        const landingProps = {
            
        }

        return (
            <div>
                <Head>
                    <link rel="icon" href={'static/images/favicon.ico'} />
                    <link rel="stylesheet" href={'static/fonts/Montserrat.woff'} />
                    <link rel="stylesheet" href={'static/fonts/Montserrat-Bold.woff'} />
                    <link rel="stylesheet" href={'static/fonts/Montserrat-Medium.woff'} />
                    <link rel="stylesheet" href={'static/fonts/Montserrat-Regular.woff'} />
                    <link rel="stylesheet" href={'static/fonts/Montserrat-Light.woff'} />
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
