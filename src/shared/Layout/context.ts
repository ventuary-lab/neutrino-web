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

export const defaultLearnLinks = [
    {
        label: 'White paper',
        url: 'https://drive.google.com/file/d/1QcA8msCWPTbAVGg5_VGGGttm11WHghwX/view',
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

export const LearnLinksContext = createContext<{ links: Link[] }>({
    links: defaultLearnLinks,
});
