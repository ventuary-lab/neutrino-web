import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import {setUser} from 'yii-steroids/actions/auth';
import layoutHoc, {STATUS_ACCESS_DENIED, STATUS_LOADING, STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';
import screenWatcherHoc from 'yii-steroids/ui/screenWatcherHoc';
import {getCurrentItem, getCurrentItemParam} from 'yii-steroids/reducers/navigation';
import {getData} from 'yii-steroids/reducers/auth';
import {currencySetCurrent, currencyWsHandler} from 'actions/currency';

import {html, http, dal, ws, store} from 'components';
import CollectionEnum from 'enums/CollectionEnum';
import Header from 'shared/Header';
import LeftSidebar from 'shared/LeftSidebar';
import RightSidebar from 'shared/RightSidebar';
import BlockedApp from 'shared/BlockedApp';
import {apiWsHandler} from 'actions/api';
import {ROUTE_ROOT} from 'routes';
import {getPairName, getPrices} from 'reducers/currency';

import './Layout.scss';

const bem = html.bem('Layout');

@layoutHoc(
    async () => {
        // Initialize websocket
        // TODO ws.wsUrl = process.env.APP_WS_URL || 'ws://localhost:5000';
        ws.wsUrl = location.port ? 'ws://localhost:5000' : location.origin.replace('http', 'ws');
        ws.onMessage = event => store.dispatch([
            apiWsHandler(event),
            // currencyWsHandler(event),
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
        currentItem: getCurrentItem(state),
        pairName: getPairName(state),
        // prices: getPrices(state),
    })
)
@dal.hoc(
    props => [
        {
            url: `/api/v1/neutrino-balances/${props.pairName}`,
            key: 'neutrinoBalances',
            collection: CollectionEnum.NEUTRINO_BALANCES,
        },
    ]
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

        const isBlocked = _get(this.props, 'neutrinoBalances.isBlocked');

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
                        {isBlocked && this.props.currentItem.id !== ROUTE_ROOT && (
                            <BlockedApp/>
                        )}
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
