import React from 'react';
import Router from 'yii-steroids/ui/nav/Router';

import {ui} from 'components';
import Layout from 'shared/Layout';
import routes from './routes';
import './static/images/favicon.ico';

// Automatically import all views from yii-steroids
ui.addViews({
    'form.FormView': require('yii-steroids/ui/form/Form/FormView').default,
    'list.ListView': require('yii-steroids/ui/list/List/ListView').default,
    'modal.ModalView': require('./ui/modal/Modal/ModalView').default,
    'form.NumberFieldView': require('./ui/form/InputField/InputFieldView').default,
});
ui.addViews(require.context('./ui', true, /View.js$/));

export default class Application extends React.PureComponent {
    render() {

        return (
            <Router
                wrapperView={Layout}
                routes={routes}
            />
        );
    }
}
