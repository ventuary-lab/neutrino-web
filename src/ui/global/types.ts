

export interface Link extends React.HTMLProps<HTMLAnchorElement> {
    label: string;
    onClick?: () => void;
    icon?: string;
    url?: string;
}

export type SocLink = { icon: string; route: string };