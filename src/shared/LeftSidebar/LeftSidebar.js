import React from 'react';
import {connect} from 'react-redux';
import Link from 'yii-steroids/ui/nav/Link';
import {getCurrentItem} from 'yii-steroids/reducers/navigation';
import {goToPage} from 'yii-steroids/actions/navigation';

import { html, store } from 'components';
import {ROUTE_ROOT} from 'routes';
import {currencySetCurrent} from 'actions/currency';
import {getQuoteCurrency} from 'reducers/currency';
import CurrencyEnum from 'enums/CurrencyEnum';
import NavItemSchema from 'types/NavItemSchema';

import './LeftSidebar.scss';

const bem = html.bem('LeftSidebar');

@connect(
    state => ({
        quoteCurrency: getQuoteCurrency(state),
        currentItem: getCurrentItem(state),
    })
)
export default class LeftSidebar extends React.PureComponent {

    static propTypes = {
        currentItem: NavItemSchema,
    };

    render() {
        return (
            <div className={bem.block()}>
                <Link
                    className={bem.element('home-icon')}
                    noStyles
                    toRoute={ROUTE_ROOT}
                >
                    <span className={'Icon Icon__home'}/>
                </Link>
                <div className={bem.element('currencies')}>
                    {CurrencyEnum.getKeys().map(currency => (
                        <div
                            key={currency}
                            className={bem.element('currency', {
                                active: this.props.quoteCurrency === currency,
                            })}
                            onClick={() => {
                                store.dispatch([
                                    currencySetCurrent(currency),
                                    goToPage(this.props.currentItem.id, {
                                        currency: currency,
                                    }),
                                ]);
                            }}
                        >
                            <span className={bem(
                                bem.element('currency-icon'),
                                CurrencyEnum.getIconClass(currency)
                            )}/>
                            <span className={bem.element('currency-label')}>
                                {CurrencyEnum.getLabel(currency)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
