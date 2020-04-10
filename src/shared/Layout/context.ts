import { createContext } from 'react';
import { t as translateGetter } from 'locales/config';
import { defaultScreenSizeContext } from './defaults';
import { getDefaultLearnLinks, getDefaultProductLinks } from './defaults';

import { Link } from 'ui/global/types';
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
    links: getDefaultLearnLinks(translateGetter),
    product: getDefaultProductLinks(translateGetter),
});

export const LoginTypeModalContext = createContext<ILoginTypeModalContext>({
    onClose: null,
    onOpen: null,
});

// ResizeObserver dependent
export const ScreenSizeContext = createContext<IScreenSizeContext>(defaultScreenSizeContext);
