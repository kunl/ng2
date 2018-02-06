let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpackMerge = require("webpack-merge");

let webpackConfig = {
  entry: {
    polyfills: "./src/polyfills.ts",
    vendor: "./src/vendor.ts",
    app: "./src/main.hmr.ts"
  },
  output: {
    publicPath: "aot/",
    path: path.resolve(__dirname, "./aot")
  },
  plugins: [
    // new ExtractTextPlugin("./style.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["app", "vendor", "polyfills"]
    })
    // new HtmlWebpackPlugin({
    //     template: 'index.html'
    // })
    //  new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          "@angularclass/hmr-loader",
          "awesome-typescript-loader",
          "angular2-router-loader",
          "angular2-template-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ["css-loader", "stylus-loader"]
      },
      {
        test: /\.html$/,
        use: "raw-loader"
      }
    ]
  }
};

let defaultConfig = {
  output: {
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].map",
    chunkFilename: "[id].chunk.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    contentBase: "./",
    port: 3001,
    inline: true,
    stats: "errors-only",
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 500
    }
  },

  node: {
    global: true,
    crypto: "empty",
    __dirname: true,
    __filename: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }
};

module.exports = webpackMerge(defaultConfig, webpackConfig);
