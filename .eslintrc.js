module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
  ],
  rules: {
    'brace-style': [
      'error',
      'stroustrup',
    ],
    'linebreak-style': 'off',
    'no-extend-native': 'off',

    // disable temporarily
    'max-len': 'off',

    // check back later
    'class-methods-use-this': 'off',
    'import/no-dynamic-require': 'off',
    'max-classes-per-file': 'off',
  },
};
