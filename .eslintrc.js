module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: ['prettier', 'plugin:react/strict', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warning'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx']
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
