'use strict';

const webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const postCssLoader = require('./shared/postCssLoader');
const env = require('./shared/env');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    namedModules: true,
    // removeAvailableModules: false,
    // removeEmptyChunks: false,
    // splitChunks: false,
  },
  devServer: {
    contentBase: './public',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: 'minimal',
    clientLogLevel: 'warning',
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          postCssLoader,
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css/,
        use: ['style-loader', 'css-loader', postCssLoader],
      },
    ],
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new webpack.DefinePlugin(env('development')),
  ],
};
