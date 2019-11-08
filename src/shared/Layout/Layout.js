import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import {setUser} from 'yii-steroids/actions/auth';
import layoutHoc, {STATUS_ACCESS_DENIED, STATUS_LOADING, STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';
import screenWatcherHoc from 'yii-steroids/ui/screenWatcherHoc';
import {getCurrentItem, getCurrentItemParam} from 'yii-steroids/reducers/navigation';
import {getData, getUser} from 'yii-steroids/reducers/auth';
import {openModal} from 'yii-steroids/actions/modal';
import {isPhone} from 'yii-steroids/reducers/screen';

import { html, http, dal, ws, store } from 'components';
import wrongNetworkImage from 'static/images/warning-image.svg';
import CollectionEnum from 'enums/CollectionEnum';
import ContractEnum from 'enums/ContractEnum';
import Header from 'shared/Header';
import LeftSidebar from 'shared/LeftSidebar';
import RightSidebar from 'shared/RightSidebar';
import BlockedApp from 'shared/BlockedApp';
import MessageModal from 'modals/MessageModal';
import {apiWsHandler} from 'actions/api';
import {currencySetCurrent} from 'actions/currency';
import {ROUTE_ROOT} from 'routes';
import {getPairName} from 'reducers/currency';
import { ConfigContext } from './context';
import { WavesContractDataController } from 'contractControllers/WavesContractController';

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
        const data = await http.get('/api/v1/init');

        return data;
    }
)
@screenWatcherHoc()
@connect(
    state => ({
        isShowLeftSidebar: getCurrentItemParam(state, 'isShowLeftSidebar'),
        matchParams: state.navigation.params,
        data: getData(state),
        currentItem: getCurrentItem(state),
        pairName: getPairName(state),
        user: getUser(state),
        isPhone: isPhone(state),
        // prices: getPrices(state),
    })
)
@dal.hoc(
    props => [
        {
            url: `/api/v1/neutrino-config/${props.pairName}`,
            key: 'neutrinoConfig',
            collection: CollectionEnum.CONTROL_CONFIG,
        },
    ]
)
export default class Layout extends React.PureComponent {

    static propTypes = {
        status: PropTypes.string,
    };

    constructor() {
        super(...arguments);

        this.wasWrongNetworkMessageShown = false;
        this.controllerInitialized = false;
    }

    componentDidUpdate () {
        const { config, pairName } = this.props;
        
        if (config && !this.controllerInitialized) {
            
            const dAppAddress = config.dal.contracts[pairName][ContractEnum.NEUTRINO];

            // console.log({ dAppAddress, config, pairName, p: this.props });

            const wcc = new WavesContractDataController({ dAppAddress });
            wcc.startUpdating();
            
            this.controllerInitialized = true;
        }
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            Promise.resolve(dal.isLogged() ? dal.login() : null)
                .then(user => {
                    store.dispatch([
                        // currencySetPrices(nextProps.data.prices),
                        setUser(user),
                    ]);
                });
        }

        if (_get(this.props, 'matchParams.currency') !== _get(nextProps, 'matchParams.currency')) {
            store.dispatch(currencySetCurrent(nextProps.matchParams.currency));
        }
        if (nextProps.data && nextProps.status === STATUS_ACCESS_DENIED) {
            //this.props.dispatch(goToPage(ROUTE_ROOT));
        }

        const nextAppNetwork = _get(nextProps, 'data.config.dal.network');
        const nextUserNetwork = _get(nextProps, 'user.network');
        const thisUserNetwork = _get(this.props, 'user.network');

        if (!this.props.isPhone) {
            if (thisUserNetwork && nextUserNetwork && thisUserNetwork !== nextUserNetwork) {
                this.wasWrongNetworkMessageShown = false;
            }

            if (!this.wasWrongNetworkMessageShown && nextAppNetwork && nextUserNetwork && nextAppNetwork !== nextUserNetwork) {
                store.dispatch(openModal(MessageModal, {
                    text: __('Switch your Waves Keeper network to {name}', {
                        name: nextAppNetwork.toUpperCase(),
                    }),
                    image: {
                        src: wrongNetworkImage,
                        alt: 'Switch Waves Keeper network'
                    }
                }));

                this.wasWrongNetworkMessageShown = true;
            }
        }
    }

    render() {
        const isBlocked = _get(this.props, 'neutrinoConfig.isBlocked');

        // if (this.props.status === STATUS_RENDER_ERROR || !this.props.prices) {
        if (this.props.status === STATUS_RENDER_ERROR) {
            return null;
        }

        const configValue = {...this.props.config};

        return (
            <div className={bem.block({
                'is-show-left-sidebar': this.props.isShowLeftSidebar
            })}>
                <ConfigContext.Provider value={configValue}>
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
                </ConfigContext.Provider>
                <ModalWrapper/>
            </div>
        );
    }
}
