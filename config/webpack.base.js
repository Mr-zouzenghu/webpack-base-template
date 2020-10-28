const { join } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const config = {
    entry: {
      index: join(process.cwd(), './src/index.js'),
    },
    output: {
      filename: env === 'production' ? './js/[chunkhash:8].js' : '[name].js',
      path: join(process.cwd(), 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: join(process.cwd(), './src/index.html'),
        chunks: ['index'],
      }),
    ],
    resolve: {
      extensions: ['.js', '.css', '.scss'],
    },
  };
  return config;
};
