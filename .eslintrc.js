module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prefer-promise-reject-errors': 'off'
  }
}
