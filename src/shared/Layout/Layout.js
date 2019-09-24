import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _get from 'lodash-es/get';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import layoutHoc, {STATUS_LOADING, STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';
import screenWatcherHoc from 'yii-steroids/ui/screenWatcherHoc';
import {getCurrentItemParam} from 'yii-steroids/reducers/navigation';
import axios from 'axios';

import {html, dal, clientStorage} from 'components';
import {STORAGE_AUTH_KEY} from 'shared/RightSidebar/RightSidebar';
import {setCurrency} from 'actions/layout';
import Header from 'shared/Header';
import LeftSidebar from 'shared/LeftSidebar';
import RightSidebar from 'shared/RightSidebar';

import './Layout.scss';
import {setUser} from 'yii-steroids/actions/auth';
import CurrencyEnum from 'enums/CurrencyEnum';

import WarningMobileModal from 'modals/WarningMobileModal';
import {openModal} from 'yii-steroids/actions/modal';

const bem = html.bem('Layout');

@layoutHoc(
    async () => {
        const response = await axios.get('/api/v1/init');
        return {
            ...response.data,
        };
    }
)
@connect(
    state => ({
        isShowLeftSidebar: getCurrentItemParam(state, 'isShowLeftSidebar'),
        matchParams: state.navigation.params,
    })
)

@screenWatcherHoc()
export default class Layout extends React.PureComponent {

    static propTypes = {
        status: PropTypes.string,
    };

    componentWillMount() {
        if (JSON.parse(clientStorage.get(STORAGE_AUTH_KEY))) {

            dal.auth()
                .then(user => {
                    this.props.dispatch(setUser(user));
                });
        }

    }


    componentWillReceiveProps(nextProps) {
        if (_get(this.props, 'matchParams.currency') !== _get(nextProps, 'matchParams.currency')) {
            this.props.dispatch(setCurrency(nextProps.matchParams.currency));
        }
    }

    render() {
        if (this.props.status === STATUS_RENDER_ERROR) {
            return null;
        }

        return (
            <div className={bem.block({
                'is-show-left-sidebar': this.props.isShowLeftSidebar
            })}>
                <div className={bem.element('inner')}>
                    {this.props.isShowLeftSidebar && (
                        <aside className={bem.element('left')}>
                            <LeftSidebar/>
                        </aside>
                    )}
                    <div className={bem.element('center')}>
                        <header className={bem.element('header')}>
                            <Header/>
                        </header>
                        <main className={bem.element('content')}>
                            {this.props.status !== STATUS_LOADING && this.props.children}
                        </main>
                    </div>
                    <aside className={bem.element('right')}>
                        <RightSidebar/>
                    </aside>
                </div>
                <ModalWrapper/>
            </div>
        );
    }
}
