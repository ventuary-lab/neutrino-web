import React from 'react';
import PropTypes from 'prop-types';
import _orderBy from 'lodash-es/orderBy';
import _upperFirst from 'lodash-es/upperFirst';
import moment from 'moment';

import {dal, html} from 'components';

import './OrdersTable.scss';
import BalanceCurrencyEnum from '../../../enums/BalanceCurrencyEnum';
import OrderSchema from 'types/OrderSchema';
import PairsEnum from '../../../enums/PairsEnum';
import OrderTypeEnum from '../../../enums/OrderTypeEnum';

const bem = html.bem('OrdersTable');

export default class OrdersTable extends React.PureComponent {

    static propTypes = {
        items: PropTypes.arrayOf(OrderSchema),
        isHistory: PropTypes.bool,
    };

    static defaultProps = {
        isHistory: false,
    };

    constructor() {
        super(...arguments);

        this.state = {
            sort: ['amount', 'desc'],
            search: '',
        };
    }

    render() {

        if (!this.props.items) {
            return null;
        }

        const items = _orderBy(this.props.items, [this.state.sort[0]], [this.state.sort[1]]);
        return (
            <div className={bem.block()}>
                <table>
                    <thead>
                        <tr>
                            <td className={bem.element('id-column')}>
                                {__('ID')}
                            </td>
                            <th className={bem.element('search-column')}>
                                <div className={bem.element('header')}>
                                    {__('Name')}
                                </div>
                            </th>
                            <th>
                                <div
                                    className={bem.element('header')}
                                    onClick={() => this.toggleSort('type')}
                                >
                                    {__('Type')}
                                    {this.renderSortButtons('type')}
                                </div>
                            </th>
                            <th>
                                <div
                                    className={bem.element('header')}
                                    onClick={() => this.toggleSort('time')}
                                >
                                    {__('Time')}
                                    {this.renderSortButtons('time')}
                                </div>
                            </th>
                            <th>
                                <div
                                    className={bem.element('header')}
                                    onClick={() => this.toggleSort('amount')}
                                >
                                    {__('Amount')}
                                    {this.renderSortButtons('amount')}
                                </div>
                            </th>
                            <th>
                                % {__('discount')}
                            </th>
                            <th>
                                {__('Total')}
                            </th>
                            {!this.props.isHistory && (
                                <th className={bem.element('cancel-column')}>
                                    <div
                                        className={bem.element('cancel')}
                                    >
                                        <span className={bem(
                                            bem.element('cancel-icon'),
                                            'Icon Icon__cancel'
                                        )}/>
                                        {__('Cancel ALL')}
                                    </div>
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 && (
                            <>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td className={bem.element('id-column')}>
                                            {item.id}
                                        </td>
                                        <td>
                                            {PairsEnum.getLabel(item.pairName) || '--'}
                                        </td>
                                        <td className={bem.element('type-column', item.type)}>
                                            {(OrderTypeEnum.getLabel(item.type)) || '--'}
                                        </td>
                                        <td>
                                            {moment(item.timestamp).format('DD MMM YYYY hh:mm:ss') || '--'}
                                        </td>
                                        <td>
                                            {item.amount || '--'}
                                        </td>
                                        <td>
                                            {item.discountPercent + '%' || '--'}
                                        </td>
                                        <td>
                                            {item.restAmount || '--'}
                                        </td>
                                        {!this.props.isHistory && (
                                            <td className={bem.element('cancel-column')}>
                                                <div
                                                    className={bem.element('cancel')}
                                                    onClick={() => dal.cancelOrder(item.id)}
                                                >
                                                    <span className={bem(
                                                        bem.element('cancel-icon'),
                                                        'Icon Icon__cancel'
                                                    )}/>
                                                    {__('Cancel')}
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </>
                        ) || (
                            <tr>
                                <td colSpan={this.props.isHistory ? 6 : 7}>
                                    <div className={bem.element('empty')}>
                                        {this.props.isHistory ? __('No history') : __('No orders')}
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

    toggleSort(column) {
        this.setState({sort: [column, this.state.sort[1] === 'asc' ? 'desc' : 'asc']});
    }

    renderSortButtons(column) {
        return (
            <div className={bem.element('sort-buttons')}>
                <a
                    className={bem.element('sort-button', {
                        asc: true,
                        active: this.state.sort[0] === column && this.state.sort[1] === 'asc',
                    })}
                    href='javascript:void(0)'
                    onClick={() => this.setState({sort: [column, 'asc']})}
                />
                <a
                    className={bem.element('sort-button', {
                        desc: true,
                        active: this.state.sort[0] === column && this.state.sort[1] === 'desc',
                    })}
                    href='javascript:void(0)'
                    onClick={() => this.setState({sort: [column, 'desc']})}
                />
            </div>
        );
    }
}
