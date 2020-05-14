import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from 'yii-steroids/reducers/auth';
import { Translation } from 'react-i18next';

import { html } from 'components';
import CurrencyEnum from 'enums/CurrencyEnum';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';

import './SwapLoader.scss';

const bem = html.bem('SwapLoader');

@connect((state) => ({
    quoteCurrency: getQuoteCurrency(state),
    baseCurrency: getBaseCurrency(state),
    pairName: getPairName(state),
    user: getUser(state),
}))
export default class SwapLoader extends React.PureComponent {
    static propTypes = {
        neutrinoBlocked: PropTypes.number,
        wavesBlocked: PropTypes.number,
        unblockBlock: PropTypes.number,
        height: PropTypes.number,
    };

    constructor(props) {
        super(props);

        this.state = {
            startBlock: props.height,
        };
    }

    componentDidUpdate() {
        if (!this.state.startBlock && this.props.height) {
            this.setState({
                startBlock: this.props.height,
            });
        }
    }

    render() {
        const isCompleted = this.getScalePercent() === 100;

        return (
            <Translation>
                {(t) => (
                    <div className={bem.block()}>
                        <div className={bem.element('inner')}>
                            <div className={bem.element('content')}>
                                <span className={bem.element('title')}>{__('SWAP')}</span>
                                <div className={bem.element('icon')}>
                                    <span className={'Icon Icon__swap'} />
                                </div>
                                <div
                                    className={bem.element('direction', {
                                        'neutrino-to-waves': this.props.neutrinoBlocked > 0,
                                        'waves-to-neutrino': this.props.neutrinoBlocked > 0,
                                    })}
                                >
                                    <div className={bem.element('currency')}>
                                        <div className={bem.element('currency-icon')}>
                                            <span
                                                className={`Icon ${CurrencyEnum.getIconClass(
                                                    CurrencyEnum.WAVES
                                                )}`}
                                            />
                                        </div>
                                        <span className={bem.element('currency-name')}>
                                            {CurrencyEnum.getLabel(CurrencyEnum.WAVES)}
                                        </span>
                                    </div>
                                    <span className={bem.element('direction-union')}>
                                        {t('common.to.label')}
                                    </span>
                                    <div className={bem.element('currency')}>
                                        <div className={bem.element('currency-icon')}>
                                            <span
                                                className={`Icon ${CurrencyEnum.getIconClass(
                                                    this.props.quoteCurrency
                                                )}`}
                                            />
                                        </div>
                                        <span className={bem.element('currency-name')}>
                                            {CurrencyEnum.getLabel(this.props.quoteCurrency)}
                                        </span>
                                    </div>
                                </div>
                                <div className={bem.element('text')}>
                                    {t('common.swap_procedure_start.label')}
                                    <br />
                                    {`${t('common.swap_procedure_start.label')} ${
                                        Math.abs(this.props.unblockBlock - this.props.height) + 1} ${t('common.blocks.label')}`}
                                </div>
                            </div>
                            <div className={bem.element('footer')}>
                                <div className={bem.element('progress-block')}>
                                    <span className={bem.element('progress-status')}>
                                        {isCompleted ? t('common.completed.label') : t('common.in_progress.withDots')}
                                    </span>
                                    <div
                                        className={bem.element('progress-scale', {
                                            completed: isCompleted,
                                        })}
                                    >
                                        <div
                                            style={{ width: `${this.getScalePercent()}%` }}
                                            className={bem.element('progress-value')}
                                        />
                                    </div>
                                    <div className={bem.element('progress-hints')}>
                                        <span>{this.state.startBlock} {t('common.blocks.label')}</span>
                                        <span>{this.props.unblockBlock} {t('common.blocks.label')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        );
    }

    getScalePercent() {
        if (this.props.height >= this.props.unblockBlock) {
            return 100;
        }

        const total = this.props.unblockBlock - this.startBlock;
        const current = total - (this.props.unblockBlock - this.props.height);

        return 100 / (total / current);
    }
}
