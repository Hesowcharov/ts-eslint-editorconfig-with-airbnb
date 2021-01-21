module.exports = {
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:editorconfig/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  plugins: ['@typescript-eslint', 'editorconfig']
};
