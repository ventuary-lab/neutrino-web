import { createContext } from 'react';
import { defaultLearnLinks, defaultProductLinks } from './defaults';

import { Link } from 'ui/global/types';

export const ConfigContext = createContext({ config: null });

export const UserCongratsModalContext = createContext({ onClose: null, onOpen: null });

type ErrorHandlerFn = <T extends () => void>(onSuccess?: T, onError?: T) => void;

export const InstallKeeperModalContext = createContext<{
    onLogin: ErrorHandlerFn,
    onLogout: ErrorHandlerFn,
    onWebKeeperLogin: () => void;
    openModal: () => void;
    isVisible: boolean;
}>({
    onLogin: () => {},
    onLogout: () => {},
    onWebKeeperLogin: () => {},
    openModal: () => {},
    isVisible: false,
});

export const BlurContext = createContext({ blur: null, unblur: null, checkIsBlurred: null });

export const GlobalLinksContext = createContext<{ links: Link[]; product: Link[] }>({
    links: defaultLearnLinks,
    product: defaultProductLinks,
});

export const LoginTypeModalContext = createContext({ onClose: null, onOpen: null });
