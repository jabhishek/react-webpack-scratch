const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const enableSourcemap = true;

const styleLoader = {
  loader: require.resolve('style-loader'),
  options: {
    sourceMap: enableSourcemap
  }
};

const cssLoader = {
  loader: require.resolve('css-loader'),
  options: {
    modules: true,
    localIdentName: '[local]--[hash:base64:5]',
    importLoaders: 2,
    sourceMap: enableSourcemap
  }
};
const cssLoaderNoModule = {
  loader: require.resolve('css-loader'),
  options: {
    modules: false,
    sourceMap: enableSourcemap
  }
};

const postCssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    sourceMap: enableSourcemap,
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9' // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009'
      })
    ]
  }
};

const babelLoader = {
  test: /\.js$/,
  use: 'babel-loader',
  include: [
    path.resolve(__dirname, "../../", "client")
  ]
};

const sassLoader = {
  loader: require.resolve('sass-loader'),
  options: {
    sourceMap: enableSourcemap
  }
};

module.exports = {
  cssProdRule: {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      Object.assign(
        {
          fallback: require.resolve('style-loader'),
          use: [ cssLoader, postCssLoader ]
        }
      )
    )
  },
  cssDevRule: {
    test: /\.css$/,
    use: [styleLoader, cssLoaderNoModule, postCssLoader]
  },
  scssProdRule: {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      Object.assign(
        {
          fallback: require.resolve('style-loader'),
          use: [ cssLoader, sassLoader ]
        }
      )
    )
  },

  scssDevRule: {
    test: /\.scss$/,
    use: [styleLoader, cssLoader, sassLoader]
  },
  babelLoader: babelLoader
};
