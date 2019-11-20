import React from 'react';
import { html } from 'components';

import './style.scss';

const bem = html.bem('StakingRightPanel');

interface Props {}
interface State {}

class RightPanel extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <div className={bem.block()}>RightPanel</div>;
    }
}

export default RightPanel;
