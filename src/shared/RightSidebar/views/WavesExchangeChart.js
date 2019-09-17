import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import _orderBy from 'lodash/orderBy';

import {dal, html} from 'components';
import './WavesExchangeChart.scss';
import CollectionEnum from 'enums/CollectionEnum';
import {getPairName, getPrices, getWavesExchanges} from 'reducers/currency';
import CurrencyEnum from 'enums/CurrencyEnum';
import PairsEnum from 'enums/PairsEnum';

const bem = html.bem('WavesExchangeChart');

@connect(
    state => {
        const pairName = getPairName(state);
        return {
            prices: pairName ? getWavesExchanges(state, PairsEnum.getSource(pairName)) : null,
        };
    }
)
export default class WavesExchangeChart extends React.PureComponent {

    static propTypes = {
        pairName: PropTypes.string,
        prices: PropTypes.array,
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
                height: 120,
            },
            navigator: {
                enabled: false,
            },
            rangeSelector: {
                buttons: [
                    /*{
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
                    },*/
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
                events: {
                    afterSetExtremes: e => {
                        //return this.props.prices;
                    }
                },
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
                name: 'USD',
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

    componentDidMount() {
        this._refresh(this.props.prices);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.prices !== nextProps.prices) {
            this._refresh(nextProps.prices);
        }
    }

    render() {
        if (!this.props.prices) {
            return null;
        }

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

    _refresh(prices) {
        if (this._chart.current) {
            let data = _orderBy(prices, 'timestamp', 'asc').map(item => ([
                item['timestamp'],
                item['price'],
            ]));
            this._chart.current.getChart().series[0].setData(data);
        }
    }

}
