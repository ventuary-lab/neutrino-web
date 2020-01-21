import { createContext } from 'react';
import { defaultLearnLinks, defaultProductLinks, defaultScreenSizeContext } from './defaults';
import {
    IInstallKeeperModalContext,
    IBlurContext,
    IGlobalLinksContext,
    ILoginTypeModalContext,
    IScreenSizeContext,
} from './types';

export const ConfigContext = createContext({ config: null });

export const UserCongratsModalContext = createContext({ onClose: null, onOpen: null });

export const InstallKeeperModalContext = createContext<IInstallKeeperModalContext>({
    onLogin: () => {},
    onLogout: () => {},
    onWebKeeperLogin: () => {},
    openModal: () => {},
    isVisible: false,
});

export const BlurContext = createContext<IBlurContext>({
    blur: null,
    unblur: null,
    checkIsBlurred: null,
});

export const GlobalLinksContext = createContext<IGlobalLinksContext>({
    links: defaultLearnLinks,
    product: defaultProductLinks,
});

export const LoginTypeModalContext = createContext<ILoginTypeModalContext>({
    onClose: null,
    onOpen: null,
});

// ResizeObserver dependent
export const ScreenSizeContext = createContext<IScreenSizeContext>(defaultScreenSizeContext);