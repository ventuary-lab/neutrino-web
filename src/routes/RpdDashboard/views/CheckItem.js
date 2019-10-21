import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _round from 'lodash-es/round';
import _get from 'lodash-es/get';
import Button from 'yii-steroids/ui/form/Button';

import {html, dal} from 'components';
import {getPairName} from 'reducers/currency';

import './CheckItem.scss';


const bem = html.bem('CheckItem');

@connect(
    state => ({
        pairName: getPairName(state),
    })
)
export default class CheckItem extends React.PureComponent {

    static propTypes = {
        item: PropTypes.shape({
            index: PropTypes.number,
            // time: PropTypes.string,
            profit: PropTypes.number,
            historyIndex: PropTypes.number,
            isClaimed: PropTypes.bool,
        }),

    };

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('inner')}>
                    <div className={bem.element('header')}>
                        <span>
                            {__('Check № {number}', {
                                number: this.props.item.index,
                            })}
                        </span>
                        <span>
                            {/*{this.props.item.time}*/}
                        </span>
                    </div>
                    <div className={bem.element('profit')}>
                        {__('Profit: {profit}', {
                            profit: _round(this.props.item.profit, 2),
                        })}
                    </div>
                    <div className={bem.element('action')}>
                        {!this.props.item.isClaimed && (
                            <Button
                                color={'success'}
                                block
                                label={__('Withdraw')}
                                onClick={() => {
                                    return dal.checkWithdraw(
                                        this.props.pairName,
                                        _get(this.props, 'item.index'),
                                        _get(this.props, 'item.historyIndex')
                                    )
                                        .then(() => console.log('success profit withdraw')); // eslint-disable-line no-console
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
