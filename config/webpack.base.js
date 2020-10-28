const { join } = require('path');

module.exports = (env) => {
  const config = {
    entry: {
      index: join(process.cwd(), './src/index.js'),
    },
    output: {
      filename: env === 'production' ? './js/[chunkhash:8].js' : '[namme].js',
      path: join(process.cwd(), 'build'),
    },
  };
  return config;
};
