import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import {getSourceCurrency} from 'reducers/currency';
import _orderBy from 'lodash-es/orderBy';

import {dal, html} from 'components';
import CollectionEnum from 'enums/CollectionEnum';
import WavesExchangePeriodEnum from 'enums/WavesExchangePeriodEnum';
import './WavesExchangeChart.scss';

const bem = html.bem('WavesExchangeChart');

@connect(
    state => ({
        sourceCurrency: getSourceCurrency(state),
    })
)
@dal.hoc(
    props => ({
        url: `/api/v1/waves-exchange/${props.sourceCurrency}/${props.period || WavesExchangePeriodEnum.PERIOD_8H}`,
        key: 'chartData',
        collection: CollectionEnum.NEUTRINO_PRICES,
    })
)
export default class WavesExchangeChart extends React.PureComponent {

    static propTypes = {
        pairName: PropTypes.string,
        period: PropTypes.string,
        updateApiConfig: PropTypes.func,
    };

    constructor() {
        super(...arguments);

        this._chart = React.createRef();

        this._config = {

            scrollbar: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            navigator: {
                enabled: false,
            },
            legend: {
                enabled: false,
            },
            rangeSelector: {
                enabled: false,
            },
            title: {
                text: ''
            },
            chart: {
                backgroundColor: null,
                height: 200,
            },
            plotOptions: {
                candlestick: {
                    lineWidth: 2,
                    lineColor: '#FF6D6D',
                    upLineColor: '#01E675',
                    color: '#FFF',
                },
                column: {
                    color: '#305442'
                }
            },
            xAxis: {
                lineColor: '#CBCBDA',
                lineWidth: 1,
            },
            yAxis: {
                opposite: false,
                lineColor: '#CBCBDA',
                lineWidth: 1,
                gridLineWidth: 0.5,
                gridLineColor: '#DFDFE8',
                gridLineDashStyle: 'dash',
                minorGridLineWidth: 0,
                labels: {
                    format: '$ {value}',
                    style: {
                        fontFamily: 'Roboto',
                        color: '#DFDFE8',
                        fontSize: '8px',
                    },
                },
            },

            series: [{
                type: 'candlestick',
                name: 'Exchange',
                data: [],
            }],
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.chartData !== nextProps.chartData) {
            this._refresh(nextProps.chartData);
        }
    }

    render() {
        return (
            <div className={bem.block()}>
                <ReactHighstock
                    isPureConfig
                    ref={this._chart}
                    config={this._config}
                    backgroundColor='#1d1d45'
                />
                <div className={bem.element('chart-controls-line')}>
                    <div className={bem.element('chart-interval-picker')}>
                        {WavesExchangePeriodEnum.getKeys().map((id) => {
                            return (
                                <button
                                    type={'button'}
                                    key={id}
                                    className={bem.element('chart-block-amount-picker', {
                                        selected: (this.props.period || WavesExchangePeriodEnum.PERIOD_8H) === id,
                                    })}
                                    onClick={() => {
                                        this.props.updateApiConfig({
                                            period: id,
                                        });
                                    }}
                                >
                                    {WavesExchangePeriodEnum.getLabels()[id]}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    _refresh(data) {
        if (this._chart.current) {
            data = _orderBy(data, 0, 'asc');
            this._chart.current.getChart().series[0].setData(data);
        }
    }

}
