const Dotenv = require('dotenv-webpack');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const srcPath = path.join(__dirname, 'src');

require('yii-steroids/webpack')
    .config({
        port: 8082,
        baseUrl: '',
        staticPath: '',
        outputPath: __dirname + '/dist',
        sourcePath: srcPath,
        useHash: true,
        devServer: {
  	    hot: false,
            inline: false,
            liveReload: false,
            proxy: [
                {
                    '**': null,
                },
                {
                    context: ['/api', '/static'],
                    target: 'http://localhost:5000',
                },
            ]
        },
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: 'js/[hash].js',
            chunkFilename: 'js/[id].[hash].chunk.js'
        },
        optimization: {
            runtimeChunk: 'single',
            minimizer: [
                new OptimizeCSSAssetsPlugin({
                    cssProcessorPluginOptions: {
                        preset: [ 'default', { discardComments: { removeAll: true } } ],
                    }
                }),
                new UglifyJSPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                })
            ],
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                automaticNameMaxLength: 30,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
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
                        test: /\.tsx?$/,
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig-node.json'
                        }
                    },
                    no_autoreload: { // Disable webpack-dev-server's auto-reload feature in the browser.
                        test: path.resolve(__dirname, 'node_modules/webpack-dev-server/client'),
                        loader: 'null-loader'
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
                extensions: ['.ts', '.tsx', '.js'],
                modules: [srcPath, 'node_modules'],
            }
        },
    })
    .base('./src/index.js');
