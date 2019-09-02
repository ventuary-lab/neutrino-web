import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser} from 'yii-steroids/reducers/auth';

import {html, dal} from 'components';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

import './BalanceTable.scss';

const bem = html.bem('BalanceTable');

@connect(
    state => ({
        user: getUser(state)
    })
)
@dal.hoc(
    () => dal.getWavesToUsdPrice()
        .then(wavesToUsdPrice => ({wavesToUsdPrice}))
)
export default class BalanceTable extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object,
        wavesToUsdPrice: PropTypes.number,
    };

    render() {

        if (!this.props.user && !this.props.wavesToUsdPrice) {
            return null;
        }

        console.log('---1', this.props);

        const balance = this.props.user.balance;

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
                    {Object.entries(balance).map(item => {

                        const id = item[0];
                        const value = item[1].toFixed(4);

                        return (
                            <tr
                                key={item.id}
                            >
                                <td>
                                    <div className={bem.element('labels-column')}>
                                    <span
                                        className={bem(
                                            bem.element('icon'),
                                            `Icon ${BalanceCurrencyEnum.getIconClass(id)}`
                                        )}
                                    />
                                        <div className={bem.element('labels')}>
                                        <span className={bem.element('label')}>
                                            {BalanceCurrencyEnum.getLabel(id)}
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
                                        {value}
                                    </span>
                                        <span className={bem.element('label', 'tiny')}>
                                            $ {id === BalanceCurrencyEnum.WAVES
                                                ? value / this.props.wavesToUsdPrice
                                                : value
                                            }
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
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
