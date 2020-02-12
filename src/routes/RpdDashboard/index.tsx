import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import { getFormValues } from 'redux-form';
import { getUser } from 'yii-steroids/reducers/auth';

import { html, dal, store } from 'components';
import { getBaseCurrency, getPairName, getQuoteCurrency } from 'reducers/currency';

import StakingLeftPanel from 'shared/Staking/LeftPanel';
import StakingRightPanel from 'shared/Staking/RightPanel';
import { ILongPullingComponent } from 'ui/global/types';
import { Props, State, StakingBalanceDTO } from './types';

import './RpdDashboard.scss';

const bem = html.bem('RpdDashboard');
const FORM_ID = 'RpdDashboard';

class StakingDashboard extends React.Component<Props, State> implements ILongPullingComponent {
    _updateInterval;
    _updateTimeout;

    constructor(props) {
        super(props);

        this._updateListener = this._updateListener.bind(this);
        this._updateInterval = null;
        this._updateTimeout = 4000;

        this.state = {
            stakingBalance: {
                neutrino: { balance: 0, id: '0' },
                bond: { balance: 0, id: '0' },
            },
        };
    }

    componentWillMount() {
        this.startListening();
    }

    componentWillUnmount() {
        this.stopListening();
    }

    async _updateListener() {
        const { user } = this.props;
        if (!user) {
            return;
        }

        const { address } = user;

        if (!address) {
            return;
        }

        const stakingUserDataResponse = await axios.get<StakingBalanceDTO>(
            `/api/v1/rpd-user-balance/usd-nb_usd-n/${address}`
        );

        if (stakingUserDataResponse.status === 200) {
            this.setState({ stakingBalance: stakingUserDataResponse.data });
        }
    }

    startListening() {
        this._updateInterval = setInterval(this._updateListener, this._updateTimeout);
    }

    stopListening() {
        clearInterval(this._updateInterval);
    }

    render() {
        const { pairName } = this.props;
        const { stakingBalance } = this.state;
        const neutrinoBalance = _.get(stakingBalance, 'neutrino.balance', 0);

        return (
            <div className={bem.block()}>
                <div className={bem.element('column', 'left')}>
                    <StakingLeftPanel
                        stakingBalance={neutrinoBalance}
                        pairName={pairName}
                    />
                </div>
                <div className={bem.element('column', 'right')}>
                    <StakingRightPanel />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    quoteCurrency: getQuoteCurrency(state),
    baseCurrency: getBaseCurrency(state),
    pairName: getPairName(state),
    formValues: getFormValues(FORM_ID)(state),
    user: getUser(state),
}))(StakingDashboard);
