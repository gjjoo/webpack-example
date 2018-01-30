const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ['lodash'];

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[hash:8].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    })
  ]
};