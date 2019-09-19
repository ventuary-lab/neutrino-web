import React from 'react';
import PropTypes from 'prop-types';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';

import {html, http} from 'components';
import './MainChart.scss';

const bem = html.bem('MainChart');

export default class MainChart extends React.PureComponent {

    constructor() {
        super(...arguments);

        this._chart = React.createRef();

        this._config = {
            scrollbar: {
                enabled: false
            },
            colors: [''],
            chart: {
                backgroundColor: null,
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
            xAxis: {
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
                crosshair: {
                    width: 0,
                },
            },
            yAxis: {
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
                type: 'area',
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
                marker: {
                    fillColor: '#1D1E46',
                    lineColor: '#00F5FF',
                    width: '20px',
                }
            }],
            tooltip: {
                headerFormat: '<span style="font-family: Roboto; color: rgba(203, 203, 218, 0.62);">{point.key}</span><br/>',
                backgroundColor: '#17183A',
                borderColor: '#494991',
                padding: 10,
                shadow: false,
                split: false,
                shape: 'callout',
                borderRadius: 7,
                style: {
                    color: '#ffffff',
                    fontSize: '10px',
                    fontFamily: 'Montserrat'
                }
            },
            credits: false,
        };
    }


    componentDidMount() {
        this._refresh();
        this._timer = setInterval(() => this._refresh(), 60000);


        //custom shape for tooltip
        this._chart.current.Highcharts.SVGRenderer.prototype.symbols.softRect = function (x, y, w, h) {
            return ['M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H133C136.59 0.5 139.5 3.41015 139.5 7V41C139.5 44.5899 136.59 47.5 133 47.5H7C3.41015 47.5 0.5 44.5899 0.5 41V7Z'];
        };

    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    render() {

        return (
            <div className={bem.block()}>
                <ReactHighstock
                    isPureConfig
                    ref={this._chart}
                    config={this._config}
                    backgroundColor={'#1d1d45'}
            />
            </div>
        );
    }

    _refresh() {
        let data = this._refreshChartData();
        let chart = this._chart.current
            ? this._chart.current.getChart()
            : null;

        if (chart) {
            chart.series[0].setData(data);
        }
    }

    _refreshChartData() {
        return [
            [
                671128,
                26
            ],
            [
                671129,
                29
            ],
            [
                671130,
                37
            ],
            [
                671131,
                32
            ],
            [
                671132,
                35
            ],
            [
                671133,
                22
            ],
            [
                671134,
                15
            ],
            [
                671135,
                30
            ],
            [
                671136,
                7
            ],
            [
                671137,
                10
            ],
            [
                671138,
                12
            ],

        ]
    }
}