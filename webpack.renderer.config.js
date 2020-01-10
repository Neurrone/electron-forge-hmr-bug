const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');
rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  module: {
    rules,
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'bundle.js',
    // filename: '[name].bundle.js',
    // publicPath: './',
  },
};
