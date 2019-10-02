import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'yii-steroids/ui/form/Button';

import {html} from 'components';

import './CheckItem.scss';


const bem = html.bem('CheckItem');

@connect(
    state => ({

    })
)
export default class CheckItem extends React.PureComponent {

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string,
            time: PropTypes.string,
            profit: PropTypes.number,
        })

    };

    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className={bem.block()}>
                <div className={bem.element('inner')}>
                    <div className={bem.element('header')}>
                        <span>
                            {__('Check № {number}', {
                                number: this.props.item.id,
                            })}
                        </span>
                        <span>
                            {this.props.item.time}
                        </span>
                    </div>
                    <div className={bem.element('profit')}>
                        {__('Profit: {profit}', {
                            profit: 1000,
                        })}
                    </div>
                    <div className={bem.element('action')}>
                        <Button
                            color={'success'}
                            block
                            label={__('Withdraw')}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
