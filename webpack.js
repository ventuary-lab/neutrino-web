require('yii-steroids/webpack')
    .config({
        port: 8082,
        baseUrl: '',
        staticPath: '',
        outputPath: __dirname + '/dist',
        sourcePath: __dirname + '/src',
        useHash: true,
        devServer: {
            proxy: [
                {
                    '**': null,
                },
                {
                    context: ['/api'],
                    target: 'http://localhost:5000',
                },
            ]
        },
    })
    .base('./src/index.js');
