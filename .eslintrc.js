module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'global-require': 0,
    'linebreak-style': ['off', 'windows'],
    'import/no-dynamic-require': 0,
  },
};
