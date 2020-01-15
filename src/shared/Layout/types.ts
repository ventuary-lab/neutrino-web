import { Link } from 'ui/global/types';

export type ErrorHandlerFn = <T extends () => void>(onSuccess?: T, onError?: T) => void;

export interface IInstallKeeperModalContext {
    onLogin: ErrorHandlerFn;
    onLogout: ErrorHandlerFn;
    onWebKeeperLogin: () => void;
    openModal: () => void;
    isVisible: boolean;
}

export interface IBlurContext { 
    blur: boolean | null;
    unblur: boolean | null;
    checkIsBlurred: () => boolean;
}

export interface IGlobalLinksContext { links: Link[]; product: Link[] }

export interface ILoginTypeModalContext <F = () => void>{
    onClose: F | null;
    onOpen: F | null;
}