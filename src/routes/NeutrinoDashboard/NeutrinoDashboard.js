import React from 'react';
import _, { get as _get } from 'lodash';
import { html, dal, store } from 'components';
import {
    getNeutrinoDappAddress,
    getCurrentAccountAddress,
    getNeutrinoAssetId,
} from 'components/selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, change, reset } from 'redux-form';
import _toNumber from 'lodash-es/toNumber';
import { nodeInteraction } from '@waves/waves-transactions';
import { ContractBalanceKeysEnum } from 'contractControllers/enums';
import { getAddressDataByKey } from 'contractControllers/helpers';
import InputField from 'yii-steroids/ui/form/InputField';
import { Translation } from 'react-i18next';
import Form from 'yii-steroids/ui/form/Form';
import Button from 'yii-steroids/ui/form/Button';
import CheckboxField from 'yii-steroids/ui/form/CheckboxField';
import { getUser } from 'yii-steroids/reducers/auth';
import { ConfigContext, GlobalLinksContext, UserCongratsModalContext } from 'shared/Layout/context';
import MessageModal from 'modals/MessageModal';
import { openModal } from 'yii-steroids/actions/modal';
import { prettyPrintNumber } from 'ui/global/helpers';
import { TERMS_OF_USE_LABEL } from 'shared/Layout/constants';
import { NEUTRINO_DEC } from 'reducers/contract/helpers';

import CurrencyEnum from 'enums/CurrencyEnum';
import ContractEnum from 'enums/ContractEnum';
import PairsEnum from 'enums/PairsEnum';
import CollectionEnum from 'enums/CollectionEnum';
import { getPairName, getQuoteCurrency, getSourceCurrency } from 'reducers/currency';
import Hint from 'shared/Hint';
import SwapLoader from 'shared/SwapLoader';
import { getControlPrice, getTotalIssued } from 'reducers/contract/selectors';

import './NeutrinoDashboard.scss';

const bem = html.bem('NeutrinoDashboard');

const FORM_ID = 'GenerationForm';
const PRICE_FEED_PERIOD = 1000;

const SwapWarningMessage = () => (
    <Translation>
        {(t) => <span className="SwapWarningMessage">{t('common.swap_wait_warning.label')}</span>}
    </Translation>
);

@connect((state) => ({
    sourceCurrency: getSourceCurrency(state),
    quoteCurrency: getQuoteCurrency(state),
    pairName: getPairName(state),
    formValues: getFormValues(FORM_ID)(state),
    user: getUser(state),
    controlPrice: getControlPrice(state),
    totalIssued: getTotalIssued(state),
}))
@dal.hoc((props) => [
    {
        url: `/api/v1/neutrino-balances/${props.pairName}`,
        key: 'neutrinoBalances',
        collection: CollectionEnum.NEUTRINO_BALANCES,
    },
    // {
    //     url: `/api/v1/neutrino-config/${props.pairName}`,
    //     key: 'neutrinoConfig',
    //     collection: CollectionEnum.CONTROL_CONFIG,
    // },
    {
        url: `/api/v1/price-feed/${props.sourceCurrency}/${PRICE_FEED_PERIOD}`,
        key: 'priceFeed',
    },
    // {
    //     url: `/api/v1/withdraw/${props.pairName}/${_get(props, 'user.address')}`,
    //     key: 'withdraw',
    //     collection: CollectionEnum.NEUTRINO_WITHDRAW,
    // },
])
export default class NeutrinoDashboard extends React.PureComponent {
    static propTypes = {
        quoteCurrency: PropTypes.string,
        sourceCurrency: PropTypes.string,
        pairName: PropTypes.string,
        neutrinoBalances: PropTypes.shape({
            totalIssued: PropTypes.number,
            totalUsed: PropTypes.number,
            contractBalance: PropTypes.number,
        }),
        neutrinoConfig: PropTypes.shape({
            price: PropTypes.number,
        }),
        priceFeed: PropTypes.number,
        withdraw: PropTypes.shape({
            neutrinoBlocked: PropTypes.number,
            wavesBlocked: PropTypes.number,
            unblockBlock: PropTypes.number,
            height: PropTypes.number,
            index: PropTypes.number,
        }),
    };

    constructor() {
        super(...arguments);

        this.state = {
            step: 'generation',
            isWavesLeft: true,
            isSwapLoading: false,
            lastBalanceIndices: {
                lockedWaves: null,
                lockedNeutrino: null,
                unlockBlock: null,
            },
        };

        this.getControlPrice = this.getControlPrice.bind(this);
        this._checkForSwap = this._checkForSwap.bind(this);
        this._updateBalanceIndices = this._updateBalanceIndices.bind(this);
        this._updateAndCheckBalanceIndices = this._updateAndCheckBalanceIndices.bind(this);
        this._wasSwapLoading = null;

        this._onSubmit = this._onSubmit.bind(this);
        this._isProgramChange = false;

        this._swapCheckerEnabed = false;
        this._swapCheckerInterval = null;
        this._swapCheckerIntervalMs = 30 * 1000;
    }

    async _updateAndCheckBalanceIndices() {
        const dAppAddress = getNeutrinoDappAddress(dal);
        const currentAccountAddress = getCurrentAccountAddress(dal);

        if (!currentAccountAddress) {
            return;
        }

        try {
            await this._updateBalanceIndices(dAppAddress, currentAccountAddress);
        } catch (err) {
            console.warn('Error on balance indices update', err);
        }
        await this._checkForSwap();
    }

    async componentDidUpdate(prevProps, prevState) {
        this._wasSwapLoading = prevState.isSwapLoading;

        if (getCurrentAccountAddress(dal) && !this._swapCheckerEnabed) {
            this._swapCheckerEnabed = true;

            await this._updateAndCheckBalanceIndices();

            this._swapCheckerInterval = setInterval(async () => {
                await this._updateAndCheckBalanceIndices();
            }, this._swapCheckerIntervalMs);
        }
    }

    componentWillUnmount() {
        clearInterval(this._swapCheckerInterval);

        this._swapCheckerEnabed = false;
    }

    componentWillReceiveProps(nextProps) {
        const thisWaves = _get(this.props.formValues, 'waves');
        const nextWaves = _get(nextProps.formValues, 'waves');
        const thisNeutrino = _get(this.props.formValues, 'neutrino');
        const nextNeutrino = _get(nextProps.formValues, 'neutrino');
        const thisPrice = _get(this.props, 'neutrinoConfig.price');
        const nextPrice = _get(nextProps, 'neutrinoConfig.price');

        const isChangeWavesAmount = thisWaves !== nextWaves;
        const isChangeCurrencyAmount = thisNeutrino !== nextNeutrino;
        const isChangePrice =
            nextWaves && nextNeutrino && thisPrice && nextPrice && thisPrice !== nextPrice;

        if (isChangeWavesAmount || isChangeCurrencyAmount || isChangePrice) {
            this._refreshAmount(
                nextProps,
                isChangeWavesAmount || (isChangePrice && this.state.isWavesLeft)
            );
        } else {
            this._isProgramChange = false;
        }
    }

    mapToSwapLoaderProps({ currentHeight, lockedWaves, lockedNeutrino, unlockBlock }) {
        return {
            height: currentHeight,
            wavesBlocked: lockedWaves,
            neutrinoBlocked: lockedNeutrino,
            unblockBlock: unlockBlock,
        };
    }

    async _checkForSwap() {
        const { lockedWaves, lockedNeutrino, unlockBlock } = this.state.lastBalanceIndices;
        const currentHeight = await nodeInteraction.currentHeight(dal.nodeUrl);

        const isLocked = (lockedWaves > 0 || lockedNeutrino > 0) && unlockBlock >= currentHeight;

        this.setState({
            isSwapLoading: isLocked,
            swapLoaderProps: this.mapToSwapLoaderProps({
                currentHeight,
                lockedWaves,
                lockedNeutrino,
                unlockBlock,
            }),
        });
    }

    async _updateBalanceIndices(dAppAddress, address) {
        const { nodeUrl } = dal;

        const { data: lockedWaves } = await getAddressDataByKey({
            nodeUrl,
            address: dAppAddress,
            key: `${ContractBalanceKeysEnum.BALANCE_LOCK_WAVES}_${address}`,
        });
        const { data: lockedNeutrino } = await getAddressDataByKey({
            nodeUrl,
            address: dAppAddress,
            key: `${ContractBalanceKeysEnum.BALANCE_LOCK_NEUTRINO}_${address}`,
        });
        const { data: unlockBlock } = await getAddressDataByKey({
            nodeUrl,
            address: dAppAddress,
            key: `${ContractBalanceKeysEnum.BALLANCE_UNBLOCK_BLOCK}_${address}`,
        });

        this.setState({
            lastBalanceIndices: {
                lockedWaves: lockedWaves.value,
                lockedNeutrino: lockedNeutrino.value,
                unlockBlock: unlockBlock.value,
            },
        });
    }

    getControlPrice() {
        return _.round(_get(this.props, 'controlPrice', 0) / NEUTRINO_DEC, 2);
    }

    getTotalIssued() {
        return this.props.totalIssued
            ? _.round(this.props.totalIssued / CurrencyEnum.getContractPow(CurrencyEnum.USD_N), 2)
            : '';
    }

    render() {
        const { isSwapLoading, swapLoaderProps } = this.state;

        const computedClassName = [
            bem.block(),
            isSwapLoading ? bem.element('swap-processing') : '',
        ].join(' ');

        return (
            <Translation>
                {(t) => {
                    const steps = [
                        {
                            id: 'generation',
                            label: t('common.tokens_swap.label'),
                        },
                        {
                            id: 'details',
                            label: t('common.confirm_details.label'),
                        },
                    ];
                    return (
                        <UserCongratsModalContext.Consumer>
                            {(context) => (
                                <div className={computedClassName}>
                                    {isSwapLoading && <SwapLoader {...swapLoaderProps} />}
                                    {this.renderStepChanger(steps)}
                                    <Form
                                        className={bem.element('form')}
                                        formId={FORM_ID}
                                        onSubmit={(formData) => this._onSubmit(formData, context)}
                                    >
                                        {this.state.step === 'generation' &&
                                            this.renderGenerationStep(t)}
                                        {this.state.step === 'details' && this.renderDetailsStep()}
                                    </Form>
                                </div>
                            )}
                        </UserCongratsModalContext.Consumer>
                    );
                }}
            </Translation>
        );
    }

    renderStepChanger(steps) {
        return (
            <div className={bem.element('steps')}>
                {steps.map((item, index) => (
                    <div
                        key={item.id}
                        className={bem.element('step', {
                            active: this.state.step === item.id,
                        })}
                    >
                        <span className={bem.element('step-count')}>{index + 1}</span>
                        <span className={bem.element('step-label')}>{item.label}</span>
                    </div>
                ))}
            </div>
        );
    }

    getCurrencyLabels(t) {
        const { quoteCurrency: _quoteCurrency, sourceCurrency: _sourceCurrency } = this.props;
        const replaceArgs = [/-/g, ''];
        const sourceCurrency = _sourceCurrency.toUpperCase().replace(...replaceArgs);
        const quoteCurrency = _quoteCurrency.toUpperCase().replace(...replaceArgs);

        return {
            mapLabel: (label) => <span>{label}</span>,
            totalIssuedLabels: [
                `${t('common.total_issued.label')} ${quoteCurrency}`,
                `Issued ${quoteCurrency}`,
            ],
            currentPriceLabels: [`WAVES / ${quoteCurrency}`, `WAVES / ${sourceCurrency} price`],
        };
    }

    renderGenerationStep(t) {
        const grabNeutrinoAddress = (config) => {
            try {
                return config.dal.contracts[PairsEnum.USDNB_USDN][ContractEnum.NEUTRINO];
            } catch (err) {
                return '';
            }
        };

        const {
            // mobile: mobileLabels,
            // desktop: desktopLabels
            totalIssuedLabels,
            mapLabel,
            currentPriceLabels,
        } = this.getCurrencyLabels(t);

        const { isWavesLeft } = this.state;

        const swapWarning = 'Approximate WAVES value based on current price';

        const leftCurrency = isWavesLeft
            ? CurrencyEnum.getLabel(CurrencyEnum.WAVES)
            : CurrencyEnum.getLabel(this.props.quoteCurrency);

        return (
            <Translation>
                {(t) => (
                    <>
                        <div className={bem.element('inputs')}>
                            <div className={bem.element('input-container')}>
                                <div className={bem.element('input-label')}>
                                    {t('common.send.label')}
                                </div>
                                <InputField
                                    className={bem.element('input')}
                                    attribute={isWavesLeft ? 'waves' : 'neutrino'}
                                    inners={{
                                        label: isWavesLeft
                                            ? CurrencyEnum.getLabel(CurrencyEnum.WAVES)
                                            : CurrencyEnum.getLabel(this.props.quoteCurrency),
                                        icon: isWavesLeft
                                            ? CurrencyEnum.getIconClass(CurrencyEnum.WAVES)
                                            : CurrencyEnum.getIconClass(CurrencyEnum.USD_N),
                                    }}
                                />
                                <div className={bem.element('input-hint')}>
                                    {`${t('common.minimum.label')} ${t(
                                        'common.required.label'
                                    )}: 1 ${leftCurrency}`}
                                </div>
                            </div>

                            <div
                                className={bem.element('exchange-button')}
                                onClick={() =>
                                    this.setState({ isWavesLeft: !this.state.isWavesLeft })
                                }
                            >
                                <span className={'Icon Icon__exchange'} />
                            </div>

                            <div className={bem.element('input-container')}>
                                <div className={bem.element('input-label')}>
                                    {t('common.receive.label')}
                                </div>
                                <InputField
                                    className={bem.element('input')}
                                    attribute={isWavesLeft ? 'neutrino' : 'waves'}
                                    inners={{
                                        label: isWavesLeft
                                            ? CurrencyEnum.getLabel(this.props.quoteCurrency)
                                            : CurrencyEnum.getLabel(CurrencyEnum.WAVES),
                                        icon: isWavesLeft
                                            ? CurrencyEnum.getIconClass(CurrencyEnum.USD_N)
                                            : CurrencyEnum.getIconClass(CurrencyEnum.WAVES),
                                    }}
                                />
                                <div className={bem.element('input-hint', 'swap')}>
                                    <span className={isWavesLeft ? 'hidden' : ''}>
                                        {swapWarning}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={bem.element('info')}>
                            <div className={bem.element('info-cols')}>
                                <div className={bem.element('info-column')}>
                                    <ConfigContext.Consumer>
                                        {(environmentConfig) => (
                                            <div className={bem.element('info-row')}>
                                                <div className={bem.element('info-string')}>
                                                    <div className={bem.element('info-hint')}>
                                                        <Hint
                                                            text={__(
                                                                grabNeutrinoAddress(
                                                                    environmentConfig
                                                                )
                                                            )}
                                                        />
                                                    </div>
                                                    <span>{t('common.smart_contract.label')}</span>
                                                </div>
                                                <a
                                                    href={`https://wavesexplorer.com/address/${grabNeutrinoAddress(
                                                        environmentConfig
                                                    )}`}
                                                    target="_blank"
                                                >
                                                    <span>
                                                        {grabNeutrinoAddress(environmentConfig)}
                                                    </span>
                                                </a>
                                            </div>
                                        )}
                                    </ConfigContext.Consumer>
                                    <div className={bem.element('info-row')}>
                                        <div className={bem.element('info-string', 'without-hint')}>
                                            <span>{t('common.asset_id.label')}</span>
                                        </div>
                                        <a
                                            href={`https://wavesexplorer.com/assets/${getNeutrinoAssetId(
                                                dal
                                            )}`}
                                            target="_blank"
                                        >
                                            <span>{getNeutrinoAssetId(dal)}</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={bem.element('info-column')}>
                                    <div className={bem.element('info-row')}>
                                        <div className={bem.element('info-string', 'with-mobile')}>
                                            {totalIssuedLabels.map(mapLabel)}
                                        </div>
                                        <span>{prettyPrintNumber(this.getTotalIssued())}</span>
                                    </div>
                                    <div className={bem.element('info-row')}>
                                        <div className={bem.element('info-string', 'with-mobile')}>
                                            {currentPriceLabels.map(mapLabel)}
                                        </div>
                                        <span>
                                            {this.getControlPrice()}{' '}
                                            {CurrencyEnum.getSign(this.props.sourceCurrency)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <SwapWarningMessage />
                        </div>
                        <div className={bem.element('generate-actions')}>
                            <Button
                                disabled={
                                    !_get(this.props.formValues, 'waves') ||
                                    !_get(this.props.formValues, 'neutrino') ||
                                    !_toNumber(_get(this.props.formValues, 'waves')) ||
                                    !_toNumber(_get(this.props.formValues, 'neutrino'))
                                }
                                className={bem.element('submit-button')}
                                label={
                                    this.state.isWavesLeft
                                        ? `${t('common.issue.label')} ${CurrencyEnum.getLabel(
                                              this.props.quoteCurrency
                                          )}`
                                        : `${t('common.redeem.label')} ${t(
                                              'enums.currency.waves.label'
                                          )}`
                                }
                                onClick={() => this.setState({ step: 'details' })}
                            />
                        </div>
                    </>
                )}
            </Translation>
        );
    }

    renderDetailsStep() {
        return (
            <Translation>
                {(t) => (
                    <>
                        <div className={bem.element('details')}>
                            <div className={bem.element('details-item')}>
                                <span className={bem.element('details-label')}>
                                    {t('views.please_confirm_the_swap.label')}
                                </span>
                                <SwapWarningMessage />
                                <div className={bem.element('details-inner', 'generation')}>
                                    <div className={bem.element('values')}>
                                        <span className={bem.element('value-title')}>
                                            {t('common.send.label')}:
                                        </span>
                                        <div className={bem.element('value-item')}>
                                            <span className={bem.element('value-number')}>
                                                {_get(
                                                    this.props.formValues,
                                                    this.state.isWavesLeft ? 'waves' : 'neutrino'
                                                )}
                                            </span>
                                            <div>
                                                <span
                                                    className={bem(
                                                        bem.element('value-icon'),
                                                        `Icon ${
                                                            this.state.isWavesLeft
                                                                ? CurrencyEnum.getIconClass(
                                                                      CurrencyEnum.WAVES
                                                                  )
                                                                : CurrencyEnum.getIconClass(
                                                                      CurrencyEnum.USD_N
                                                                  )
                                                        }`
                                                    )}
                                                />
                                                <span className={bem.element('value-name')}>
                                                    {this.state.isWavesLeft
                                                        ? CurrencyEnum.getLabel(CurrencyEnum.WAVES)
                                                        : CurrencyEnum.getLabel(
                                                              this.props.quoteCurrency
                                                          )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={bem.element('values')}>
                                        <span className={bem.element('value-title')}>
                                            {t('common.receive.label')}:
                                        </span>
                                        <div className={bem.element('value-item')}>
                                            <span className={bem.element('value-number')}>
                                                {_get(
                                                    this.props.formValues,
                                                    this.state.isWavesLeft ? 'neutrino' : 'waves'
                                                )}
                                            </span>
                                            <div>
                                                <span
                                                    className={bem(
                                                        bem.element('value-icon'),
                                                        `Icon ${
                                                            this.state.isWavesLeft
                                                                ? CurrencyEnum.getIconClass(
                                                                      CurrencyEnum.USD_N
                                                                  )
                                                                : CurrencyEnum.getIconClass(
                                                                      CurrencyEnum.WAVES
                                                                  )
                                                        }`
                                                    )}
                                                />
                                                <span className={bem.element('value-name')}>
                                                    {this.state.isWavesLeft
                                                        ? CurrencyEnum.getLabel(
                                                              this.props.quoteCurrency
                                                          )
                                                        : CurrencyEnum.getLabel(CurrencyEnum.WAVES)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <GlobalLinksContext.Consumer>
                                {(context) => {
                                    const tosLink = context.links.find(
                                        (link) => link.label === TERMS_OF_USE_LABEL
                                    ).url;
                                    return (
                                        <CheckboxField
                                            className={bem.element('terms-checkbox')}
                                            label={
                                                <span>
                                                    {t('views.have_read_and_accept.label')}{' '}
                                                    <a href={tosLink} target="_blank">
                                                        {__(TERMS_OF_USE_LABEL)}
                                                    </a>
                                                </span>
                                            }
                                            attribute={'terms'}
                                        />
                                    );
                                }}
                            </GlobalLinksContext.Consumer>
                            <div className={bem.element('details-actions')}>
                                <Button
                                    color={'secondary'}
                                    className={bem.element('back-button')}
                                    label={t('common.go_back.label')}
                                    onClick={() => this.setState({ step: 'generation' })}
                                />
                                <Button
                                    type={'submit'}
                                    className={bem.element('finalize-button')}
                                    disabled={!_get(this.props.formValues, 'terms')}
                                    label={t('common.confirm.label')}
                                />
                            </div>
                        </div>
                    </>
                )}
            </Translation>
        );
    }

    _refreshAmount(props, isRefreshToAmount = false) {
        props = props || this.props;

        if (this._isProgramChange) {
            this._isProgramChange = false;
            return;
        }
        this._isProgramChange = true;

        const rate = this.getControlPrice();

        let amount = this._parseAmount(
            isRefreshToAmount
                ? _get(props.formValues, 'waves') * rate
                : _get(props.formValues, 'neutrino') / rate
        );

        store.dispatch(
            change(
                FORM_ID,
                isRefreshToAmount ? 'neutrino' : 'waves',
                this._toFixedSpecial(amount, 2)
            )
        );
    }

    _parseAmount(amount) {
        if (typeof amount === 'undefined') {
            return 0;
        }
        let result = typeof amount === 'string' ? amount.replace(/,/, '.') : amount;
        return !isNaN(parseFloat(result)) && isFinite(result) ? result : 0;
    }

    _toFixedSpecial = function (num, n) {
        const str = num.toFixed(n);
        if (str.indexOf('e+') < 0) {
            return str;
        }

        // if number is in scientific notation, pick (b)ase and (p)ower
        return (
            str
                .replace('.', '')
                .split('e+')
                .reduce(function (p, b) {
                    return p + new Array(b - p.length + 2).join(0);
                }) +
            '.' +
            new Array(n + 1).join(0)
        );
    };

    async _onSubmit(values, congratsModalContext) {
        this.setState({ step: 'generation' });

        store.dispatch(reset(FORM_ID));

        try {
            if (this.state.isWavesLeft) {
                await dal.swapWavesToNeutrino(this.props.pairName, values.waves);
                congratsModalContext.onOpen();
            } else {
                await dal.swapNeutrinoToWaves(
                    this.props.pairName,
                    this.props.quoteCurrency,
                    values.neutrino
                );
            }

            await this._updateAndCheckBalanceIndices();
        } catch (err) {
            console.log('Swap Error: ', err.stack || err); // eslint-disable-line no-console

            store.dispatch(
                openModal(MessageModal, {
                    text: `${t('common.swap_error.label')}. ${err.message}`,
                })
            );
        }
    }
}
