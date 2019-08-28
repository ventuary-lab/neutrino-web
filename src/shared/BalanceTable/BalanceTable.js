import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser} from 'yii-steroids/reducers/auth';

import {html, http} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

import './BalanceTable.scss';

const bem = html.bem('BalanceTable');

@connect(
    state => ({
        user: getUser(state)
    })
)
@http.hoc(
    props => props.user && (
        {
            data: [
                {
                    id: 'waves',
                    value: 60.2300,
                    usdRate: 1.3,
                },
                {
                    id: 'usd-n',
                    value: 4800,
                    usdRate: 1,
                },
                {
                    id: 'usd-nb',
                    value: 5250,
                    usdRate: 1,
                }
            ]
        }
    )
)
export default class BalanceTable extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object,
        data: PropTypes.arrayOf(PropTypes.object),
    };

    render() {

        if (!this.props.data) {
            return null;
        }

        return (
            <table className={bem.block()}>
                <thead>
                    <tr>
                        <th>
                            {__('ASSET')}
                        </th>
                        <th>
                            {__('BALANCE')}
                        </th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(item => (
                        <tr
                            key={item.id}
                        >
                            <td>
                                <div className={bem.element('labels-column')}>
                                    <span
                                        className={bem(
                                            bem.element('icon'),
                                            `Icon ${BalanceCurrencyEnum.getIconClass(item.id)}`
                                        )}
                                    />
                                    <div className={bem.element('labels')}>
                                    <span className={bem.element('label')}>
                                        {BalanceCurrencyEnum.getLabel(item.id)}
                                    </span>
                                        <span className={bem.element('label', 'tiny')}>
                                        {__('USD')}
                                    </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={bem.element('values-column')}>
                                    <span className={bem.element('label')}>
                                        {item.value}
                                    </span>
                                    <span className={bem.element('label', 'tiny')}>
                                        ${Math.floor(item.value * item.usdRate)}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className={bem.element('controls-column')}>
                                    {['Icon__double-arrow-up', 'Icon__double-arrow-down', 'Icon__trade']
                                        .map((item, index) => (
                                            <a
                                                key={index}
                                                href='https://dex.wavesplatform.com/'
                                                target={'_blank'}
                                                className={bem.element('control')}
                                            >
                                                <span className={item}/>
                                            </a>
                                        ))
                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
