import React from 'react';
import Nav from 'yii-steroids/ui/nav/Nav';

import {html} from 'components';

import './BoundsDashboard.scss';

const bem = html.bem('BoundsDashboard');

export default class BoundsDashboard extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <div className={bem.element('graph')}>
                        Glass
                    </div>
                    <div className={bem.element('orders')}>
                        <Nav
                            layout={'tabs'}
                            items={[
                                {
                                    id: 'buy',
                                    label: __('Buy'),
                                    content: () => this.renderOrdersGrid('Buy'),
                                },
                                {
                                    id: 'liquidate',
                                    label: __('Liquidate'),
                                    content: () => this.renderOrdersGrid('liquidate'),
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className={bem.element('column', 'right')}>
                    <div className={bem.element('graph')}>
                        Graph
                    </div>
                    <div className={bem.element('orders')}>
                        <Nav
                            layout={'tabs'}
                            items={[
                                {
                                    id: 'my-open-orders',
                                    label: __('My open Orders'),
                                    content: () => this.renderOrdersGrid('Orders'),
                                },
                                {
                                    id: 'my-orders-history',
                                    label: __('My Orders History'),
                                    content: () => this.renderOrdersGrid('History'),
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }

    renderOrdersGrid(test) {
        return (
            <div>
                {test}
            </div>
        );
    }
}
