import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import {setUser} from 'yii-steroids/actions/auth';
import layoutHoc, {STATUS_ACCESS_DENIED, STATUS_LOADING, STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';
import screenWatcherHoc from 'yii-steroids/ui/screenWatcherHoc';
import {getCurrentItemParam} from 'yii-steroids/reducers/navigation';

import {html, http, dal, ws, store} from 'components';
import {currencyFetchPrices, currencySetCurrent, currencySetPrices, currencyWsHandler} from 'actions/currency';
import Header from 'shared/Header';
import LeftSidebar from 'shared/LeftSidebar';
import RightSidebar from 'shared/RightSidebar';

import './Layout.scss';
import {apiWsHandler} from 'actions/api';
import {goToPage} from 'yii-steroids/actions/navigation';
import {ROUTE_ROOT} from 'routes';
import {getData} from 'yii-steroids/reducers/auth';
import {getPrices} from 'reducers/currency';

import WarningMobileModal from 'modals/WarningMobileModal';
import {openModal} from 'yii-steroids/actions/modal';

const bem = html.bem('Layout');

@layoutHoc(
    async () => {
        // Initialize websocket
        // TODO ws.wsUrl = process.env.APP_WS_URL || 'ws://localhost:5000';
        ws.wsUrl = location.port ? 'ws://localhost:5000' : location.origin.replace('http', 'ws');
        ws.onMessage = event => store.dispatch([
            apiWsHandler(event),
            currencyWsHandler(event),
        ]);
        ws.open();

        // Load init data
        return http.get('/api/v1/init');
    }
)
@connect(
    state => ({
        isShowLeftSidebar: getCurrentItemParam(state, 'isShowLeftSidebar'),
        matchParams: state.navigation.params,
        data: getData(state),
        // prices: getPrices(state),
    })
)
@screenWatcherHoc()
export default class Layout extends React.PureComponent {

    static propTypes = {
        status: PropTypes.string,
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            Promise.resolve(dal.isLogged() ? dal.login() : null)
                .then(user => {
                    this.props.dispatch([
                        // currencySetPrices(nextProps.data.prices),
                        setUser(user),
                    ]);
                });
        }

        if (_get(this.props, 'matchParams.currency') !== _get(nextProps, 'matchParams.currency')) {
            this.props.dispatch(currencySetCurrent(nextProps.matchParams.currency));
        }
        if (nextProps.data && nextProps.status === STATUS_ACCESS_DENIED) {
            //this.props.dispatch(goToPage(ROUTE_ROOT));
        }
    }

    render() {
        // if (this.props.status === STATUS_RENDER_ERROR || !this.props.prices) {
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
