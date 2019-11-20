import React from 'react';
import { html } from 'components';
import Button from 'yii-steroids/ui/form/Button';

import './style.scss';

const bem = html.bem('StakingBalance');

interface Props {}
interface State {}

class StakingBalance extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Staking Balance</h3>
                <div className={bem.element('main')}>
                    <div className={bem.element('balance')}>
                        <span>80</span>
                        <span>USD-N</span>
                    </div>
                    <div className={bem.element('action-buttons')}>
                        <Button type={'submit'} block label={'Cancel'} />
                        <Button type={'submit'} block label={'Increase'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default StakingBalance;
