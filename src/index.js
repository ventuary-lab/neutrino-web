import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from 'components';

import './style/index.scss';

(init => {
    const sentryDsn = {
        dev: 'https://258769261d4f44cc8f7f9fdd8db16549@sentry.io/1798433',
        alpha: 'https://0768277c4fd74cb388978b52b4176398@sentry.io/1798430',
        locale: 'https://3bc32bbc059841ed839f0880f06e139d@sentry.io/1798437',
    };

    if (window.Raven) {
        if (process.env.NODE_ENV === 'production' && !process.env.APP_ENV) {
            window.Raven.config(sentryDsn['alpha']).install();
        } else if (process.env.NODE_ENV === 'production' && process.env.APP_ENV) {
            window.Raven.config(sentryDsn[process.env.APP_ENV]).install();
        } else {
            window.Raven.config(sentryDsn['locale']).install();
        }

        window.Raven.context(init);
    } else {
        init();
    }

})(() => {
    const Application = require('./Application').default;
    ReactDOM.render(
        <Provider store={store.store}>
            <Application/>
        </Provider>,
        document.getElementById('root'),
    );
});
