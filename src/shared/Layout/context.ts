import { createContext } from 'react';
import { Link } from 'ui/global/types';

export const ConfigContext = createContext({ config: null });

export const InstallKeeperModalContext = createContext({ triggerVisibility: () => {} });

export const BlurContext = createContext({ blur: null, unblur: null, checkIsBlurred: null });

export const LearnLinksContext = createContext<{ links: Link[] }>({
    links: [],
});
