var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  context: __dirname,
  entry: {
    // bootstrap: ['./stylesheets/bootstrap', 'webpack/hot/only-dev-server'],
    // home: ['./javascripts/pages/Home', 'webpack/hot/only-dev-server'],
    index: ['./cms/index', 'webpack/hot/only-dev-server'],
    devServerClient: 'webpack-dev-server/client?http://localhost:8080'
  },
  // resolveLoader: {
  //   root: path.join(__dirname, 'node_modules')
  // },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|server)/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|server)/,
        // loader: ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")
        loader: 'style-loader!css?sourceMap!sass?sourceMap'

      },
      { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=10000"
      }
    ]
  },
  resolve: {
    // alias: {
    //   jsRoot: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    //   jsReducers: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'reducers'),
    //   jsActions: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'actions')
    // },
    extensions: ['.js', '.jsx', '.css', '.scss', '.png', '.jpg']
  },
  output: {
    path: __dirname + '/server/public/dist',
    publicPath: 'http://localhost:8080/server/public/dist,
    filename: '[name].js',
    chunkFilename: "[id].chunk.js"
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   filename: "common.js",
    //   name: "common"
    // }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true,
      publicPath: './server/public/dist'
    })
  ]
}
