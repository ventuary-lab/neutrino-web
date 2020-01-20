// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getFormValues } from 'redux-form';
// import { getUser } from 'yii-steroids/reducers/auth';

// import { html, dal, store } from 'components';
// import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';
// // import CollectionEnum from 'enums/CollectionEnum';

// import StakingLeftPanel from 'shared/Staking/LeftPanel';
// import StakingRightPanel from 'shared/Staking/RightPanel';

// import './RpdDashboard.scss';

// const bem = html.bem('RpdDashboard');
// const FORM_ID = 'RpdDashboard';

// // @dal.hoc(props => [
// //     {
// //         url: `/api/v1/rpd-user-balance/${props.pairName}/${_get(props, 'user.address')}`,
// //         key: 'rpdUserBalance',
// //         collection: CollectionEnum.RPD_USER_BALANCES,
// //     }
// // ])

// @connect(state => ({
//     quoteCurrency: getQuoteCurrency(state),
//     baseCurrency: getBaseCurrency(state),
//     pairName: getPairName(state),
//     formValues: getFormValues(FORM_ID)(state),
//     user: getUser(state),
// }))
// export default class RpdDashboard extends React.PureComponent {
//     static propTypes = {
//         baseCurrency: PropTypes.string,
//         quoteCurrency: PropTypes.string,
//         rpdUserBalance: PropTypes.shape({
//             neutrino: PropTypes.shape({
//                 balance: PropTypes.number,
//                 id: PropTypes.string,
//             }),
//             bond: PropTypes.shape({
//                 balance: PropTypes.number,
//                 id: PropTypes.string,
//             }),
//         }),
//     };

//     constructor(props) {
//         super(props);

//         this.state = {
//             rpdUserBalance: {
//                 neutrino: { balance: 0, id: '0' },
//                 bond: { balance: 0, id: '0' },
//             },
//         };
//     }

//     // componentWillReceiveProps(nextProps) {
//     //     if (this.props.quoteCurrency !== nextProps.quoteCurrency) {
//     //         store.dispatch(change(FORM_ID, 'currency', nextProps.quoteCurrency));
//     //     }
//     // }

//     render() {
//         const rpdNeutrinoBalance = _get(this.props, 'rpdUserBalance.neutrino.balance', 0);

//         return (
//             <div className={bem.block()}>
//                 <div className={bem.element('column', 'left')}>
//                     <StakingLeftPanel
//                         stakingBalance={rpdNeutrinoBalance.toFixed(2)}
//                         pairName={this.props.pairName}
//                     />
//                 </div>
//                 <div className={bem.element('column', 'right')}>
//                     <StakingRightPanel />
//                 </div>
//             </div>
//         );
//     }
// }
