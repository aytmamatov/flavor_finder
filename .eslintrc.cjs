const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', path.resolve(__dirname, 'src')],
      ],
    },
  },
};
