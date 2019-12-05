import React from 'react';
import { html } from 'components';
import LeftPanel from './../LeftPanel';

import './style.scss';

const bem = html.bem('StakingDashboard');

interface Props {}
interface State {}

class StakingDashboard extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={bem.block()}>
                <LeftPanel />
            </div>
        );
    }
}

export default StakingDashboard;
