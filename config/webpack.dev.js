const { merge } = require('webpack-merge');
const { join } = require('path');

const baseConfig = require('./webpack.base');

const mode = 'development';

module.exports = merge(baseConfig(mode), {
  mode,
  devtool: 'source-map',
  devServer: {
    contentBase: join(process.cwd(), 'build'),
    hot: true,
    open: true,
  },
});
