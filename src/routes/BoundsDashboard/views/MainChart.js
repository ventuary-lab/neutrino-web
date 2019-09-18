import React from 'react';
import PropTypes from 'prop-types';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import _orderBy from 'lodash/orderBy';

import {dal, html} from 'components';
import './MainChart.scss';
import CollectionEnum from 'enums/CollectionEnum';
import ChartBlockAmountEnum from '../../../enums/ChartBlockAmountEnum';

const bem = html.bem('MainChart');

@dal.hoc(
    props => ({
        url: `/api/v1/bonds/${props.pairName}/chart/${props.blockAmount || 100}`,
        key: 'chartData',
        collection: CollectionEnum.BONDS_ORDERS,
    })
)
export default class MainChart extends React.PureComponent {

    static propTypes = {
        pairName: PropTypes.string,
        chartData: PropTypes.array,
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
            colors: [''],
            chart: {
                backgroundColor: null,
                height: 350,
            },
            navigator: {
                enabled: false,
            },
            rangeSelector: {
                enabled: false,
            },
            title: {
                align: 'left',
                text: 'Discount %',
                y: 40,
                style: {
                    color: '#fff',
                    fontSize: '14px',
                },
            },
            legend: {
                enabled: false,
            },
            tooltip: {
                backgroundColor: '#17183A',
                borderWidth: 1,
                borderColor: '#494991',
                borderRadius: 7,
                shadow: false,
                crosshairs: false,
                style: {
                    color: '#fff'
                }
            },
            xAxis: {
                lineWidth: 0.5,
                lineColor: '#CBCBDA',
                tickWidth: 0.5,
                tickColor: '#CBCBDA',
                labels: {
                    style: {
                        fontFamily: 'Roboto',
                        color: '#CBCBDA',
                        fontSize: '10px',
                    },
                },
            },
            yAxis:
            {
                opposite: false,
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                labels: {
                    format: '{value}%',
                    style: {
                        fontFamily: 'Roboto',
                        color: '#CBCBDA',
                        fontSize: '10px',
                    },
                },
            },
            series: [{
                name: 'Percent',
                type: 'areaspline',
                data: [],
                tooltip: {
                    valueDecimals: 2
                },
                fillColor: {
                    linearGradient: { x1: 0, x2: 0.4, y1: 1, y2: 0 },
                    stops: [
                        [0, 'rgba(110,54,77)'], // start
                        [1, 'rgba(41,77,167)'], // end
                    ]
                },
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
                <div className={bem.element('chart-controls-line')}>
                    <div className={bem.element('chart-interval-picker')}>
                        {ChartBlockAmountEnum.getKeys().map((id) => {
                            return (
                                <a
                                    href='javascript:void(0)'
                                    key={id}
                                    className={bem.element('chart-block-amount-picker', {
                                        selected: this.props.blockAmount === id,
                                    })}
                                    onClick={() => {
                                        this.props.updateApiConfig({
                                            blockAmount: id,
                                        });
                                    }}
                                >
                                    {ChartBlockAmountEnum.getLabels()[id]}
                                </a>
                            );
                        })}
                    </div>
                </div>
                <ReactHighstock
                    isPureConfig
                    ref={this._chart}
                    config={this._config}
                    backgroundColor='#1d1d45'
            />
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
