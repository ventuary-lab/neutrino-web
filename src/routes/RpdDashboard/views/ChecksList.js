import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import List from 'yii-steroids/ui/list/List';

import {html} from 'components';
import CheckItem from './CheckItem';


import './ChecksList.scss';


const bem = html.bem('ChecksList');
const LIST_ID = 'ChecksList';

@connect(
    state => ({

    })
)
export default class ChecksList extends React.PureComponent {

    static propTypes = {


    };

    constructor() {
        super(...arguments);
    }

    render() {
        const items = [
            {
                id: '001',
                time: '30.09.19 | 9:23 AM',
                profit: 1000,
            },
            {
                id: '001',
                time: '30.09.19 | 9:23 AM',
                profit: 1000,
            }
        ];


        return (
            <List
                listId={LIST_ID}
                className={bem.block()}
                items={items}
                itemView={CheckItem}
                emptyView={() => (
                    <div className={bem.element('empty')}>
                        {__('No checks')}
                    </div>
                )}
            />
        );
    }
}
