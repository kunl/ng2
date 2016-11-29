let webpack = require('webpack');
let path = require('path');
let webpackMerge = require('webpack-merge');


let webpackConfig = {
    entry: {
        polyfills: './app/polyfills.browser',
        app: './app/main.ts'
    },


    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist')
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)src(\\|\/)linker/,
            path.resolve(__dirname, '')
        ),
        new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    }

};

let defaultConfig = {
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [ path.resolve(__dirname, 'node_modules')]
    },
    devServer: {
        contentBase: './',
        port: 4002,
        inline: true,
        stats: 'errors-only',
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 100, poll: 500}
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

module.exports = webpackMerge(defaultConfig, webpackConfig);