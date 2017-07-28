const webpack = require('webpack');
const path = require('path');

const BROWSER_BUNDLE_FILE_NAME = 'bundleBrowser.js';

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dst'),
    filename: BROWSER_BUNDLE_FILE_NAME,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    allowedHosts: [
      '.lvh.me',
      'localhost',
    ],
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['raw-loader'],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-inline-loader',
        options: {
          classPrefix: true,
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'isomorphic-style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins () {
                return [
                  require('precss'),
                  require('autoprefixer'),
                  require('postcss-flexbugs-fixes'),
                ];
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
