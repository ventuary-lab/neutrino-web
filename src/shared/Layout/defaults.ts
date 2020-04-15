import {
    NEUTRINO_DASHBOARD_LABEL,
    STAKING_DASHBOARD_LABEL,
    // TRANSFERS_LABEL,
    // INVOICES_LABEL,
    // EXCHANGE_LABEL,
    ARTICLE_LABEL,
    DOCS_LABEL,
    BONDS_DASHBOARD_LABEL,
    WHITEPAPER_LABEL,
    FAQ_LABEL,
    BLOG_LABEL,
    DISCUSSIONS_LABEL,
    GITHUB_LABEL,
    SMART_CONTRACT_LABEL,
    TERMS_OF_USE_LABEL,
    SECURITY_AUDIT_LABEL,
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
    // {
    //     label: EXCHANGE_LABEL,
    //     url: `
    //         https://waves.exchange/dex?assetId1=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p&assetId2=8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS
    //     `.trim(),
    //     target: '_blank',
    // },
    // {
    //     label: TRANSFERS_LABEL,
    //     url: '/transfers/usd-n',
    // },
    // {
    //     label: INVOICES_LABEL,
    //     url: '/invoices/usd-n',
    // },
    {
        label: BONDS_DASHBOARD_LABEL,
        url: '/bonds/usd-n',
    },
    {
        label: ARTICLE_LABEL,
        url: 'https://medium.com/@neutrinoteam/new-major-update-usdnb-nsbt-1e0e544bba8c',
    },
];

export const getArticleUrl = () => {
    const option = defaultProductLinks.find(opt => opt.label === ARTICLE_LABEL);
    return option ? option.url : '';
};

export const defaultLearnLinks = [
    {
        label: DOCS_LABEL,
        url: 'https://docs.neutrino.at',
        target: '_blank',
    },
    {
        label: WHITEPAPER_LABEL,
        url: 'https://wp.neutrino.at/',
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
        url: 'https://legal.neutrino.at/',
        target: '_blank',
    },
    {
        label: SECURITY_AUDIT_LABEL,
        url: 'http://audit.neutrino.at/',
        target: '_blank',
    },
    {
        label: 'Charts',
        url: 'https://coinmarketcap.com/currencies/neutrino-dollar/',
        target: '_blank'
    }
];

export const defaultScreenSizeContext = {
    getEntries: () => [],
    listeners: new Map(),
    isScreenNarrow: isScreenNarrowHelper,
};
