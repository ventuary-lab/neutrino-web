const ContractApp = require('./ContractApp');
const express = require('express');
const expressApp = express();

require('dotenv').config();

// Create app
const port = process.env.PORT || 5000;
const httpServer = expressApp.listen(port, () => {
    console.log(__dirname); // eslint-disable-line no-console
    console.log('Listening Port ' + port); // eslint-disable-line no-console
});
const contract = new ContractApp({expressApp, httpServer});

// Express
expressApp.use(function(req, res, next) {
    if (req.header('x-forwarded-proto') === 'http') {
        res.redirect(301, 'https://' + req.headers.host + req.url);
        return;
    }
    next();
});

contract.start();

expressApp.use(express.static(__dirname + '/dist'));
expressApp.get('/*', (req, res) => {
    res.sendFile('index.html', { root : __dirname + '/dist'});
});
