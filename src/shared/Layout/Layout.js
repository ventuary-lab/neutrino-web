import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import layoutHoc, {STATUS_ACCESS_DENIED, STATUS_LOADING, STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';
import screenWatcherHoc from 'yii-steroids/ui/screenWatcherHoc';
import {getCurrentItemParam} from 'yii-steroids/reducers/navigation';

import Header from 'shared/Header';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import {html} from 'components';

import './Layout.scss';

const bem = html.bem('Layout');

// @layoutHoc()
@connect(
    state => ({
        isShowLeftSidebar: getCurrentItemParam(state, 'isShowLeftSidebar'),
    })
)

@screenWatcherHoc()
export default class Layout extends React.PureComponent {

    static propTypes = {
        status: PropTypes.string,
    };

    render() {
        if (this.props.status === STATUS_RENDER_ERROR) {
            return null;
        }

        return (
            <div className={bem.block({
                'is-show-left-sidebar': this.props.isShowLeftSidebar
            })}>
                <div className={bem.element('inner')}>
                    {this.props.isShowLeftSidebar && (
                        <aside className={bem.element('left')}>
                            <LeftSidebar/>
                        </aside>
                    )}
                    <div className={bem.element('center')}>
                        <header className={bem.element('header')}>
                            <Header/>
                        </header>
                        <main className={bem.element('content')}>
                            {this.props.status !== STATUS_LOADING && this.props.children}
                        </main>
                    </div>
                    <aside className={bem.element('right')}>
                        <RightSidebar/>
                    </aside>
                </div>
                <ModalWrapper/>
            </div>
        );
    }
}
