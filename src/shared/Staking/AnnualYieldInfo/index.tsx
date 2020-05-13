import React from 'react';
import _ from 'lodash';
import { html } from 'components';
import axios, { AxiosResponse } from 'axios';

const bem = html.bem('AnnualYieldInfo');

import './style.scss';

interface Props {}
interface State {
    yieldPercent: number;
}

const ANNUAL_YIELD_DEFAULT = 53.7;
const ANNUAL_YIELD_LS_KEY = 'staking_annual_yield';

class AnnualYieldInfo extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            yieldPercent: Number(localStorage.getItem(ANNUAL_YIELD_LS_KEY)) || ANNUAL_YIELD_DEFAULT,
        };
    }

    async updateYieldPercent() {
        const res = (await axios.get('/api/explorer/get_annual_yield')) as AxiosResponse<number>;

        
        const yieldPercent = _.round(res.data, 2);
        localStorage.setItem(ANNUAL_YIELD_LS_KEY, String(yieldPercent));

        this.setState({ yieldPercent });
    }

    async componentDidMount() {
        await this.updateYieldPercent();
    }

    render() {
        const { yieldPercent } = this.state;

        return (
            <div className={bem.block()}>
                <span>Info</span>
                <div className={bem.element('main')}>
                    <div className={bem.element('yield-percent')}>
                        <span>{yieldPercent}</span>
                        <span>%</span>
                    </div>
                    <span className={bem.element('title')}>Average Estimated Annual Yield</span>
                    <span className={bem.element('body')}>
                        Estimated Annual Yield is depending on waves token price, can be 1%-100%
                        based on market situation
                    </span>
                </div>
            </div>
        );
    }
}

export default AnnualYieldInfo;
