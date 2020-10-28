const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base');

const mode = 'production';

module.exports = merge(baseConfig(mode), {
  mode,
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {
                  version: 3,
                },
                targets: {
                  chrome: '50',
                  ie: '8',
                  firefox: '60',
                  edge: '17',
                  safari: '10',
                },
              },
            ],
          ],
        },
      },
    ],
  },
});
