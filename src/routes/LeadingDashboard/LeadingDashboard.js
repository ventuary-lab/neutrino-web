import React from 'react';
import LeasingTable from './views/LeasingTable';
import './LeadingDashboard.scss';

import {html} from 'components';
const bem = html.bem('LeadingDashboard');

const LEASERS = [
    {
        id: 1,
        address: '3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb',
        website: {
            address: 'WavesGo',
            traffic: '8.5kk'
        },
        miningShare: {
            absolute: '7.3kk',
            percent: 20
        },
        leasersPayouts: {
            percent: 32,
        },
        myLeasing: 0,
    },
    {
        id: 2,
        address: '3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r',
        website: {
            address: 'BlackTurtlNode',
            traffic: '6.4kk'
        },
        miningShare: {
            absolute: '6.4kk',
            percent: 14.89
        },
        leasersPayouts: {
            percent: 55,
        },
        myLeasing: 20,
    },
    {
        id: 3,
        address: '3PNMvAqJWYPkwf8fhz46rZiLEWpTmuhD3Uh',
        website: {
            address: 'POSPOOL',
            traffic: '4.5kk'
        },
        miningShare: {
            absolute: '1.5kk',
            percent: 10.11
        },
        leasersPayouts: {
            percent: 55,
        },
        myLeasing: 0,
    },
    {
        id: 4,
        address: '3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb',
        website: {
            address: 'WavesGo',
            traffic: '8.5kk'
        },
        miningShare: {
            absolute: '7.3kk',
            percent: 20
        },
        leasersPayouts: {
            percent: 55,
        },
        myLeasing: 0,
    },
    {
        id: 5,
        address: '3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r',
        website: {
            address: 'BlackTurtlNode',
            traffic: '6.4kk'
        },
        miningShare: {
            absolute: '6.4kk',
            percent: 14.89
        },
        leasersPayouts: {
            percent: 95,
        },
        myLeasing: 20,
    },
    {
        id: 6,
        address: '3PNMvAqJWYPkwf8fhz46rZiLEWpTmuhD3Uh',
        website: {
            address: 'POSPOOL',
            traffic: '4.5kk'
        },
        miningShare: {
            absolute: '1.5kk',
            percent: 10.11
        },
        leasersPayouts: {
            percent: 85,
        },
        myLeasing: 0,
    },
    {
        id: 7,
        address: '3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb',
        website: {
            address: 'WavesGo',
            traffic: '8.5kk'
        },
        miningShare: {
            absolute: '7.3kk',
            percent: 20
        },
        leasersPayouts: {
            percent: 15,
        },
        myLeasing: 0,
    },
    {
        id: 8,
        address: '3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r',
        website: {
            address: 'BlackTurtlNode',
            traffic: '6.4kk'
        },
        miningShare: {
            absolute: '6.4kk',
            percent: 14.89
        },
        leasersPayouts: {
            percent: 65,
        },
        myLeasing: 20,
    },
    {
        id: 9,
        address: '3PNMvAqJWYPkwf8fhz46rZiLEWpTmuhD3Uh',
        website: {
            address: 'POSPOOL',
            traffic: '4.5kk'
        },
        miningShare: {
            absolute: '1.5kk',
            percent: 10.11
        },
        leasersPayouts: {
            percent: 25,
        },
        myLeasing: 0,
    },
    {
        id: 10,
        address: '3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb',
        website: {
            address: 'WavesGo',
            traffic: '8.5kk'
        },
        miningShare: {
            absolute: '7.3kk',
            percent: 20
        },
        leasersPayouts: {
            percent: 75,
        },
        myLeasing: 0,
    },
    {
        id: 11,
        address: '3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r',
        website: {
            address: 'BlackTurtlNode',
            traffic: '6.4kk'
        },
        miningShare: {
            absolute: '6.4kk',
            percent: 14.89
        },
        leasersPayouts: {
            percent: 95,
        },
        myLeasing: 20,
    },
    {
        id: 12,
        address: '3PNMvAqJWYPkwf8fhz46rZiLEWpTmuhD3Uh',
        website: {
            address: 'POSPOOL',
            traffic: '4.5kk'
        },
        miningShare: {
            absolute: '1.5kk',
            percent: 10.11
        },
        leasersPayouts: {
            percent: 85,
        },
        myLeasing: 0,
    },
]

export default class LeadingDashboard extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('leasing-table')}>
                    <LeasingTable leasers={LEASERS} />
                </div>
            </div>
        );
    }
}
