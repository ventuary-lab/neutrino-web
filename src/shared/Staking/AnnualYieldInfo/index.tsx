import React from 'react';
import _ from 'lodash';
import { html } from 'components';
import axios, { AxiosResponse } from 'axios';
import { Translation } from 'react-i18next';

const bem = html.bem('AnnualYieldInfo');

import './style.scss';

interface Props {}
interface State {
    yieldPercent: number;
}

class AnnualYieldInfo extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            yieldPercent: 6.85,
        };
    }

    async updateYieldPercent() {
        const res = (await axios.get('/api/explorer/get_annual_yield')) as AxiosResponse<number>;

        if (res.statusText === 'OK') {
            this.setState({ yieldPercent: _.round(res.data, 2) });
        }
    }

    async componentDidMount() {
        await this.updateYieldPercent();
    }

    render() {
        const { yieldPercent } = this.state;

        return (
            <Translation>
                {t => (
                    <div className={bem.block()}>
                        <span>{t('common.info.label')}</span>
                        <div className={bem.element('main')}>
                            <div className={bem.element('yield-percent')}>
                                <span>{yieldPercent}</span>
                                <span>%</span>
                            </div>
                            <span className={bem.element('title')}>
                                {t('staking_dashboard.aeay.label')}
                            </span>
                            <span className={bem.element('body')}>
                                {t('staking_dashboard.annual_yield_info.label')}
                            </span>
                        </div>
                    </div>
                )}
            </Translation>
        );
    }
}

export default AnnualYieldInfo;
