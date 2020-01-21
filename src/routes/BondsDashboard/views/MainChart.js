// import React from 'react';
// import PropTypes from 'prop-types';
// import _orderBy from 'lodash/orderBy';
// import ReactHighstock from 'react-highcharts/ReactHighstock.src';

// import {dal, html} from 'components';
// import CollectionEnum from 'enums/CollectionEnum';
// import MainChartBlockAmountEnum from 'enums/MainChartBlockAmountEnum';

// import './MainChart.scss';

// const bem = html.bem('MainChart');

// @dal.hoc(
//     props => [
//         {
//             url: `/api/v1/bonds/${props.pairName}/chart/${props.blockAmount || 500}`,
//             key: 'chartData',
//             collection: CollectionEnum.BONDS_ORDERS_HISTORY,
//         },
//     ]
// )
// export default class MainChart extends React.PureComponent {

//     static propTypes = {
//         pairName: PropTypes.string,
//         chartData: PropTypes.array,
//         updateApiConfig: PropTypes.func,
//     };

//     constructor() {
//         super(...arguments);

//         this._chart = React.createRef();

//         this._config = {
//             scrollbar: {
//                 enabled: false
//             },
//             credits: {
//                 enabled: false
//             },
//             colors: [''],
//             chart: {
//                 backgroundColor: null,
//                 height: 350,
//             },
//             navigator: {
//                 enabled: false,
//             },
//             rangeSelector: {
//                 enabled: false,
//             },
//             legend: {
//                 enabled: false,
//             },
//             xAxis: {
//                 lineWidth: 0.5,
//                 lineColor: '#CBCBDA',
//                 tickWidth: 0.5,
//                 tickColor: '#CBCBDA',
//                 labels: {
//                     style: {
//                         fontFamily: 'Roboto',
//                         color: '#CBCBDA',
//                         fontSize: '10px',
//                     },
//                 },
//             },
//             yAxis: {
//                 opposite: false,
//                 gridLineWidth: 0,
//                 minorGridLineWidth: 0,
//                 labels: {
//                     format: '{value}%',
//                     style: {
//                         fontFamily: 'Roboto',
//                         color: '#CBCBDA',
//                         fontSize: '10px',
//                     },
//                 },
//             },
//             series: [{
//                 name: 'Percent',
//                 type: 'areaspline',
//                 data: [],
//                 tooltip: {
//                     valueDecimals: 2
//                 },
//                 fillColor: {
//                     linearGradient: { x1: 0, x2: 0.4, y1: 1, y2: 0 },
//                     stops: [
//                         [0, 'rgba(110,54,77)'], // start
//                         [1, 'rgba(41,77,167)'], // end
//                     ]
//                 },
//                 marker: {
//                     fillColor: '#1D1E46',
//                     lineColor: '#00F5FF',
//                     width: '20px',
//                 }
//             }],
//             tooltip: {
//                 headerFormat: '<span style="font-family: Roboto; color: rgba(203, 203, 218, 0.62);">{point.key}</span><br/>',
//                 backgroundColor: '#17183A',
//                 borderColor: '#494991',
//                 shadow: false,
//                 split: false,
//                 shape: 'softRect',
//                 borderRadius: 7,
//                 style: {
//                     color: '#ffffff',
//                     fontSize: '10px',
//                     fontFamily: 'Montserrat'
//                 }
//             },
//         };
//     }


//     componentDidMount() {
//         //custom shape for tooltip
//         const Highcharts = this._chart.current.Highcharts;
//         Highcharts.SVGRenderer.prototype.symbols.softRect = function (x, y, w, h) {
//             const borderRadius = 7;

//             const initial = `M${x+6},${y}`;
//             const rightTopPoint = `h${w-13}`;
//             const rightBottomPoint = `v${h-14}`;
//             const leftBottomPoint = `h${-(w-13)}`;
//             const leftTopPoint = `v${-(h-14)}`;

//             const rightTopCorner = `a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${borderRadius}`;
//             const rightBottomCorner = `a${borderRadius},${borderRadius} 0 0 1 ${-borderRadius},${borderRadius}`;
//             const leftBottomCorner = `a${borderRadius},${borderRadius} 0 0 1 ${-borderRadius},${-borderRadius}`;
//             const leftTopCorner = `a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${-borderRadius}`;

//             return [initial, rightTopPoint, rightTopCorner, rightBottomPoint, rightBottomCorner, leftBottomPoint, leftBottomCorner, leftTopPoint, leftTopCorner, 'z'];
//         };
//     }

//     componentWillReceiveProps(nextProps) {
//         if (this.props.chartData !== nextProps.chartData) {
//             this._refresh(nextProps.chartData);
//         }
//     }

//     render() {

//         return (
//             <div className={bem.block()}>
//                 <div className={bem.element('chart-controls-line')}>
//                     <div className={bem.element('chart-interval-picker')}>
//                         {MainChartBlockAmountEnum.getKeys().map((id) => {
//                             return (
//                                 <button
//                                     type={'button'}
//                                     key={id}
//                                     className={bem.element('chart-block-amount-picker', {
//                                         selected: (this.props.blockAmount || 500) === id,
//                                     })}
//                                     onClick={() => {
//                                         this.props.updateApiConfig({
//                                             blockAmount: id,
//                                         });
//                                     }}
//                                 >
//                                     {MainChartBlockAmountEnum.getLabels()[id]}
//                                 </button>
//                             );
//                         })}
//                     </div>
//                 </div>
//                 <ReactHighstock
//                     isPureConfig
//                     ref={this._chart}
//                     config={this._config}
//                     backgroundColor='#1d1d45'
//                 />
//             </div>
//         );
//     }

//     _refresh(data) {
//         if (this._chart.current) {
//             data = _orderBy(data, 0, 'asc');
//             this._chart.current.getChart().series[0].setData(data);
//         }
//     }

// }
