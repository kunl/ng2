let webpack = require('webpack');
let path = require('path');
let webpackMerge = require('webpack-merge');
let AotPlugin = require('@ngtools/webpack');

let commonConfig = require('./webpack/common');

let pluginsConfig = {
    
    plugins:  require('./webpack/plugins')

};


let serverConfig = {
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [ path.resolve(__dirname, 'node_modules')]
    },
    devServer: {
        contentBase: './',
        port: 3000,
        inline: true,
        stats: 'errors-only',
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 300, poll: 500}
    },

    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};

module.exports = webpackMerge(commonConfig, serverConfig, pluginsConfig);
