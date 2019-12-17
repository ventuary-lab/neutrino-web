const withSass = require('@zeit/next-sass');
const withTM = require('next-transpile-modules');
const path = require('path');
const srcPath = './src';

module.exports = withSass(
    withTM({
        webpack: config => {
            config.resolve.modules.push(srcPath);

            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|ico|svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                },
            });

            return config;
        },
        sassLoaderOptions: {
            includePaths: [srcPath],
        },
        transpileModules: ['yii-steroids', 'lodash-es'],
        exportPathMap: async function() {
            return {
                '/': { page: '/' },
                '/staking': { page: '/staking' },
            };
        },
    })
);
