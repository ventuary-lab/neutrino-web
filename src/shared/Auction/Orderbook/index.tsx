import React from 'react';

import { html } from 'components';

import './style.scss';
import 'style/index.scss';
import 'shared/Layout/Layout.scss';

import { Props, State, TableHeader, TableRecord, TableRecordStyle } from './types';
import { generateRandomRecords } from './helpers';

const bem = html.bem('OrderbookReworked');

class Orderbook extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.mapTableHeaders = this.mapTableHeaders.bind(this);
        this.mapTableBodyColumns = this.mapTableBodyColumns.bind(this);
    }

    mapTableHeaders(headers: TableHeader[]) {
        return (
            <tr>
                {headers.map(header => (
                    <td className={bem.element(`styled-${header.style || TableRecordStyle.green}`)}>{header.label}</td>
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
        const { title, tableHeaders, tableRecords, greenHeaders } = this.props;

        return (
            <div className={bem.block()}>
                <div className={bem.element('heading')}>
                    <span>{title}</span>
                </div>
                <table className={bem.element('table', 'scrollable')}>
                    <thead>{this.mapTableHeaders(tableHeaders)}</thead>
                    <thead>{this.mapTableHeaders(greenHeaders)}</thead>

                    <tbody>
                        {this.mapTableBodyColumns(tableHeaders, tableRecords)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Orderbook;
