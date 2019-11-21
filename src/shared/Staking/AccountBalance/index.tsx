import React from 'react';
import { html } from 'components';
import Button from 'yii-steroids/ui/form/Button';

import './style.scss';

const bem = html.bem('StakingAccountBalance');

interface Props {}
// interface State {}

class AccountBalance extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={bem.block()}>
                <span>Account balance</span>
                <div className={bem.element('main')}>
                    <div className={bem.element('balance')}>
                        <span>100</span>
                        <span>USD-N</span>
                    </div>
                    <div className={bem.element('buy-btn')}>
                        <Button
                            type={'submit'}
                            block
                            label={'Buy'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountBalance;
