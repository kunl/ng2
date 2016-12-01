let path = require('path');
let webpack = require('webpack');
let AotPlugin = require('@ngtools/webpack');

console.log(process.cwd(), '当前路径.....')
module.exports = [
    new webpack.ProgressPlugin(),
    new AotPlugin.AotPlugin({
        tsConfigPath: './tsconfig.json',
        basePath: process.cwd(),
        entryModule: path.join(process.cwd(), 'src', 'app.module') + '#AppModule'
    }),
    // new webpack.optimize.UglifyJsPlugin()
]