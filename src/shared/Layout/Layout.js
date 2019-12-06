import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';
import queryString from 'query-string';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import { goToPage } from 'yii-steroids/actions/navigation';
import { setUser } from 'yii-steroids/actions/auth';
import layoutHoc, {
    STATUS_ACCESS_DENIED,
    STATUS_LOADING,
    STATUS_RENDER_ERROR,
} from 'yii-steroids/ui/layoutHoc';
import screenWatcherHoc from 'yii-steroids/ui/screenWatcherHoc';
import { getCurrentItem, getCurrentItemParam } from 'yii-steroids/reducers/navigation';
import { getData, getUser } from 'yii-steroids/reducers/auth';
import { openModal } from 'yii-steroids/actions/modal';
import { isPhone } from 'yii-steroids/reducers/screen';
import WarningMobileModal from 'modals/WarningMobileModal';
import InstallKeeperModal from 'modals/InstallKeeperModal';
import TransferModal from 'modals/TransferModal';
import CreateInvoiceModal from 'modals/CreateInvoiceModal';

import { html, http, dal, ws, store } from 'components';
import wrongNetworkImage from 'static/images/warning-image.svg';
import CollectionEnum from 'enums/CollectionEnum';
import CurrencyEnum from 'enums/CurrencyEnum';
import ContractEnum from 'enums/ContractEnum';
import Header from 'shared/Header';
import LeftSidebar from 'shared/LeftSidebar';
import RightSidebar from 'shared/RightSidebar';
import BlockedApp from 'shared/BlockedApp';
import MessageModal from 'modals/MessageModal';
import { apiWsHandler } from 'actions/api';
import { currencySetCurrent } from 'actions/currency';
import { ROUTE_ROOT, ROUTE_NEUTRINO_SHOW_TRANSFERS, ROUTE_NEUTRINO_SHOW_INVOICE_GEN } from 'routes';
import { getPairName } from 'reducers/currency';
import {
    ConfigContext,
    InstallKeeperModalContext,
    BlurContext,
    UserCongratsModalContext,
    LearnLinksContext,
    GlobalLinksContext,
} from './context';
import {
    defaultLearnLinks as links,
    defaultProductLinks as product,
} from './defaults';
import { WavesContractDataController } from 'contractControllers/WavesContractController';
import TransferInvoiceModal from 'modals/TransferInvoiceModal';
import UserCongratsModal from 'modals/UserCongratsModal';

import './Layout.scss';

const bem = html.bem('Layout');

@layoutHoc(async () => {
    // Initialize websocket
    // TODO ws.wsUrl = process.env.APP_WS_URL || 'ws://localhost:5000';
    ws.wsUrl = location.port ? 'ws://localhost:5000' : location.origin.replace('http', 'ws');
    ws.onMessage = event =>
        store.dispatch([
            apiWsHandler(event),
            // currencyWsHandler(event),
        ]);
    ws.open();

    // Load init data
    const data = await http.get('/api/v1/init');

    return data;
})
@screenWatcherHoc()
@connect(state => ({
    isShowLeftSidebar: getCurrentItemParam(state, 'isShowLeftSidebar'),
    matchParams: state.navigation.params,
    data: getData(state),
    currentItem: getCurrentItem(state),
    pairName: getPairName(state),
    user: getUser(state),
    isPhone: isPhone(state),
    // prices: getPrices(state),
}))
@dal.hoc(props => [
    {
        url: `/api/v1/neutrino-config/${props.pairName}`,
        key: 'neutrinoConfig',
        collection: CollectionEnum.CONTROL_CONFIG,
    },
])
export default class Layout extends React.PureComponent {
    static propTypes = {
        status: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.wasWrongNetworkMessageShown = false;
        this.controllerInitialized = false;

        this.onScreenResize = this.onScreenResize.bind(this);
        this.openWarningModal = this.openWarningModal.bind(this);
        this.onWavesKeeperLogin = this.onWavesKeeperLogin.bind(this);
        this.onWavesKeeperLogout = this.onWavesKeeperLogout.bind(this);
        this.checkCurrentRoute = this.checkCurrentRoute.bind(this);
        this.handleQueryParams = this.handleQueryParams.bind(this);
        this.handleUserWithNoKeeper = this.handleUserWithNoKeeper.bind(this);

        this.resizeObserver = null;
        this.wcc = null;
        this.blurContextValue = {
            blur: () => this.setState({ isBlurred: true }),
            unblur: () => this.setState({ isBlurred: false }),
            checkIsBlurred: () => this.state.isBlurred,
        };
        this.learnLinksContextValue = { links };
        this.userCongratsModalContextValue = {
            onClose: () => this.setState({ isUserCongratsModalOpened: false }),
            onOpen: () => this.setState({ isUserCongratsModalOpened: true }),
        };
        this.globalLinksContextValue = { links, product };

        this.state = {
            shouldShowInviteModal: false,
            isUserCongratsModalOpened: false,
            isBlurred: false,
        };
    }

    handleUserWithNoKeeper(onSuccess = () => {}, onError = () => {}) {
        const fn = () => {
            const isKeeperInstalled = Boolean(window.WavesKeeper && window.WavesKeeper.publicState);

            const { page } = this.props;

            if (!isKeeperInstalled && page.id !== ROUTE_ROOT) {
                // store.dispatch(goToPage(ROUTE_ROOT));
                window.location.href = '/';

                this.setState({ shouldShowInviteModal: true });
                onError();
            } else {
                onSuccess();
            }
        };

        setTimeout(() => fn(), 1500);
    }

    checkCurrentRoute() {
        const { page, user } = this.props;

        if (document.body.offsetWidth < 600 || !user) {
            return;
        }

        switch (page.id) {
            case ROUTE_NEUTRINO_SHOW_TRANSFERS:
                store.dispatch(openModal(TransferModal, { currency: CurrencyEnum.USD_N }));
                break;
            case ROUTE_NEUTRINO_SHOW_INVOICE_GEN:
                store.dispatch(openModal(CreateInvoiceModal, { currency: CurrencyEnum.USD_N }));
                break;
        }
    }

    componentWillMount() {
        this.handleUserWithNoKeeper(() => this.checkCurrentRoute());
    }

    async componentDidMount() {
        this.attachResizeObserver();
        this.openWarningModal();

        this.handleQueryParams();
    }

    handleQueryParams () {
        const url = new URL(window.location.href);

        if (url.searchParams.get('openKeeperWarning')) {
            this.triggerInstallKeeperModalVisibility(true);
        }
    }

    openWarningModal(width = document.body.offsetWidth) {
        if (width < 600) {
            store.dispatch(openModal(WarningMobileModal));
        }
    }

    onScreenResize(entry) {
        const width = _get(entry[0], 'contentRect.width', null);

        this.openWarningModal(width);
    }

    attachResizeObserver() {
        try {
            this.resizeObserver = new ResizeObserver(this.onScreenResize);
            this.resizeObserver.observe(document.body);
        } catch (err) {
            console.warn({ err }, 'ResizeObserver is not supported');
        }
    }

    detachResizeObserver() {
        if (!this.resizeObserver) {
            return;
        }

        this.resizeObserver.disconnect();
    }

    componentWillUnmount() {
        this.wcc.stopUpdating();
        this.detachResizeObserver();
    }

    _attachWavesDataController() {
        const { config, pairName } = this.props;

        if (config && !this.controllerInitialized) {
            const dAppAddress = config.dal.contracts[pairName][ContractEnum.NEUTRINO];
            const neutrinoAssetId = config.dal.assets[CurrencyEnum.USD_N];

            this.wcc = new WavesContractDataController({
                dAppAddress,
                nodeUrl: dal.nodeUrl,
            });
            this.wcc.neutrinoAssetId = neutrinoAssetId;
            this.wcc.startUpdating();

            this.controllerInitialized = true;
        }
    }

    async onWavesKeeperLogin(onSuccess = () => {}, onError = () => {}) {
        try {
            await dal.login();
            onSuccess();
        } catch (err) {
            console.log({ err });
            this.setState({ shouldShowInviteModal: true });
            onError();
        }
    }

    async onWavesKeeperLogout() {
        await dal.logout();
        store.dispatch(goToPage(ROUTE_ROOT));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user) {
            const invoiceProvided = this._checkForInvoice();

            if (!invoiceProvided && prevProps.page.id !== this.props.page.id) {
                this.checkCurrentRoute();
            }
        }

        this._attachWavesDataController();
    }

    triggerInstallKeeperModalVisibility(isVisible) {
        this.setState({ shouldShowInviteModal: isVisible });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            Promise.resolve(dal.isLogged() ? dal.login() : null).then(user => {
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

            if (
                !this.wasWrongNetworkMessageShown &&
                nextAppNetwork &&
                nextUserNetwork &&
                nextAppNetwork !== nextUserNetwork
            ) {
                store.dispatch(
                    openModal(MessageModal, {
                        text: __('Switch your Waves Keeper network to {name}', {
                            name: nextAppNetwork.toUpperCase(),
                        }),
                        image: {
                            src: wrongNetworkImage,
                            alt: 'Switch Waves Keeper network',
                        },
                    })
                );

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

        const configValue = { ...this.props.config };
        const { shouldShowInviteModal, isBlurred, isUserCongratsModalOpened } = this.state;

        const children =
            this.props.currentItem.id !== ROUTE_ROOT ? (
                <div className={bem.element('inner')}>
                    {this.props.isShowLeftSidebar && (
                        <aside className={bem.element('left')}>
                            <LeftSidebar />
                        </aside>
                    )}
                    <div className={bem.element('center')}>
                        {isBlocked && this.props.currentItem.id !== ROUTE_ROOT && <BlockedApp />}
                        <header className={bem.element('header')}>
                            <Header />
                        </header>
                        <main className={bem.element('content', isBlurred ? 'blurred' : '')}>
                            {this.props.status !== STATUS_LOADING && this.props.children}
                        </main>
                    </div>
                    <aside className={bem.element('right')}>
                        <RightSidebar />
                    </aside>
                </div>
            ) : (
                this.props.children
            );

        return (
            <div
                className={bem.block({
                    'is-show-left-sidebar': this.props.isShowLeftSidebar,
                })}
            >
                <InstallKeeperModal
                    isOpened={shouldShowInviteModal}
                    onClose={() => this.triggerInstallKeeperModalVisibility(false)}
                />
                <GlobalLinksContext.Provider value={this.globalLinksContextValue}>
                    <BlurContext.Provider value={this.blurContextValue}>
                        <UserCongratsModalContext.Provider
                            value={this.userCongratsModalContextValue}
                        >
                            <InstallKeeperModalContext.Provider
                                value={{
                                    onLogin: this.onWavesKeeperLogin,
                                    onLogout: this.onWavesKeeperLogout,
                                    isVisible: shouldShowInviteModal,
                                    openModal: () => this.triggerInstallKeeperModalVisibility(true),
                                }}
                            >
                                <ConfigContext.Provider value={configValue}>
                                    <UserCongratsModal
                                        isOpened={isUserCongratsModalOpened}
                                        onClose={this.userCongratsModalContextValue.onClose}
                                        onOpen={this.userCongratsModalContextValue.onOpen}
                                    />
                                    {children}
                                </ConfigContext.Provider>
                                <ModalWrapper />
                            </InstallKeeperModalContext.Provider>
                        </UserCongratsModalContext.Provider>
                    </BlurContext.Provider>
                </GlobalLinksContext.Provider>
            </div>
        );
    }

    _checkForInvoice() {
        const params = queryString.parse(location.search);

        if (params && params.invoiceAddress && params.invoiceAmount && params.invoiceCurrency) {
            this.props.dispatch(
                openModal(TransferInvoiceModal, {
                    amount: params.invoiceAmount,
                    address: params.invoiceAddress,
                    currency: params.invoiceCurrency,
                })
            );

            return true;
        }
        return false;
    }
}
