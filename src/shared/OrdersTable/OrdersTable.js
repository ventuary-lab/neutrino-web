import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _orderBy from 'lodash-es/orderBy';
import _upperFirst from 'lodash-es/upperFirst';

import {html} from 'components';
import BoundsDirectionType from 'enums/BoundsDirectionType';

import './OrdersTable.scss';

const bem = html.bem('OrdersTable');

@connect(
    () => ({
        items: [
            {
                currency: 'USD-NB',
                type: BoundsDirectionType.BUY,
                time: '12 Jan 2019 12:38:44',
                amount: 21,
                discount: 19.85,
                wavesAmount: 12.9473,
            },
            {
                currency: 'USD-NB',
                type: BoundsDirectionType.LIQUIDATE,
                time: '12 Jan 2019 12:39:01',
                amount: 150,
                discount: null,
                wavesAmount: 115.3846,
            },
        ]
    })
)
export default class OrdersTable extends React.PureComponent {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            currency: PropTypes.string,
            type: PropTypes.oneOf(BoundsDirectionType.getKeys()),
            time: PropTypes.string,
            amount: PropTypes.number,
            discount: PropTypes.number,
            wavesAmount: PropTypes.number,
        })),
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

        let items = this.props.items.filter(item => {
            const search = (this.state.search || '').toLowerCase();
            return item.currency.toLowerCase().indexOf(search) !== -1;
        });

        items = _orderBy(items, [this.state.sort[0]], [this.state.sort[1]]);

        return (
            <div className={bem.block()}>
                <table>
                    <thead>
                        <tr>
                            <th className={bem.element('search-column')}>
                                <div className={bem.element('search-container')}>
                                    <span className={bem(bem.element('search-icon'), 'Icon Icon__search')}/>
                                    <input
                                        placeholder={__('Search')}
                                        className={bem.element('search')}
                                        value={this.state.search}
                                        onChange={e => this.setState({search: e.target.value})}
                                    />
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
                                {__('WAVES')}
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
                                    <td>
                                        {item.currency || '--'}
                                    </td>
                                    <td className={bem.element('type-column', item.type)}>
                                        {_upperFirst(item.type) || '--'}
                                    </td>
                                    <td>
                                        {item.time || '--'}
                                    </td>
                                    <td>
                                        {item.amount || '--'}
                                    </td>
                                    <td>
                                        {item.discount || '--'}
                                    </td>
                                    <td>
                                        {item.wavesAmount || '--'}
                                    </td>
                                    {!this.props.isHistory && (
                                        <td className={bem.element('cancel-column')}>
                                            <div
                                                className={bem.element('cancel')}
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
