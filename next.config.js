const withSass = require('@zeit/next-sass');
const withTM = require('next-transpile-modules');
const path = require('path');
const srcPath = './src';

module.exports = withSass(
    withTM({
        webpack: config => {
            config.resolve.modules.push(srcPath);

            config.module.rules = [
                ...config.module.rules,
                {
                    test: /\.(ttf|woff2?|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ];

            return config;
        },
        sassLoaderOptions: {
            includePaths: [srcPath],
        },
        transpileModules: ['yii-steroids', 'lodash-es'],
    })
);
