const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const loaders = require('./config/webpack/loaders');
const path = require('path');

module.exports = (env) => {
  return {
    entry: {
      'main': './client/index.js',
      'home': './client/home/home.js',
      'about': './client/about/about.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        loaders.babelLoader
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html'}),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common' // Specify the common bundle's name.
      })
    ]
  }
}