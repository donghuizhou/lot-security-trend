module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['off', 'always'],
    'no-unreachable': 0,
    'no-unused-vars': 0,
    'no-tabs': 'off',
    'camelcase': 0,
    'quote-props': 0,
    'multi-word-component-names': ['off', 'always']
  }
}
