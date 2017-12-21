const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {scssProdRule, babelLoader} = require('./config/webpack/loaders');
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
      filename: 'js/[name].[hash:6].js',
      publicPath: '/'
    },
    module: {
      rules: [
        babelLoader,
        scssProdRule
      ]
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html'}),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common' // Specify the common bundle's name.
      }),
      new ExtractTextPlugin('css/[name]-[contenthash:8].css')
    ]
  }
}