const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = (env) => {
  return {
    entry: {
      main: './client/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]-[hash:5].js'
    },
    module: {
      rules: [
        {test: /\.js$/, use: 'babel-loader'}
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html'})
    ]
  }
}