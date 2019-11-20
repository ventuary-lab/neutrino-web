import React from 'react';
import { html } from 'components';
import AccountBalance from './../AccountBalance';
import AnnualYieldInfo from './../AnnualYieldInfo';

const bem = html.bem('StakingLeftPanel');

import './style.scss';

interface Props {}
interface State {}

const ListItem = ({ children }) => {
    return <div className={bem.element('list-item')}>{children}</div>;
};

class StakingLeftPanel extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={bem.block()}>
                <ListItem>
                    <AnnualYieldInfo />
                </ListItem>
                <ListItem>
                    <AccountBalance />
                </ListItem>
            </div>
        );
    }
}

export default StakingLeftPanel;
