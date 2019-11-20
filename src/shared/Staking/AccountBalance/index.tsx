import React from 'react';
import { html } from 'components';

import './style.scss';

const bem = html.bem('AccountBalance');

interface Props {}
interface State {}

class AccountBalance extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={bem.block()}>
                <h3>Account balance</h3>
                <div>
                    <span>100</span>
                    <span>USD-N</span>
                </div>
                <div>
                    <button>Buy</button>
                </div>
            </div>
        );
    }
}

export default AccountBalance;
