module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'object-shorthand': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-const-assign': 'off'
  }
}
