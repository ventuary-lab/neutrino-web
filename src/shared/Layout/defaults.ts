import {
    NEUTRINO_DASHBOARD_LABEL,
    STAKING_DASHBOARD_LABEL,
    TRANSFERS_LABEL,
    INVOICES_LABEL,
    BONDS_DASHBOARD_LABEL,
    WHITEPAPER_LABEL,
    EXCHANGE_LABEL,
    FAQ_LABEL,
    BLOG_LABEL,
    DISCUSSIONS_LABEL,
    GITHUB_LABEL,
    SMART_CONTRACT_LABEL,
    TERMS_OF_USE_LABEL,
    STAKING_REWARDS_LABEL,
} from './constants';
import { isScreenNarrowHelper } from './helpers';

export const defaultProductLinks = [
    {
        label: NEUTRINO_DASHBOARD_LABEL,
        url: '/neutrino/usd-n',
    },
    {
        label: STAKING_DASHBOARD_LABEL,
        url: 'rpd/usd-n',
    },
    {
        label: EXCHANGE_LABEL,
        url: `
            https://waves.exchange/dex?assetId1=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p&assetId2=8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS
        `.trim(),
        target: '_blank',
    },
    {
        label: TRANSFERS_LABEL,
        url: '/transfers/usd-n',
    },
    {
        label: INVOICES_LABEL,
        url: '/invoices/usd-n',
    },
    {
        label: BONDS_DASHBOARD_LABEL,
        url: '/bonds/usd-n',
    },
];

export const defaultLearnLinks = [
    {
        label: WHITEPAPER_LABEL,
        url: 'https://docs.google.com/document/d/1eyUnLZB1HE2uYx4UNyakaecW9FR9n-yJkTjZJ85MVPo/edit',
        target: '_blank',
    },
    {
        label: FAQ_LABEL,
        url: 'https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354',
        target: '_blank',
    },
    {
        label: BLOG_LABEL,
        url: 'https://twitter.com/neutrino_proto',
        target: '_blank',
    },
    {
        label: DISCUSSIONS_LABEL,
        url: 'https://t.me/neutrino_protocol_group',
        target: '_blank',
    },
    {
        label: GITHUB_LABEL,
        url: 'https://github.com/ventuary-lab',
        target: '_blank',
    },
    {
        label: SMART_CONTRACT_LABEL,
        url: 'https://wavesexplorer.com/address/3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo/script',
        target: '_blank',
    },
    {
        label: TERMS_OF_USE_LABEL,
        url:
            'https://docs.google.com/document/d/1gQPtVj5LZ9tbZlyBUYlSYvqAjPpKmEH3ksfiIYlp5CM/edit#heading=h.lvi5m440j6n3',
        target: '_blank',
    },
    {
        label: STAKING_REWARDS_LABEL,
        url: '/staking'
    }
];


export const defaultScreenSizeContext = {
    getEntries: () => [],
    listeners: new Map(),
    isScreenNarrow: isScreenNarrowHelper
};