import React from 'react';
import PropTypes from 'prop-types';
import _orderBy from 'lodash-es/orderBy';
import _isInteger from 'lodash-es/isInteger';
import moment from 'moment';

import { dal, html } from 'components';

import './OrdersTable.scss';
import OrderSchema from 'types/OrderSchema';
import PairsEnum from '../../../enums/PairsEnum';
import OrderTypeEnum from '../../../enums/OrderTypeEnum';
import CurrencyEnum from 'enums/CurrencyEnum';
import OrderStatusEnum from 'enums/OrderStatusEnum';

const bem = html.bem('OrdersTable');

export default class OrdersTable extends React.PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(OrderSchema),
        pairName: PropTypes.string,
        isHistory: PropTypes.bool,
    };

    static defaultProps = {
        isHistory: false,
    };

    constructor() {
        super(...arguments);

        this.getTableHead = this.getTableHead.bind(this);
        this.getTableBody = this.getTableBody.bind(this);

        
        this.fieldTable = {
            name: {
                label: 'Name'
            },
            type: {
                label: 'Type'
            },
            time: {
                label: 'Time'
            },
            usdnb: {
                label: 'USD-NB'
            },
            price: {
                label: 'Price'
            },
            roi: {
                label: 'ROI'
            },
            waves: {
                label: 'WAVES'
            },
            status: {
                label: 'Status'
            },
            cancelall: {
                label: 'Cancel All'
            }
        };

        this.state = {
            sort: ['amount', 'desc'],
            search: '',
        };
    }

    getTableHead(items) {
        const { isHistory } = this.props;
        const { fieldTable } = this;

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
                            onClick={() => this.toggleSort('time')}
                        >
                            {fieldTable.time.label}
                            {this.renderSortButtons('time')}
                        </div>
                    </th>
                    <th>{fieldTable.usdnb.label}</th>
                    <th>{fieldTable.price.label}</th>
                    <th>{fieldTable.status.label}</th>
                    {!isHistory && (
                        <th className={bem.element('cancel-column')}>
                            <div
                                className={bem.element('cancel')}
                                onClick={() => {
                                    items.forEach(item =>
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

    getTableBody(items) {

        return (
            <tbody>
                {(items.length > 0 && (
                    <>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.type === OrderTypeEnum.LIQUIDATE ? CurrencyEnum.getLabel(item.currency) : PairsEnum.getLabel(item.pairName)}
                                </td>
                                <td className={bem.element('type-column', item.type)}>
                                    {OrderTypeEnum.getLabel(item.type) || '--'}
                                </td>
                                <td>
                                    {moment(item.timestamp).format('DD/MM/YYYY hh:mm:ss') || '--'}
                                </td>
                                <td>{item.restAmount || '--'}</td>
                                <td>{item.price ? item.price / 100 : '--'}</td>
                                <td>
                                    {_isInteger(item.restTotal)
                                        ? item.restTotal
                                        : _isInteger(item.total)
                                        ? item.total
                                        : '--'}
                                </td>
                                <td>{OrderStatusEnum.getLabel(item.status)}</td>
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
                                            {__('Cancel')}
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
                                {this.props.isHistory ? __('No history') : __('No orders')}
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        );
    }

    render() {
        if (!this.props.items) {
            return null;
        }

        const { sort: sortOrder } = this.state;

        const items = _orderBy(this.props.items, [sortOrder[0]], [sortOrder[1]]);

        return (
            <div className={bem.block()}>
                <table>
                    {this.getTableHead(items)}
                    {this.getTableBody(items)}
                </table>
            </div>
        );
    }

    toggleSort(column) {
        this.setState({ sort: [column, this.state.sort[1] === 'asc' ? 'desc' : 'asc'] });
    }

    renderSortButtons(column) {
        return (
            <div className={bem.element('sort-buttons')}>
                <a
                    className={bem.element('sort-button', {
                        asc: true,
                        active: this.state.sort[0] === column && this.state.sort[1] === 'asc',
                    })}
                    onClick={e => {
                        e.preventDefault();
                        this.setState({ sort: [column, 'asc'] });
                    }}
                />
                <a
                    className={bem.element('sort-button', {
                        desc: true,
                        active: this.state.sort[0] === column && this.state.sort[1] === 'desc',
                    })}
                    onClick={e => {
                        e.preventDefault();
                        this.setState({ sort: [column, 'desc'] });
                    }}
                />
            </div>
        );
    }
}
