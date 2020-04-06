import React from 'react';

import { html } from 'components';

import './style.scss';
import 'style/index.scss';
import 'shared/Layout/Layout.scss';

import { Props, State, TableHeader, TableRecord, TableRecordStyle } from './types';
import { generateRandomRecords } from './helpers';

const bem = html.bem('OrderbookReworked');

const props: Props = {
    tableHeaders: [
        {
            key: 'nsbt',
            label: 'NSBT',
        },
        {
            key: 'br',
            label: 'BR',
        },
        {
            key: 'waves',
            label: 'WAVES',
        },
    ],
    tableRecords: generateRandomRecords(10),
};
const greenHeaders = [
    { label: '1000', style: TableRecordStyle.green },
    { label: '-', style: TableRecordStyle.green },
    { label: '5433', style: TableRecordStyle.green },
] as TableHeader[];

class Orderbook extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.mapTableHeaders = this.mapTableHeaders.bind(this);
        this.mapTableBodyColumns = this.mapTableBodyColumns.bind(this);
    }

    mapTableHeaders(headers: TableHeader[]) {
        return (
            <tr>
                {headers.map(header => (
                    <td className={bem.element(`styled-${header.style || 0}`)}>{header.label}</td>
                ))}
            </tr>
        );
    }
    mapTableBodyColumns(keys: TableHeader[], values: TableRecord[]) {
        return values.map(row => (
            <tr>
                {keys.map(column => (
                    <td>{row[column.key]}</td>
                ))}
            </tr>
        ));
    }

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('heading')}>
                    <span>Auction</span>
                </div>
                <table className={bem.element('table', 'scrollable')}>
                    <thead>{this.mapTableHeaders(props.tableHeaders)}</thead>
                    <thead>{this.mapTableHeaders(greenHeaders)}</thead>

                    <tbody>
                        {this.mapTableBodyColumns(props.tableHeaders, props.tableRecords)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Orderbook;
