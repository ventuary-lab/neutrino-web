import React from 'react';
import {connect} from 'react-redux';
import Link from 'yii-steroids/ui/nav/Link';
import {getCurrentItem} from 'yii-steroids/reducers/navigation';
import {goToPage} from 'yii-steroids/actions/navigation';

import {html} from 'components';
import {ROUTE_ROOT} from 'routes';
import {changeCurrency} from 'actions/layout';
import {getActiveCurrency} from 'reducers/layout';
import CurrencyEnum from 'enums/CurrencyEnum';
import NavItemSchema from 'types/NavItemSchema';

import './LeftSidebar.scss';

const bem = html.bem('LeftSidebar');

@connect(
    state => ({
        activeCurrency: getActiveCurrency(state),
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
                    {CurrencyEnum.getKeys().map(item => (
                        <div
                            key={item}
                            className={bem.element('currency', {
                                active: this.props.activeCurrency === item,
                            })}
                            onClick={() => {
                                this.props.dispatch(changeCurrency(item));
                                this.props.dispatch(goToPage(this.props.currentItem.id, {
                                    currency: item,
                                }))
                            }}
                        >
                            <span className={bem(
                                bem.element('currency-icon'),
                                CurrencyEnum.getIconActiveClass(item)
                            )}/>
                            <span className={bem.element('currency-label')}>
                                {CurrencyEnum.getLabel(item)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
