var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'whatwg-fetch',
        'webpack-dev-server/client',
        'webpack/hot/dev-server',
        './src/index'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath:'/assets/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'react-hot',
                include: path.resolve(__dirname, 'src')
            },
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "src"),
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
};