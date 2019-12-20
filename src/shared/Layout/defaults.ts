import { t as translateGetter } from 'locales/config';
import { STAKING_REWARDS_LABEL } from './constants'; // Temp

export const getDefaultProductLinks = (t = translateGetter) => [
    {
        label: t('heading.neutrino_dashboard.label'),
        url: '/neutrino/usd-n',
    },
    {
        label: t('heading.staking_dashboard.label'),
        url: 'rpd/usd-n',
    },
    {
        label: t('common.exchange.label'),
        url: `
            https://waves.exchange/dex?assetId1=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p&assetId2=8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS
        `.trim(),
        target: '_blank',
    },
    {
        label: t('heading.transfers.label'),
        url: '/transfers/usd-n',
    },
    {
        label: t('heading.invoice_generator.label'),
        url: '/invoices/usd-n',
    },
    {
        label: t('heading.bonds_dashboard.label'),
        url: '/bonds/usd-n',
    },
];

export const getDefaultLearnLinks = (t = translateGetter) => [
    {
        label:  t('common.white_paper.label'),
        url: 'https://docs.google.com/document/d/1eyUnLZB1HE2uYx4UNyakaecW9FR9n-yJkTjZJ85MVPo/edit',
        target: '_blank',
    },
    {
        label: t('common.faq.label'),
        url: 'https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354',
        target: '_blank',
    },
    {
        label: t('common.blog.label'),
        url: 'https://twitter.com/neutrino_proto',
        target: '_blank',
    },
    {
        label: t('common.discussions.label'),
        url: 'https://t.me/neutrino_protocol_group',
        target: '_blank',
    },
    {
        label: t('common.github.label'),
        url: 'https://github.com/ventuary-lab',
        target: '_blank',
    },
    {
        label: t('common.smart_contract.label'),
        url: 'https://wavesexplorer.com/address/3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo/script',
        target: '_blank',
    },
    {
        label: t('common.terms_of_use.label'),
        url:
            'https://docs.google.com/document/d/1gQPtVj5LZ9tbZlyBUYlSYvqAjPpKmEH3ksfiIYlp5CM/edit#heading=h.lvi5m440j6n3',
        target: '_blank',
    },
    {
        label: STAKING_REWARDS_LABEL,
        url: '/staking'
    }
];
