import { createContext } from 'react';
import { Link } from 'ui/global/types';

export const ConfigContext = createContext({ config: null });

export const UserCongratsModalContext = createContext({ onClose: null, onOpen: null });

export const InstallKeeperModalContext = createContext<{
    onLogin: <T extends () => void>(onSuccess?: T, onError?: T) => void;
    onLogout: <T extends () => void>(onSuccess?: T, onError?: T) => void;
    openModal: () => void;
    isVisible: boolean;
}>({
    onLogin: () => {},
    onLogout: () => {},
    openModal: () => {},
    isVisible: false,
});

export const BlurContext = createContext({ blur: null, unblur: null, checkIsBlurred: null });

export const defaultProductLinks = [
    {
        label: 'Neutrino dashboard',
        url: '/neutrino/usd-n',
    },
    {
        label: 'Staking dashboard',
        url: 'rpd/usd-n',
    },
    {
        label: 'Exchange',
        url:
            'https://dex.wavesplatform.com/dex-demo?assetId2=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p&assetId1=WAVES',
    },
    {
        label: 'Transfers',
        url: '/transfers/usd-n',
    },
    {
        label: 'Invoice Generator',
        url: '/invoices/usd-n',
    },
    {
        label: 'Bonds dashboard',
        url: '/bonds/usd-n',
    },
];

export const defaultLearnLinks = [
    {
        label: 'White paper',
        url: 'https://docs.google.com/document/d/1eyUnLZB1HE2uYx4UNyakaecW9FR9n-yJkTjZJ85MVPo/edit',
        target: '_blank',
    },
    {
        label: 'FAQ',
        url: 'https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354',
        target: '_blank',
    },
    {
        label: 'Blog',
        url: 'https://twitter.com/neutrino_proto',
        target: '_blank',
    },
    {
        label: 'Discussions',
        url: 'https://t.me/neutrino_protocol_group',
        target: '_blank',
    },
    {
        label: 'GitHub',
        url: 'https://github.com/ventuary-lab',
        target: '_blank',
    },
    {
        label: 'Smart Contract',
        url: 'https://wavesexplorer.com/address/3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo/script',
        target: '_blank',
    },
    {
        label: 'Terms of Service',
        url:
            'https://docs.google.com/document/d/1gQPtVj5LZ9tbZlyBUYlSYvqAjPpKmEH3ksfiIYlp5CM/edit#heading=h.lvi5m440j6n3',
        target: '_blank',
    },
];

export const GlobalLinksContext = createContext<{ links: Link[]; product: Link[] }>({
    links: defaultLearnLinks,
    product: defaultProductLinks,
});
