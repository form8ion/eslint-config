module.exports = {
  plugins: ['filenames'],

  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:anti-trojan-source/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': 'error',
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
          minProperties: 0
        }
      }
    ],
    'filenames/match-regex': ['error', '^[a-z0-9\\-\\.]+$'],
    'arrow-parens': ['error', 'as-needed'],
    yoda: ['error', 'always'],
    'no-multi-spaces': ['error', {ignoreEOLComments: true}],
    'max-len': ['error', 120],
    'one-var': ['error', {uninitialized: 'always', initialized: 'never'}],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages'],
    'no-unused-vars': ['error', {ignoreRestSiblings: true}],
    'no-restricted-exports': ['error', {restrictedNamedExports: ['then']}]
  },

  overrides: [{
    files: ['example.js', 'rollup.config.js'],
    rules: {'import/no-extraneous-dependencies': ['error', {devDependencies: true}]}
  }]
};
