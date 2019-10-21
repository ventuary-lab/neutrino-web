import React from 'react';
import LeasingTableRow from './LeasingTableRow';
import Button from 'yii-steroids/ui/form/Button';

import {html} from 'components';

import './LeasingTable.scss';

const bem = html.bem('LeasingTable');


export default class LeasingTable extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderSortButtons() {
        return (
            <div className={bem.element('sort-buttons')}>
                <a className={bem.element('sort-button', {
                    asc: true,
                    active: false,
                })}/>
                <a className={bem.element('sort-button', {
                    desc: true,
                    active: true,
                })}/>
            </div>
        );
    }

    render() {

        const { leasers } = this.props;

        const rows = leasers.map((leaser, index) => <LeasingTableRow key={leaser.id} leaser={leaser} index={index} />);

        return (
            <div className={bem.block()}>
                <div className={bem.element('table')}>
                    <div className={bem.element('thead')}>
                        <div className={bem.element('tr')}>
                            <div className={bem.element('th', 'num')}></div>
                            <div className={bem.element('th', 'favorites')}></div>
                            <div className={bem.element('th', 'address')}>{__('Address')}</div>
                            <div className={bem.element('th', 'site')}>{__('Website')}</div>
                            <div className={bem.element('th', 'mining')}>
                                {this.renderSortButtons('mining share')}
                                <span>
                                    {__('Mining Share')}
                                </span>
                            </div>
                            <div className={bem.element('th', 'payouts')}>
                                {this.renderSortButtons('mining share')}
                                <span>
                                    {__('Leasers payouts')}
                                </span>
                            </div>
                            <div className={bem.element('th', 'leasing')}>
                                <div className={bem.element('my-leasing')}>
                                    {this.renderSortButtons('mining share')}
                                    <span>
                                        {__('My leasing')}
                                    </span>
                                </div>
                                <div className={bem.element('my-favorites')}>
                                    <span>
                                        {__('My favorites')}
                                    </span>
                                    <div className={bem.element('favorites-counter')}>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={bem.element('tbody')}>
                        {rows}
                    </div>
                    <div className={bem.element('tfoot')}>
                        <span className={bem.element('text')} >
                            {__('USD-Neutrino and USD-Bonds holders are able to change the leassing configuration for collateralized balance in WAVES')}
                        </span>
                        <Button
                            type={'submit'}
                            className={bem.element('edit-button')}
                            label={__('Edit')}
                            color={'secondary'}
                        />
                        <Button
                            type={'submit'}
                            className={bem.element('submit-button')}
                            label={__('Apply')}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
