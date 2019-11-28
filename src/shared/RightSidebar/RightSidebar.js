import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'yii-steroids/ui/form/Button';
import { getUser } from 'yii-steroids/reducers/auth';
import _upperFirst from 'lodash-es/upperFirst';
import { InstallKeeperModalContext, GlobalLinksContext } from 'shared/Layout/context';

import { html, dal } from 'components';
import BalanceTable from 'shared/BalanceTable';

import './RightSidebar.scss';
// import WavesExchangeChart from 'shared/RightSidebar/views/WavesExchangeChart';

const bem = html.bem('RightSidebar');

@connect(state => ({
    user: getUser(state),
}))
export default class RightSidebar extends React.PureComponent {
    static propTypes = {
        user: PropTypes.object,
    };
    static contextType = InstallKeeperModalContext;

    render() {
        const addressUrl = this.props.user
            ? `https://wavesexplorer.com/${this.props.user.network}/address/${this.props.user.address}`
            : '';

        return (
            <div className={bem.block()}>
                {(this.props.user && (
                    <>
                        <div className={bem.element('user-info')}>
                            <div
                                className={bem(
                                    bem.element('user-info-icon'),
                                    'Icon Icon__waves-keeper'
                                )}
                            />
                            <div className={bem.element('address-container')}>
                                <span className={bem.element('address-value')}>
                                    {this.props.user.address}
                                </span>
                                <a
                                    href={addressUrl}
                                    target={'_blank'}
                                    className={bem.element('address-link')}
                                >
                                    <span className={'Icon Icon__arrow-right-2'} />
                                </a>
                            </div>
                            <button
                                className={bem.element('logout')}
                                type={'button'}
                                onClick={this.context.onLogout}
                            >
                                <span className={'Icon Icon__logout'} />
                            </button>
                        </div>
                        <div className={bem.element('balance-table')}>
                            <BalanceTable />
                        </div>
                        <div className={bem.element('user-network-container')}>
                            <div className={bem.element('user-network')}>
                                <div className={bem.element('user-network-icon')}>
                                    <span className={'Icon Icon__point-in-circle_green'} />
                                </div>
                                {_upperFirst(this.props.user.network)}
                            </div>
                        </div>
                    </>
                )) || <>{this.renderAuthBlock()}</>}
                {/* <WavesExchangeChart /> */}
            </div>
        );
    }

    renderAuthBlock() {
        return (
            <div className={bem.element('auth')}>
                <div className={bem(bem.element('auth-icon'), 'Icon Icon__waves-keeper')} />
                <p className={bem.element('auth-title')}>
                    <span>Get started by connecting</span>
                    <br />
                    <span>Waves Keeper account</span>
                </p>

                <Button
                    className={bem.element('auth-button')}
                    block
                    label={'Login with Keeper'}
                    onClick={() => this.context.onLogin()}
                />
                <p className={bem.element('auth-info')}>
                    <GlobalLinksContext.Consumer>
                        {context => {
                            const tosLink = context.links.find(
                                link => link.label === 'Terms of Service'
                            ).url;
                            return (
                                <a href={tosLink} target={'_blank'}>
                                    Terms of Service
                                </a>
                            );
                        }}
                    </GlobalLinksContext.Consumer>
                    <br />
                    <a
                        href="https://docs.google.com/document/d/1SGVvWrbqWOZ4WtGUqAom0ZBYCBw88u_lGz7eo1GAEUs/edit?usp=sharing"
                        target={'_blank'}
                    >
                        Privacy Policy
                    </a>
                </p>
            </div>
        );
    }
}
