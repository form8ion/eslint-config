module.exports = {
  plugins: ['filenames'],

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb'
  ],

  rules: {
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
    'max-len': ['error', 120]
  }
};
