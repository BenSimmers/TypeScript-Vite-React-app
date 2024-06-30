module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: './',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        bracketSpacing: true,
      },
    ],
  },
};
