module.exports = {
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
    ]
  }
};
