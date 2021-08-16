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
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
    'import/no-dynamic-require': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
  },
};
