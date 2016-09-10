var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'whatwg-fetch',
        './src/index'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'BACKEND_SERVER': JSON.stringify('http://52.89.197.163')
            }
        })
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath:'/assets/',
        filename: 'bundle.js'
    },
    module: {
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
    }
};
