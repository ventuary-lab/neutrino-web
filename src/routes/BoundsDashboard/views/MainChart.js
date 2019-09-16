import React from 'react';
import PropTypes from 'prop-types';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';

import {dal, html} from 'components';
import './MainChart.scss';
import CollectionEnum from 'enums/CollectionEnum';

const bem = html.bem('MainChart');

@dal.hoc2(
    props => ({
        url: `/api/v1/bonds/${props.pairName}/chart`,
        key: 'chartData',
        collection: CollectionEnum.BONDS_ORDERS,
    })
)
export default class MainChart extends React.PureComponent {

    static propTypes = {
        pairName: PropTypes.string,
        chartData: PropTypes.array,
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
                buttons: [
                    {
                        type: '100',
                        count: 1,
                        text: '100'
                    }, {
                        type: '500',
                        count: 2,
                        text: '500'
                    }, {
                        type: '1000',
                        count: 3,
                        text: '1K'
                    }, {
                        type: '5000',
                        count: 4,
                        text: '5K'
                    }, {
                        type: '10000',
                        count: 5,
                        text: '10K'
                    },
                ],
                buttonPosition: {
                    align: 'right',
                    x: -15,
                },
                buttonTheme: {
                    width: 32,
                    height: 28,
                    r: 4,
                    fill: {
                        linearGradient: { x1: 0, x2: 1, y1: 1, y2: 0 },
                        stops: [
                            [0, '#00ADFF'], // start
                            [0.4, '#3e3e79'], // middle
                            [1, '#3e3e79'] // end
                        ]
                    },
                    style: {
                        color: '#fff',
                        fontSize: '12px',
                        lineHeight: '16px',
                        fontWeight: 500,
                        fontFamily: 'Montserrat',
                        textAlign: 'center',
                    },
                    states: {
                        hover: {
                        },
                        select: {
                            fill: '#039',
                        }
                    }
                },
                labelStyle: {
                    visibility: 'hidden',
                },
                inputEnabled: false,
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
                type: 'datetime',
                lineWidth: 0.5,
                lineColor: '#CBCBDA',
                tickWidth: 0.5,
                tickColor: '#CBCBDA',
                showFirstLabel: false,
                showLastLabel: false,
                labels: {
                    format: '{value}',
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
        let chart = this._chart.current
            ? this._chart.current.getChart()
            : null;

        if (chart) {
            chart.series[0].setData(data);
        }
    }

}
