import React from 'react';
import ReactCharts from 'react-highcharts/ReactHighcharts.src';

import {html} from 'components';

import './LeasingChart.scss';

const bem = html.bem('LeasingChart');

export default class LeasingChart extends React.PureComponent {
    constructor(props) {
        super(props);
        this._chart = React.createRef();

        this._config = {
            chart: {
                type: 'column',
                backgroundColor: null,
                height: '60%',
                width: 420
            },
            title: {
                text: __('Cashout and Income'),
                style: {
                    color: '#ffffff',
                    fontSize: '14px',
                    fontFamily: 'Montserrat',
                },
                align: 'left'
            },
            xAxis: {
                lineColor: '#4A4A7F',
                tickWidth: 0,
                categories: ['425769', '425769', '425769', '425769', '425769', '425769'],
                labels: {
                    style: {
                        fontFamily: 'Roboto',
                        fontSize: '8px',
                        color: 'rgba(203, 203, 218, 0.62)'
                    }
                },
            },
            yAxis: {
                gridLineWidth: 0,
                lineWidth: 1,
                lineColor: '#4A4A7F',
                min: 0,
                title: {
                    text: null
                },
                stackLabels: {
                    enabled: false
                },
                labels: {
                    format: '{value}',
                    style: {
                        fontFamily: 'Roboto',
                        fontSize: '7px',
                        color: 'rgba(203, 203, 218, 0.62)'
                    },
                    step: 1
                }
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                floating: true,
                backgroundColor: null,
                shadow: false,
                itemStyle: {
                    color: '#ffffff',
                    fontSize: '12px',
                    fontFamily: 'Montserrat',
                    fontWeight: 300
                },
                symbolRadius: 0,
                symbolWidth: 10
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: __('Cashout'),
                borderColor: null,
                color: '#134EC8',
                data: [2500, 2700, 1600, 2400, 1200, 2000]
            }, {
                name: __('Income'),
                borderColor: null,
                color: '#00F59E',
                data: [2500, 2800, 1400, 2500, 1300, 2100]
            }],
            credits: false,
            tooltip: {
                backgroundColor: '#17183A',
                borderColor: '#494991',
                borderRadius: 7,
                padding: 10,
                headerFormat: '<span style="font-family: Roboto; color: rgba(203, 203, 218, 0.62);">{point.key}</span><br/>',
                shape: 'softRect',
                shadow: false,
                style: {
                    color: '#ffffff',
                    fontSize: '10px',
                    fontFamily: 'Montserrat'
                }
            }
        };
    }

    render() {
        return (
            <div className={bem.block()}>
                <ReactCharts ref={this._chart} config={this._config}/>
            </div>
        );
    }
}

