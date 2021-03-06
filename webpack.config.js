var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'whatwg-fetch',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                __DEVELOPMENT__: true,
                BACKEND_SERVER: JSON.stringify('http://localhost:4001')
            }
        })
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