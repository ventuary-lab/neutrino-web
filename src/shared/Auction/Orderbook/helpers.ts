import { TableRecord } from './types';

export function generateRandomRecords(count: number): TableRecord[] {
    return Array(count)
        .fill({})
        .map(record => ({
            nsbt: `${Math.random()}`.slice(2, 4),
            br: `${Math.random()}`.slice(0, 4),
            waves: `${Math.random()}`.slice(2, 4),
        }));
}
