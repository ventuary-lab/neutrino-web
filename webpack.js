const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                },
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: `bundle-[name].[hash].css`,
                    chunkFilename: `bundle-[id].[hash].css`,
                }),
                new Dotenv({
                    path: './.env',
                }),
                new webpack.DefinePlugin(Object.keys(process.env).reduce((obj, key) => {
                    if (key.indexOf('APP_') === 0) {
                        obj['process.env.' + key] = JSON.stringify(process.env[key]);
                    }
                    return obj;
                }, {})),
            ]
        },
    })
    .base('./src/index.js');
