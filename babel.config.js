module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            'next/babel',
            {
                'preset-env': {},
                'transform-runtime': {},
                'styled-jsx': {},
                'class-properties': {},
            },
        ],
    ];
    const plugins = [
        ['@babel/plugin-proposal-decorators', { legacy: true }]
    ];

    return {
        ignore: [/node_modules\/(?!yii-steroids(?![^\/])).*/],
        presets,
        plugins
    };
};
