import { createContext } from 'react';

export const ConfigContext = createContext({ config: null });

export const InstallKeeperModalContext = createContext({ triggerVisibility: () => {} });