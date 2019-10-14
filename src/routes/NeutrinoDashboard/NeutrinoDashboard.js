import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, change, reset} from 'redux-form';
import _get from 'lodash-es/get';
import _toNumber from 'lodash-es/toNumber';
import round from 'lodash-es/round';
import InputField from 'yii-steroids/ui/form/InputField';
import Form from 'yii-steroids/ui/form/Form';
import Button from 'yii-steroids/ui/form/Button';
import CheckboxField from 'yii-steroids/ui/form/CheckboxField';

import {html, dal} from 'components';
import CurrencyEnum from 'enums/CurrencyEnum';
import {getPairName, getQuoteCurrency, getSourceCurrency} from 'reducers/currency';
import Hint from 'shared/Hint';
import SwapLoader from 'shared/SwapLoader';

import './NeutrinoDashboard.scss';
import CollectionEnum from '../../enums/CollectionEnum';
import {login} from 'yii-steroids/actions/auth';
import {getUser} from 'yii-steroids/reducers/auth';

const bem = html.bem('NeutrinoDashboard');
const FORM_ID = 'GenerationForm';
const PRICE_FEED_PERIOD = 1000;

@connect(
    (state, props) => ({
        sourceCurrency: getSourceCurrency(state),
        quoteCurrency: getQuoteCurrency(state),
        pairName: getPairName(state),
        formValues: getFormValues(FORM_ID)(state),
        user: getUser(state),
    })
)
@dal.hoc(
    props => [
        {
            url: `/api/v1/neutrino-balances/${props.pairName}`,
            key: 'neutrinoBalances',
            collection: CollectionEnum.NEUTRINO_BALANCES,
        },
        {
            url: `/api/v1/price-feed/${props.sourceCurrency}/${PRICE_FEED_PERIOD}`,
            key: 'priceFeed',
        },
        {
            url: `/api/v1/withdraw/${props.pairName}/${_get(props, 'user.address')}`,
            key: 'withdraw',
            collection: CollectionEnum.NEUTRINO_WITHDRAW,
        },
    ]
)
export default class NeutrinoDashboard extends React.PureComponent {
    static propTypes = {
        quoteCurrency: PropTypes.string,
        sourceCurrency: PropTypes.string,
        pairName: PropTypes.string,
        neutrinoBalances: PropTypes.shape({
            totalIssued: PropTypes.number,
            totalUsed: PropTypes.number,
            contractBalance: PropTypes.number,
            price: PropTypes.number,
        }),
        priceFeed: PropTypes.number,
        withdraw: PropTypes.shape({
            neutrinoBlocked: PropTypes.number,
            wavesBlocked: PropTypes.number,
            unblockBlock: PropTypes.number,
            height: PropTypes.number,
        }),
    };

    constructor() {
        super(...arguments);

        this.state = {
            step: 'generation',
            isWavesLeft: true,
            isSwapInProgress: false,
        };

        this._onSubmit = this._onSubmit.bind(this);
        this._withdraw = this._withdraw.bind(this);
        this._isProgramChange = false;
    }

    componentWillReceiveProps(nextProps) {
        const thisWaves = _get(this.props.formValues, 'waves');
        const nextWaves = _get(nextProps.formValues, 'waves');
        const thisNeutrino = _get(this.props.formValues, 'neutrino');
        const nextNeutrino = _get(nextProps.formValues, 'neutrino');
        const thisPrice = _get(this.props, 'neutrinoBalances.price');
        const nextPrice = _get(nextProps, 'neutrinoBalances.price');


        const isChangeWavesAmount = thisWaves !== nextWaves;
        const isChangeCurrencyAmount = thisNeutrino !== nextNeutrino;
        const isChangePrice = (nextWaves && nextNeutrino) && (thisPrice && nextPrice) && (thisPrice !== nextPrice);

        if (isChangeWavesAmount || isChangeCurrencyAmount || isChangePrice) {
            this._refreshAmount(nextProps, isChangeWavesAmount || (isChangePrice && this.state.isWavesLeft));
        }
        else {
            this._isProgramChange = false;
        }

    }

    render() {

        console.log('---11', this.props.withdraw, );

        const steps = [
            {
                id: 'generation',
                label: __('Collateralize & generation {currency}', {
                    currency: CurrencyEnum.getLabel(this.props.quoteCurrency)
                }),
            },
            {
                id: 'details',
                label: __('Confirm details'),
            }
        ];

        return (
            <div className={bem.block()}>
                {(!!_get(this.props, 'withdraw.neutrinoBlocked') || !!_get(this.props, 'withdraw.wavesBlocked')) && (
                    <SwapLoader
                        {...this.props.withdraw}
                    />
                )}

                {this.renderStepChanger(steps)}
                <Form
                    className={bem.element('form')}
                    formId={FORM_ID}
                    onSubmit={this._onSubmit}
                >
                    {this.state.step === 'generation' && this.renderGenerationStep()}
                    {this.state.step === 'details' && this.renderDetailsStep()}
                </Form>
            </div>
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
                        <span className={bem.element('step-count')}>
                            {index + 1}
                        </span>
                        <span className={bem.element('step-label')}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    renderGenerationStep() {
        return (
            <>
                <div className={bem.element('inputs')}>
                    <div className={bem.element('input-container')}>
                        <div className={bem.element('input-label')}>
                            {__('How much {currency} would you like to collateralize?', {
                                currency: this.state.isWavesLeft
                                    ? CurrencyEnum.getLabel(CurrencyEnum.WAVES)
                                    : CurrencyEnum.getLabel(this.props.quoteCurrency),
                            })}
                        </div>
                        <InputField
                            className={bem.element('input')}
                            attribute={this.state.isWavesLeft ? 'waves' : 'neutrino'}
                            inners={{
                                label: this.state.isWavesLeft
                                    ? CurrencyEnum.getLabel(CurrencyEnum.WAVES)
                                    : CurrencyEnum.getLabel(this.props.quoteCurrency),
                                icon: this.state.isWavesLeft
                                    ? CurrencyEnum.getIconClass(CurrencyEnum.WAVES)
                                    : CurrencyEnum.getIconClass(CurrencyEnum.USD_N)
                            }}
                        />
                        <div className={bem.element('input-hint')}>
                            {__('Min. {currency} required: 100 {currency}', {
                                currency: this.state.isWavesLeft
                                    ? CurrencyEnum.getLabel(CurrencyEnum.WAVES)
                                    : CurrencyEnum.getLabel(this.props.quoteCurrency),
                            })}
                        </div>
                    </div>

                    <div
                        className={bem.element('exchange-button')}
                        onClick={() => this.setState({isWavesLeft: !this.state.isWavesLeft})}
                    >
                        <span className={'Icon Icon__exchange'}/>
                    </div>

                    <div className={bem.element('input-container')}>
                        <div className={bem.element('input-label')}>
                            {__('How much {currency} would you like to receive?', {
                                currency: this.state.isWavesLeft
                                    ? CurrencyEnum.getLabel(this.props.quoteCurrency)
                                    : 'WAVES'
                            })}
                        </div>
                        <InputField
                            className={bem.element('input')}
                            attribute={this.state.isWavesLeft ? 'neutrino' : 'waves'}
                            inners={{
                                label: this.state.isWavesLeft
                                    ? CurrencyEnum.getLabel(this.props.quoteCurrency)
                                    : CurrencyEnum.getLabel(CurrencyEnum.WAVES),
                                icon: this.state.isWavesLeft
                                    ? CurrencyEnum.getIconClass(CurrencyEnum.USD_N)
                                    : CurrencyEnum.getIconClass(CurrencyEnum.WAVES)
                            }}
                        />
                        <div className={bem.element('input-hint')}>
                            {__('Max {currency} available to generate: 10k {currency}', {
                                currency: this.state.isWavesLeft
                                    ? CurrencyEnum.getLabel(this.props.quoteCurrency)
                                    : CurrencyEnum.getLabel(CurrencyEnum.WAVES),
                            })}
                        </div>
                    </div>
                </div>

                <div className={bem.element('info')}>
                    <div className={bem.element('info-column')}>
                        <div className={bem.element('info-row')}>
                            <div className={bem.element('info-string')}>
                                <div className={bem.element('info-hint')}>
                                    <Hint
                                        text={__('The average price feed period calculated during 1000 blocks')}
                                    />
                                </div>
                                <span>{__('Price feed period')}</span>
                            </div>
                            <span>
                                {round(this.props.priceFeed, 2)}
                            </span>
                        </div>
                        <div className={bem.element('info-row')}>
                            <div className={bem.element('info-string', 'without-hint')}>
                                <span>{__('Number of oracles')}</span>
                            </div>
                            <span>{__('1')}</span>
                        </div>
                    </div>
                    <div className={bem.element('info-column')}>
                        <div className={bem.element('info-row')}>
                            <div className={bem.element('info-string')}>
                                <span>
                                    {__('Total issued {currency}', {
                                        currency: CurrencyEnum.getLabel(this.props.quoteCurrency)
                                    })}
                                </span>
                            </div>
                            <span>{this.props.neutrinoBalances && round(this.props.neutrinoBalances.totalUsed, 2)}</span>
                        </div>
                        <div className={bem.element('info-row')}>
                            <div className={bem.element('info-string')}>
                                <span>
                                    {__('Current WAVES / {currency} price', {
                                        currency: this.props.sourceCurrency.toUpperCase()
                                    })}
                                </span>
                            </div>
                            <span>{_get(this.props, 'neutrinoBalances.price')} {CurrencyEnum.getSign(this.props.sourceCurrency)}</span>
                        </div>
                    </div>
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
                        label={this.state.isWavesLeft ? __('Generate {currency} Neutrino', {
                            currency: CurrencyEnum.getLabel(this.props.quoteCurrency)
                        }) : __('Generate Waves')}
                        onClick={() => this.setState({step: 'details'})}
                    />
                    {this.renderWithdraw()}
                </div>
            </>
        );
    }

    renderWithdraw() {
        const neutrinoBlocked = _get(this.props, 'withdraw.neutrinoBlocked');
        const wavesBlocked = _get(this.props, 'withdraw.wavesBlocked');
        const height = _get(this.props, 'withdraw.height');
        const unblockBlock = _get(this.props, 'withdraw.unblockBlock');
        const countBlock = (unblockBlock - height) > 0 ? unblockBlock - height : 0;

        return (
            <div className={bem.element('withdraw')}>
                <div className={bem.element('withdraw-info')}>
                    <div className={bem.element('withdraw-hint')}>
                        <Hint text={__('Assets locked on the smart contract which will become available for withdrawal after {count-blocks} blocks (~{count-minutes} minutes)', {
                            'count-blocks': countBlock,
                            'count-minutes': countBlock, // 1block = 1min
                        })}/>
                    </div>
                    {__('Neutrino locked: {neutrino} | Waves locked: {waves}', {
                        neutrino: neutrinoBlocked && neutrinoBlocked.toFixed(2) || 0,
                        waves: wavesBlocked && wavesBlocked.toFixed(2) || 0,
                    })}
                </div>
                <Button
                    disabled={(!neutrinoBlocked && !wavesBlocked) || height < unblockBlock}
                    className={bem.element('withdraw-button')}
                    label={__('Withdraw')}
                    onClick={this._withdraw}
                />
            </div>
        );
    }

    renderDetailsStep() {
        return (
            <>
                <div className={bem.element('details')}>
                    <div className={bem.element('details-item')}>
                        <span className={bem.element('details-label')}>
                            {__('Collateralize & generation USDN')}
                        </span>
                        <div className={bem.element('details-inner', 'generation')}>
                            <div className={bem.element('values')}>
                                <span className={bem.element('value-title')}>
                                    {__('Collateral')}:
                                </span>
                                <div className={bem.element('value-item')}>
                                    <span className={bem.element('value-number')}>
                                        {_get(this.props.formValues, this.state.isWavesLeft ? 'waves' : 'neutrino')}
                                    </span>
                                    <span className={bem(bem.element('value-icon'), `Icon ${this.state.isWavesLeft
                                        ? CurrencyEnum.getIconClass(CurrencyEnum.WAVES)
                                        : CurrencyEnum.getIconClass(CurrencyEnum.USD_N)}`)}
                                    />
                                    <span className={bem.element('value-name')}>
                                        {this.state.isWavesLeft
                                            ? CurrencyEnum.getLabel(CurrencyEnum.WAVES)
                                            : CurrencyEnum.getLabel(this.props.quoteCurrency)
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className={bem.element('values')}>
                                <span className={bem.element('value-title')}>
                                    {__('Generate')}:
                                </span>
                                <div className={bem.element('value-item')}>
                                    <span className={bem.element('value-number')}>
                                        {_get(this.props.formValues, this.state.isWavesLeft ? 'neutrino' : 'waves')}
                                    </span>
                                    <span className={bem(bem.element('value-icon'), `Icon ${this.state.isWavesLeft
                                        ? CurrencyEnum.getIconClass(CurrencyEnum.USD_N)
                                        : CurrencyEnum.getIconClass(CurrencyEnum.WAVES)}`)}
                                    />
                                    <span className={bem.element('value-name')}>
                                        {this.state.isWavesLeft
                                            ? CurrencyEnum.getLabel(this.props.quoteCurrency)
                                            : CurrencyEnum.getLabel(CurrencyEnum.WAVES)
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CheckboxField
                        className={bem.element('terms-checkbox')}
                        label={<span>{__('I have read and accept the')} <a href='javascript:void(0)'>{__('Terms of Service')}</a></span>}
                        attribute={'terms'}
                    />
                    <div className={bem.element('details-actions')}>
                        <Button
                            color={'secondary'}
                            className={bem.element('back-button')}
                            label={__('Go back')}
                            onClick={() => this.setState({step: 'generation'})}
                        />
                        <Button
                            type={'submit'}
                            className={bem.element('finalize-button')}
                            disabled={!_get(this.props.formValues, 'terms')}
                            label={__('Finalize and create CDP')}
                        />
                    </div>
                </div>
            </>
        );
    }

    _refreshAmount(props, isRefreshToAmount = false) {
        props = props || this.props;

        if (this._isProgramChange) {
            this._isProgramChange = false;
            return;
        }
        this._isProgramChange = true;

        const rate = _get(props, 'neutrinoBalances.price');

        let amount = this._parseAmount(isRefreshToAmount
            ? _get(props.formValues, 'waves') * rate
            : _get(props.formValues, 'neutrino') / rate);


        this.props.dispatch(change(
            FORM_ID,
            isRefreshToAmount ? 'neutrino' : 'waves',
            this._toFixedSpecial(amount, 2)
        ));
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
        return str.replace('.', '').split('e+').reduce(function (p, b) {
            return p + new Array(b - p.length + 2).join(0);
        }) + '.' + new Array(n + 1).join(0);
    };

    _onSubmit(values) {
        this.setState({step: 'generation'});
        this.props.dispatch(reset(FORM_ID));


        // if (this.state.isWavesLeft) {
        //     this.setState({isSwapInProgress: true})
        // }

        return this.state.isWavesLeft
            ? dal.swapWavesToNeutrino(this.props.pairName, values.waves)
            : dal.swapNeutrinoToWaves(this.props.pairName, this.props.quoteCurrency, values.neutrino)
                // .then(() => {
                //     this.setState({step: 'generation'});
                //     this.props.dispatch(reset(FORM_ID));
                // });
    }

    _withdraw() {
        return dal.withdraw(this.props.pairName, this.props.user.address);
    }
}
