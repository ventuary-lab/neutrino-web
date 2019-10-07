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
        items: PropTypes.arrayOf(PropTypes.object),
        isHistory: PropTypes.bool,
    };

    render() {
        return (
            <List
                listId={LIST_ID}
                className={bem.block()}
                items={this.props.items}
                itemProps={{
                    isHistory: this.props.isHistory,
                }}
                itemView={CheckItem}
                emptyView={() => (
                    <div className={bem.element('empty')}>
                        {this.props.isHistory ? __('No history') : __('No checks')}
                    </div>
                )}
            />
        );
    }
}
