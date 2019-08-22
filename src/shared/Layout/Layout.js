import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import layoutHoc, {STATUS_ACCESS_DENIED, STATUS_LOADING, STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';
import screenWatcherHoc from 'yii-steroids/ui/screenWatcherHoc';

import {html} from 'components';

import './Layout.scss';

const bem = html.bem('Layout');

// @layoutHoc(
//     () => {
//         // return dal.auth()
//         //     .then(user =>  ({user}))
//         //     .catch(() => ({user: null}))
//     }
// )
// @connect(
//     state => ({
//
//     })
// )

@screenWatcherHoc()
export default class Layout extends React.PureComponent {

    static propTypes = {
        status: PropTypes.string,
    };

    render() {
        if (this.props.status === STATUS_RENDER_ERROR) {
            return null;
        }

        return (
            <div className={bem.block()}>
                <div>header</div>
                <main className={bem.element('content')}>
                    <div>content</div>
                    {this.props.status !== STATUS_LOADING && this.props.children}
                </main>
                <div>footer</div>
                <ModalWrapper/>
            </div>
        );
    }
}
