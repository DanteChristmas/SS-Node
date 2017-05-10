var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  context: __dirname,
  entry: {
    bootstrap: './stylesheets/bootstrap',
    home: './javascripts/pages/Home',
    schedule: './javascripts/pages/Schedule',
    acc: './javascripts/clients/acc',
    kty: './javascripts/clients/kty',
    ksu: './javascripts/clients/ksu',
    locl: './javascripts/clients/locl',
    mwc: './javascripts/clients/mwc',
    penn: './javascripts/clients/penn',
    wcc: './javascripts/clients/wcc',
    wyo: './javascripts/clients/wyo'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("css-loader", "css-loader!sass-loader")
        // loader: 'style-loader!css-loader!sass-loader'
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
    alias: {
      jsRoot: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      jsReducers: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'reducers'),
      jsActions: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'actions'),
      jsRepos: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'repos'),
      jsComponents: path.resolve(__dirname,'app', 'assets', 'javascripts', 'components'),
      jsLayouts: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'layouts'),
      jsUtils: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'utils'),
      scssRoot: path.resolve(__dirname, 'app', 'assets', 'stylesheets'),
      scssComponents: path.resolve(__dirname, 'app', 'assets', 'stylesheets', 'components'),
      scssClients: path.resolve(__dirname, 'app', 'assets', 'stylesheets', 'clients')
    },
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.png', '.jpg']
  },
  output: {
    path: __dirname + '/public/assets',
    publicPath: '/public/assets',
    filename: '[name].js',
    chunkFilename: "[id].chunk.js"
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css", {
      allChunks: true,
      publicPath: './public/assets'
    })
  ]
}
