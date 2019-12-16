import { createContext } from 'react';
import {
    getDefaultLearnLinks,
    getDefaultProductLinks
} from './defaults';

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

export const GlobalLinksContext = createContext<{ links: Link[]; product: Link[] }>({
    links: getDefaultLearnLinks(),
    product: getDefaultProductLinks(),
});
