let webpack = require('webpack');
let path = require('path');
let webpackMerge = require('webpack-merge');
let AotPlugin = require('@ngtools/webpack');

let webpackConfig = {
    entry: {
        polyfills: './src/polyfills.browser',
        app: './src/main.ts'
    },


    output: {
        publicPath: 'aot/',
        path: path.resolve(__dirname, './aot')
    },

    plugins: [
        new AotPlugin.AotPlugin ({
            tsConfigPath: './tsconfig.json',
            basePath: process.cwd(),
            entryModule:  path.join(process.cwd(), 'src', 'app.module') +  '#AppModule'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    '@ngtools/webpack',
                    'angular2-template-loader'
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
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [ path.resolve(__dirname, 'node_modules')]
    },
    // devServer: {
    //     contentBase: './',
    //     port: 4002,
    //     inline: true,
    //     stats: 'errors-only',
    //     historyApiFallback: true,
    //     watchOptions: {aggregateTimeout: 100, poll: 500}
    // },

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