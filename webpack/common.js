let path = require('path');
module.exports = {
    entry: {
        polyfills: './src/polyfills.browser',
        app: './src/main.ts'
    },


    output: {
        publicPath: 'aot/',
         sourceMapFilename: '[name]', 
        path: path.resolve(__dirname, './aot')
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [
                '@ngtools/webpack',
                'angular2-template-loader'
            ]
        }, {
            test: /\.css$/,
            loaders: ['to-string-loader', 'css-loader']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    }

}