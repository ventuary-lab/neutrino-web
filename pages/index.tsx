import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import 'style/index.scss';
import 'shared/Layout/Layout.scss';

interface AppConfig {
    env: {
        [key: string]: string;
    };
}
const getGoogleTag = (config: AppConfig) => config.env.google_tag_id;

interface Props {
    googleTagId: string;
}

class LandingPage extends React.Component<Props> {
    static async getInitialProps(ctx: any) {
        const res = await axios.get('/api/v1/init', { baseURL: 'http://localhost:5000' });

        return { googleTagId: getGoogleTag(res.data.config) }
    }

    render() {
        const { googleTagId } = this.props;
        const DynamicLandingPage = dynamic(() => import('routes/LandingPage'), { ssr: true });

        return (
            <div>
                <Head>
                    <link rel="icon" href={'static/images/favicon.ico'} />
                </Head>
                <div className="Layout">
                    <div></div>
                    <DynamicLandingPage />
                </div>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145009690-3"></script>
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${googleTagId}');
                    `}}
                />
                <style jsx>{`
                    background: #f1f1f1;
                `}</style>
            </div>
        );
    }
}

export default LandingPage;
