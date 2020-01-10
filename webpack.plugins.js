const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Hot Module Replacement',
  }),
  new ForkTsCheckerWebpackPlugin({
    async: false
  })
];
