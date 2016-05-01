var webpack = require('webpack');
var path = require('path');

module.exports = {
  watch: true,
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/js/index.js'
    ]
  },
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.debug.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      excludes: /node_modules/
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  babel: {
    presets: [
      'es2015',
      'react'
    ]
  },
  devServer: {
    hot: true
  }
};
