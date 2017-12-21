const path = require('path');

const babelLoader = {
  test: /\.js$/,
  use: 'babel-loader',
  include: [
    path.resolve(__dirname, "../../", "client")
  ]
};
module.exports = {
  babelLoader: babelLoader
};