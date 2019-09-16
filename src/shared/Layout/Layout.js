import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import layoutHoc, {STATUS_ACCESS_DENIED, STATUS_LOADING, STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';
import screenWatcherHoc from 'yii-steroids/ui/screenWatcherHoc';
import {getCurrentItemParam} from 'yii-steroids/reducers/navigation';
import axios from 'axios';

import {html, dal, ws, store, clientStorage} from 'components';
import {STORAGE_AUTH_KEY} from 'shared/RightSidebar/RightSidebar';
import {setCurrency} from 'actions/layout';
import Header from 'shared/Header';
import LeftSidebar from 'shared/LeftSidebar';
import RightSidebar from 'shared/RightSidebar';

import './Layout.scss';
import {setUser} from 'yii-steroids/actions/auth';
import CurrencyEnum from 'enums/CurrencyEnum';
import {apiWsHandler} from 'actions/api';
import {goToPage} from 'yii-steroids/actions/navigation';
import {ROUTE_ROOT} from 'routes';

const bem = html.bem('Layout');

@layoutHoc(
    async () => {
        // TODO ws.wsUrl = process.env.APP_WS_URL || 'ws://localhost:5000';
        ws.wsUrl = location.port ? 'ws://localhost:5000' : location.origin.replace('http', 'ws');
        ws.onMessage = event => store.dispatch(apiWsHandler(event));
        ws.open();

        let user = null;
        if (JSON.parse(clientStorage.get(STORAGE_AUTH_KEY))) {
            user = await dal.auth();
        }

        const response = await axios.get('/api/v1/init');
        return {
            ...response.data,
            user,
        };
    }
)
@connect(
    state => ({
        isShowLeftSidebar: getCurrentItemParam(state, 'isShowLeftSidebar'),
        matchParams: state.navigation.params,
    })
)

@screenWatcherHoc()
export default class Layout extends React.PureComponent {

    static propTypes = {
        status: PropTypes.string,
    };

    componentWillReceiveProps(nextProps) {
        if (_get(this.props, 'matchParams.currency') !== _get(nextProps, 'matchParams.currency')) {
            this.props.dispatch(setCurrency(nextProps.matchParams.currency));
        }
        if (nextProps.status === STATUS_ACCESS_DENIED) {
            this.props.dispatch(goToPage(ROUTE_ROOT));
        }
    }

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
