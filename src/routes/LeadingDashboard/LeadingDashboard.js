import React from 'react';
import LeasingTable from './views/LeasingTable';
import LeasingChart from './views/LeasingChart';
import LeasingForm from './views/LeasingForm';

import {html} from 'components';

import './LeadingDashboard.scss';

const bem = html.bem('LeadingDashboard');

const LEASERS = [
    {
        id: 1,
        address: '3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb',
        website: 'WavesGo',
        miningShare: {
            absolute: '7.3kk',
            percent: 20
        },
        leasersPayouts: {
            absolute: '7.3kk',
            percent: 32,
        },
        myLeasing: 0,
    },
    {
        id: 2,
        address: '3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r',
        website: 'BlackTurtlNode',
        miningShare: {
            absolute: '6.4kk',
            percent: 14.89
        },
        leasersPayouts: {
            absolute: '6.4kk',
            percent: 55,
        },
        myLeasing: 20,
    },
    {
        id: 3,
        address: '3PNMvAqJWYPkwf8fhz46rZiLEWpTmuhD3Uh',
        website: 'POSPOOL',
        miningShare: {
            absolute: '1.5kk',
            percent: 10.11
        },
        leasersPayouts: {
            absolute: '1.5kk',
            percent: 55,
        },
        myLeasing: 0,
    },
    {
        id: 4,
        address: '3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb',
        website: 'WavesGo',
        miningShare: {
            absolute: '7.3kk',
            percent: 20
        },
        leasersPayouts: {
            absolute: '7.3kk',
            percent: 55,
        },
        myLeasing: 0,
    },
    {
        id: 5,
        address: '3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r',
        website: 'BlackTurtlNode',
        miningShare: {
            absolute: '6.4kk',
            percent: 14.89
        },
        leasersPayouts: {
            absolute: '6.4kk',
            percent: 95,
        },
        myLeasing: 20,
    },
    {
        id: 6,
        address: '3PNMvAqJWYPkwf8fhz46rZiLEWpTmuhD3Uh',
        website: 'POSPOOL',
        miningShare: {
            absolute: '1.5kk',
            percent: 10.11
        },
        leasersPayouts: {
            absolute: '1.5kk',
            percent: 85,
        },
        myLeasing: 0,
    },
    {
        id: 7,
        address: '3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb',
        website: 'WavesGo',
        miningShare: {
            absolute: '7.3kk',
            percent: 20
        },
        leasersPayouts: {
            absolute: '7.3kk',
            percent: 15,
        },
        myLeasing: 0,
    },
    {
        id: 8,
        address: '3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r',
        website: 'BlackTurtlNode',
        miningShare: {
            absolute: '6.4kk',
            percent: 14.89
        },
        leasersPayouts: {
            absolute: '6.4kk',
            percent: 65,
        },
        myLeasing: 20,
    },
    {
        id: 9,
        address: '3PNMvAqJWYPkwf8fhz46rZiLEWpTmuhD3Uh',
        website: 'POSPOOL',
        miningShare: {
            absolute: '1.5kk',
            percent: 10.11
        },
        leasersPayouts: {
            absolute: '1.5kk',
            percent: 25,
        },
        myLeasing: 0,
    },
    {
        id: 10,
        address: '3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb',
        website: 'WavesGo',
        miningShare: {
            absolute: '7.3kk',
            percent: 20
        },
        leasersPayouts: {
            absolute: '7.3kk',
            percent: 75,
        },
        myLeasing: 0,
    },
    {
        id: 11,
        address: '3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r',
        website: 'BlackTurtlNode',
        miningShare: {
            absolute: '6.4kk',
            percent: 14.89
        },
        leasersPayouts: {
            percent: 95,
            absolute: '6.4kk',
        },
        myLeasing: 20,
    },
    {
        id: 12,
        address: '3PNMvAqJWYPkwf8fhz46rZiLEWpTmuhD3Uh',
        website: 'POSPOOL',
        miningShare: {
            absolute: '1.5kk',
            percent: 10.11
        },
        leasersPayouts: {
            absolute: '6.4kk',
            percent: 85,
        },
        myLeasing: 0,
    },
];

export default class LeadingDashboard extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('leasing-table')}>
                    <LeasingTable leasers={LEASERS} />
                </div>
                <div className={bem.element('leasing-footer-wrap')}>
                    <div className={bem.element('leasing-chart')}>
                        <LeasingChart />
                    </div>
                    <div className={bem.element('leasing-form')}>
                        <LeasingForm />
                    </div>
                </div>
            </div>
        );
    }
}
