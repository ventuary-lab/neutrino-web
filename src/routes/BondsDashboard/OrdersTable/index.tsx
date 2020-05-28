import React from 'react';
import moment from 'moment';
import { Translation } from 'react-i18next';
import { dal, html } from 'components';
import { orderBy as _orderBy, round as _round, orderBy } from 'lodash';

import './OrdersTable.scss';
import PairsEnum from 'enums/PairsEnum';
import OrderTypeEnum from 'enums/OrderTypeEnum';
import CurrencyEnum from 'enums/CurrencyEnum';
import { computeROI } from 'reducers/contract/helpers';
import { SortTableEnum } from './enums';
import { Props, State, IOrdersTable } from './types';

const bem = html.bem('OrdersTable');

export default class OrdersTable extends React.Component<Props, State> implements IOrdersTable {
    fieldTable;

    static defaultProps = {
        isHistory: false,
    };

    constructor(props) {
        super(props);

        this.getTableHead = this.getTableHead.bind(this);
        this.getTableBody = this.getTableBody.bind(this);
        this.getFieldTable = this.getFieldTable.bind(this);

        // this.fieldTable = ;

        this.state = {
            sort: ['timestamp', SortTableEnum.DESC],
            search: '',
        };
    }

    getFieldTable(t) {
        return {
            name: {
                label: t('common.name.label'),
                get: (item) =>
                    item.type === OrderTypeEnum.LIQUIDATE
                        ? CurrencyEnum.getLabel(item.currency)
                        : PairsEnum.getLabel(item.pairName),
            },
            type: {
                label: t('common.type.label'),
                get: (item) => OrderTypeEnum.getLabel(item.type) || '--',
            },
            time: {
                label: t('common.time.label'),
                get: (item) => moment(item.timestamp).format('DD/MM/YYYY hh:mm:ss') || '--',
            },
            usdnb: {
                label: t('enums.currency.usdnb.label'),
                get: (item) => (OrderTypeEnum.LIQUIDATE === item.type ? item.total : item.amount),
            },
            price: {
                label: 'BR',
                get: (item) =>
                    (OrderTypeEnum.LIQUIDATE === item.type ? item.price : 100 - item.debugRoi) ||
                    '--',
            },
            // roi: {
            //     label: 'ROI',
            //     get: (order, controlPrice) => (order.debugRoi ? `${order.debugRoi}%` : '--'),
            // },
            waves: {
                label: t('enums.currency.waves.label'),
                get: (item, controlPrice) =>
                    OrderTypeEnum.LIQUIDATE === item.type ? '--' : item.total,
            },
            status: {
                label: t('common.status.label'),
                get: (item) => item.status || '--',
            },
            cancelall: {
                label: t('common.cancel_all.label'),
            },
        }
    }

    getTableHead(items, t) {
        const { isHistory } = this.props;
        // const { fieldTable } = this;
        const fieldTable = this.getFieldTable(t)

        return (
            <thead>
                <tr>
                    <th className={bem.element('search-column')}>
                        <div className={bem.element('header')}>{fieldTable.name.label}</div>
                    </th>
                    <th>
                        <div
                            className={bem.element('header')}
                            onClick={() => this.toggleSort('type')}
                        >
                            {fieldTable.type.label}
                            {this.renderSortButtons('type')}
                        </div>
                    </th>
                    <th>
                        <div
                            className={bem.element('header')}
                            onClick={() => this.toggleSort('timestamp')}
                        >
                            {fieldTable.time.label}
                            {this.renderSortButtons('timestamp')}
                        </div>
                    </th>
                    <th>{fieldTable.usdnb.label}</th>
                    <th>{fieldTable.price.label}</th>
                    <th>{fieldTable.status.label}</th>
                    {/* <th>{fieldTable.roi.label}</th> */}
                    <th>{fieldTable.waves.label}</th>
                    {!isHistory && (
                        <th className={bem.element('cancel-column')}>
                            <div
                                className={bem.element('cancel')}
                                onClick={() => {
                                    items.forEach((item) =>
                                        dal.cancelOrder(this.props.pairName, item.type, item.id)
                                    );
                                }}
                            >
                                <span
                                    className={bem(bem.element('cancel-icon'), 'Icon Icon__cancel')}
                                />
                                {fieldTable.cancelall.label}
                            </div>
                        </th>
                    )}
                </tr>
            </thead>
        );
    }

    getTableBody(rawItems, t) {
        const { controlPrice } = this.props;
        const { sort } = this.state;
        const fieldTable = this.getFieldTable(t)

        let items = rawItems.filter((item) =>
            item.type !== 'liquidate'
                ? moment(new Date(item.timestamp)).isAfter(moment('01/12/2020'))
                : true
        ); // 12 of Jan

        return (
            <tbody>
                {(items.length > 0 && (
                    <>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{fieldTable.name.get(item)}</td>
                                <td className={bem.element('type-column', item.type)}>
                                    {fieldTable.type.get(item)}
                                </td>
                                <td>{fieldTable.time.get(item)}</td>
                                <td>{fieldTable.usdnb.get(item)}</td>
                                <td>{fieldTable.price.get(item)}</td>
                                <td>{fieldTable.status.get(item)}</td>
                                {/* <td>{fieldTable.roi.get(item, controlPrice)}</td> */}
                                <td>{fieldTable.waves.get(item, controlPrice)}</td>
                                {!this.props.isHistory && (
                                    <td className={bem.element('cancel-column')}>
                                        <div
                                            className={bem.element('cancel')}
                                            onClick={() =>
                                                dal.cancelOrder(
                                                    this.props.pairName,
                                                    item.type,
                                                    item.id
                                                )
                                            }
                                        >
                                            <span
                                                className={bem(
                                                    bem.element('cancel-icon'),
                                                    'Icon Icon__cancel'
                                                )}
                                            />
                                            Cancel
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </>
                )) || (
                    <tr>
                        <td colSpan={this.props.isHistory ? 6 : 7}>
                            <div className={bem.element('empty')}>
                                {this.props.isHistory ? t('common.no_history.label') : t('common.no_orders.label')}
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        );
    }

    toggleSort(column) {
        const { sort } = this.state;
        const [sortColumn, sortOrder] = sort;

        this.setState({
            sort: [
                column,
                sortOrder === SortTableEnum.ASC ? SortTableEnum.DESC : SortTableEnum.ASC,
            ],
        });
    }

    renderSortButtons(column) {
        const { sort } = this.state;
        const [sortColumn, sortOrder] = sort;

        return (
            <div className={bem.element('sort-buttons')}>
                <a
                    className={bem.element('sort-button', {
                        asc: true,
                        active: sortColumn === column && sortOrder === SortTableEnum.ASC,
                    })}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({ sort: [column, SortTableEnum.ASC] });
                    }}
                />
                <a
                    className={bem.element('sort-button', {
                        desc: true,
                        active: sortColumn === column && sortOrder === SortTableEnum.DESC,
                    })}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({ sort: [column, SortTableEnum.DESC] });
                    }}
                />
            </div>
        );
    }

    render() {
        let { items } = this.props;
        const { sort } = this.state;
        const [sortColumn, sortOrder] = sort;

        if (!items) {
            return null;
        }

        items = items.map((item) => ({
            ...item,
            timestamp: moment(new Date(item.timestamp)).valueOf(),
        }));
        items = _orderBy(items, sortColumn, sortOrder);

        return (
            <Translation>
                {(t) => (
                    <div className={bem.block()}>
                        <table>
                            {this.getTableHead(items, t)}
                            {this.getTableBody(items, t)}
                        </table>
                    </div>
                )}
            </Translation>
        );
    }
}
