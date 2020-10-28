const { join } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssBuildPath = (env) => {
  if (env === 'development') {
    return 'style-loader';
  }
  return {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../',
    },
  };
};

module.exports = (env) => {
  const config = {
    entry: {
      index: join(process.cwd(), './src/index.js'),
    },
    output: {
      filename: env === 'production' ? './js/[chunkhash:8].js' : '[name].js',
      path: join(process.cwd(), 'build'),
      publicPath: './',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: join(process.cwd(), './src/index.html'),
        chunks: ['index'],
      }),
      new MiniCssExtractPlugin({
        filename: env === 'production' ? './css/[chunkhash:8].css' : './[name].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(sc|sa|c)ss$/,
          use: [
            cssBuildPath(env),
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.css', '.scss'],
    },
  };
  return config;
};
