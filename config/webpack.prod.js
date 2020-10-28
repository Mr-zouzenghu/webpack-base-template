const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');

const mode = 'production';

module.exports = merge(baseConfig(mode), {
  mode,
});
