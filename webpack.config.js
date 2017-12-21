const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const {babelLoader, scssDevRule} = require('./config/webpack/loaders');

module.exports = (env) => {
  return {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './client/index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        babelLoader,
        scssDevRule
      ]
    },
    devtool: 'eval',
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html'}),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      host: 'localhost',
      historyApiFallback: true,
      port: 3000,
      hot: true
    }
  }
}