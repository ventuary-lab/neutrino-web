const App = require('./App');
const express = require('express');
const expressApp = express();
const Sentry = require('@sentry/node');
// const { isNextJsPrefixed } = require('./helpers');

require('dotenv').config();

const sentryDsn = {
    demo: 'https://258769261d4f44cc8f7f9fdd8db16549@sentry.io/1798433',
    alpha: 'https://0768277c4fd74cb388978b52b4176398@sentry.io/1798430',
    locale: 'https://3bc32bbc059841ed839f0880f06e139d@sentry.io/1798437',
    beta: 'https://7d1256ae10f84f7e85829683e76545dd@sentry.io/1841451'
};

//sentry
if (process.env.APP_ENV) {
    Sentry.init({ dsn: sentryDsn[process.env.APP_ENV] });
} else {
    // Sentry.init({ dsn: sentryDsn['locale'] });
}

// Create app
const port = process.env.PORT || 5000;
const httpServer = expressApp.listen(port, () => {
    console.log(__dirname); // eslint-disable-line no-console
    console.log('Listening Port ' + port); // eslint-disable-line no-console
});
const mainApp = new App({ expressApp, httpServer });

expressApp.use(function(req, res, next) {
    if (req.header('x-forwarded-proto') === 'http') {
        res.redirect(301, 'https://' + req.headers.host + req.url);
        return;
    }
    next();
});

mainApp.start();

expressApp.use(express.static(__dirname + '/../out'));
expressApp.use(express.static(__dirname + '/../dist'));

expressApp.get('/*', (req, res) => {
    if (req.originalUrl === '/') {
        res.sendFile('index.html', { root: __dirname + '/../out' });
    }

    if (req.originalUrl.indexOf('_next')) {
        res.sendFile(req.originalUrl, { root: __dirname + '/../out' });
    };

    res.sendFile('index.html', { root: __dirname + '/../dist' });
});
