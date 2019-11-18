export interface State {
    isOpened: boolean;
    currentViewIndex: number;
}
export type Props = {
    onClose?: () => void;
} & Partial<State>;
