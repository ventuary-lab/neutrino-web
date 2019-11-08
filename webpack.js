const Dotenv = require('dotenv-webpack');

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
        webpack: {
            module: {
                rules: {
                    favicon: {
                        test: /\.ico$/,
                        use: {
                            file: {
                                loader: 'file-loader',
                                options: {
                                    name: 'images/[name].[ext]',
                                },
                            },
                        },
                    },
                    typescript: {
                        test: /\.tsx?$/, loader: 'ts-loader'
                    }
                },
            },
            plugins: [
                new Dotenv({
                    path: './.env',
                }),
            ],
            resolve: {
                // Add `.ts` and `.tsx` as a resolvable extension.
                extensions: ['.ts', '.tsx', '.js']
            }
        },
    })
    .base('./src/index.js');
