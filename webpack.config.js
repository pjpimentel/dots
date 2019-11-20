const webpack = require('webpack');
const {LicenseWebpackPlugin} = require('license-webpack-plugin');
const path = require('path');

const browserConfig = {
  target: 'web',
  entry: './dist/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index-browser.min.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'dots'
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new LicenseWebpackPlugin({
      addBanner: true
    })
  ]
};

module.exports = [browserConfig];
