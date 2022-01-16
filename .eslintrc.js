module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'react-app',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  rules: {
    'prettier/prettier': ['error', { trailingComma: 'all' }],
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'arrow-body-style': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    '@typescript-eslint/indent': 'off',
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['store', './src/store'],
          ['lib', './src/lib'],
          ['styles', './src/styles'],
          ['types', './src/types'],
        ],
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    },
  },

  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
