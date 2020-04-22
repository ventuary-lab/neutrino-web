
export enum TableRecordStyle {
    default = 0,
    green,
}
export type TableHeader = {
    label: string;
    key?: string;
    style?: TableRecordStyle;
};
export type TableRecord = Record<string, string | number | boolean | null> &
    Pick<TableHeader, 'style'>;

export interface Props {
    title: string;
    greenHeaders: TableHeader[];
    tableHeaders: TableHeader[];
    tableRecords: TableRecord[];
}
export interface State {}
