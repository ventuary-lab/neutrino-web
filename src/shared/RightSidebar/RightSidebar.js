import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'yii-steroids/ui/form/Button';
import { getUser } from 'yii-steroids/reducers/auth';
import _upperFirst from 'lodash-es/upperFirst';
import wavesRawLogo from 'static/icons/waves-raw-logo.svg';
import {
    InstallKeeperModalContext,
    LoginTypeModalContext,
    GlobalLinksContext,
} from 'shared/Layout/context';
import { TERMS_OF_USE_LABEL } from 'shared/Layout/constants';

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
    // static contextType = InstallKeeperModalContext;

    render() {
        const addressUrl = this.props.user
            ? `https://wavesexplorer.com/${this.props.user.network}/address/${this.props.user.address}`
            : '';

        return (
            <LoginTypeModalContext.Consumer>
                {loginTypeContext => (
                    <InstallKeeperModalContext.Consumer>
                        {installKeeperContext => (
                            <div className={bem.block()}>
                                {(this.props.user && (
                                    <>
                                        <div className={bem.element('user-info')}>
                                            {/* <div
                                                className={bem(
                                                    bem.element('user-info-icon'),
                                                    'Icon Icon__waves-keeper'
                                                )}
                                            /> */}
                                            <img src={wavesRawLogo} className={bem.element('waves-logo')} />
                                            <div className={bem.element('address-container')}>
                                                <span className={bem.element('address-value')}>
                                                    <a href={addressUrl} target="_blank">
                                                        {this.props.user.address}
                                                    </a>
                                                </span>
                                                {/* <a
                                    href={addressUrl}
                                    target={'_blank'}
                                    className={bem.element('address-link')}
                                >
                                    <span className={'Icon Icon__arrow-right-2'} />
                                </a> */}
                                            </div>
                                            <button
                                                className={bem.element('logout')}
                                                type={'button'}
                                                onClick={installKeeperContext.onLogout}
                                            >
                                                <span className={'Icon Icon__logout'} />
                                            </button>
                                        </div>
                                        <div className={bem.element('balance-table')}>
                                            <BalanceTable />
                                        </div>
                                        {/* <div className={bem.element('user-network-container')}>
                                            <div className={bem.element('user-network')}>
                                                <div className={bem.element('user-network-icon')}>
                                                    <span
                                                        className={
                                                            'Icon Icon__point-in-circle_green'
                                                        }
                                                    />
                                                </div>
                                                {_upperFirst(this.props.user.network)}
                                            </div>
                                        </div> */}
                                    </>
                                )) || <>{this.renderAuthBlock({ loginTypeContext, installKeeperContext })}</>}
                                {/* <WavesExchangeChart /> */}
                            </div>
                        )}
                    </InstallKeeperModalContext.Consumer>
                )}
            </LoginTypeModalContext.Consumer>
        );
    }

    renderAuthBlock({ loginTypeContext }) {
        return (
            <div className={bem.element('auth')}>
                {/* <div className={bem(bem.element('auth-icon'), 'Icon Icon__waves-keeper')} /> */}
                <img src={wavesRawLogo} className={bem.element('waves-logo')} />
                <p className={bem.element('auth-title')}>
                    <span>Get started by connecting</span>
                    <br />
                    <span>Waves account</span>
                </p>

                <Button
                    className={bem.element('auth-button')}
                    block
                    label={'Login'}
                    onClick={() => loginTypeContext.onOpen()}
                />
                <p className={bem.element('auth-info')}>
                    <GlobalLinksContext.Consumer>
                        {context => {
                            const tosLink = context.links.find(
                                link => link.label === TERMS_OF_USE_LABEL
                            ).url;
                            return (
                                <a href={tosLink} target={'_blank'}>
                                    {TERMS_OF_USE_LABEL}
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
