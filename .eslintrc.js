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

    // disable temporarily
    'no-console': 'off',
    'no-constant-condition': 'off',
    'no-continue': 'off',
    'no-else-return': 'off',
    'no-extend-native': 'off',
    'no-labels': 'off',
    'no-lonely-if': 'off',
    'no-mixed-operators': 'off',
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
