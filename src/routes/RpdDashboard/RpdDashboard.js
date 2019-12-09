import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFormValues, change } from 'redux-form';
import _get from 'lodash-es/get';
// import Form from 'yii-steroids/ui/form/Form';
// import NumberField from 'yii-steroids/ui/form/NumberField';
// import Button from 'yii-steroids/ui/form/Button';
// import Nav from 'yii-steroids/ui/nav/Nav';
import { getUser } from 'yii-steroids/reducers/auth';

import { html, dal, store } from 'components';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';
import CollectionEnum from 'enums/CollectionEnum';
// import CurrencyEnum from 'enums/CurrencyEnum';
// import Hint from 'shared/Hint';
// import ChecksList from './views/ChecksList';
import StakingLeftPanel from 'shared/Staking/LeftPanel';
import StakingRightPanel from 'shared/Staking/RightPanel';

import './RpdDashboard.scss';

const bem = html.bem('RpdDashboard');
const FORM_ID = 'RpdDashboard';

@connect(state => ({
    quoteCurrency: getQuoteCurrency(state),
    baseCurrency: getBaseCurrency(state),
    pairName: getPairName(state),
    formValues: getFormValues(FORM_ID)(state),
    user: getUser(state),
}))
@dal.hoc(props => [
    {
        url: `/api/v1/rpd-balance/${props.pairName}`,
        key: 'rpdBalance',
        collection: CollectionEnum.RPD_BALANCES,
    },
    {
        url: `/api/v1/rpd-user-balance/${props.pairName}/${_get(props, 'user.address')}`,
        key: 'rpdUserBalance',
        collection: CollectionEnum.RPD_USER_BALANCES,
    },
    {
        url: `/api/v1/rpd-checks/${props.pairName}/${_get(props, 'user.address')}`,
        key: 'rpdChecks',
        collection: [CollectionEnum.RPD_NEXT_INDEX, CollectionEnum.RPD_IS_CLAIMED],
    },
])
export default class RpdDashboard extends React.PureComponent {
    static propTypes = {
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        rpdUserBalance: PropTypes.shape({
            neutrino: PropTypes.shape({
                balance: PropTypes.number,
                id: PropTypes.string,
            }),
            bond: PropTypes.shape({
                balance: PropTypes.number,
                id: PropTypes.string,
            }),
        }),
        rpdBalance: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                balance: PropTypes.number,
            })
        ),
        rpdChecks: PropTypes.arrayOf(
            PropTypes.shape({
                index: PropTypes.number,
                profit: PropTypes.number,
            })
        ),
    };

    constructor() {
        super(...arguments);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.quoteCurrency !== nextProps.quoteCurrency) {
            store.dispatch(change(FORM_ID, 'currency', nextProps.quoteCurrency));
        }
    }

    render() {
        const rpdNeutrinoBalance = _get(this.props, 'rpdUserBalance.neutrino.balance', 0);
        // const rpdBondsBalance = _get(this.props, 'rpdUserBalance.bond.balance', 0);
        // const rpdTotalBalance = _sumBy(_get(this.props, 'rpdBalance'), 'balance');

        // const share = rpdTotalBalance
        //     ? (rpdNeutrinoBalance + rpdBondsBalance) / rpdTotalBalance * 100
        //     : 0;

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <StakingLeftPanel
                        stakingBalance={rpdNeutrinoBalance.toFixed(2)}
                        pairName={this.props.pairName}
                    />
                </div>
                <div className={bem.element('column', 'right')}>
                    <StakingRightPanel />
                </div>
            </div>
        );
    }
}
