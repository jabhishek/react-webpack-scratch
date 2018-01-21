const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {scssProdRule, babelLoader} = require('./config/webpack/loaders');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
  return {
    entry: {
      'vendor': ['react', 'react-dom', 'react-router', 'react-router-dom'],
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
      strictExportPresence: true,
      rules: [{
        oneOf: [
          babelLoader,
          scssProdRule
        ]
      }]
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html'}),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor', // Specify the common bundle's name.
        minChunks: Infinity
      }),
      new ExtractTextPlugin('css/[name]-[contenthash:8].css'),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      }),
      new UglifyJSPlugin()
    ]
  }
}