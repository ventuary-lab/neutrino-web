

export interface Link extends React.HTMLProps<HTMLAnchorElement> {
    label: string;
    onClick?: () => void;
    icon?: string;
    url?: string;
}

export type SocLink = { icon: string; route: string };

export interface ILongPullingComponent {
    _updateInterval: NodeJS.Timeout | null;
    _updateTimeout: number;
    _updateListener: () => Promise<void>;
    startListening: () => void;
    stopListening: () => void;
}