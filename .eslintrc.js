module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'max-len': ['error'],
    'no-void': ['off']
  }
}
