import { createContext } from 'react';

export const ConfigContext = createContext({ config: null });

export const InstallKeeperModalContext = createContext({ triggerVisibility: () => {} });

export const BlurContext = createContext({ blur: null, unblur: null, checkIsBlurred: null });