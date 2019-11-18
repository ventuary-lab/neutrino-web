const Dotenv = require('dotenv-webpack');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

require('yii-steroids/webpack')
    .config({
        port: 8082,
        baseUrl: '',
        staticPath: '',
        outputPath: __dirname + '/dist',
        sourcePath: __dirname + '/src',
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
                    context: ['/api'],
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
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name (module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return `npm.${packageName.replace('@', '')}`;
                        }
                    },
                    styles: {
                        test: /\.css$/,
                        name: 'styles',
                        chunks: 'all',
                        enforce: true
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
