module.exports = {
  root: true,
  // extends: '@react-native-community',
  extends: 'airbnb',
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'arrow-body-style': 0,
    'react/prefer-stateless-function': 0,
    'no-trailing-spaces': 0,
    'comma-dangle': 0,
    radix: 0,
    'max-len': [
      2,
      {
        code: 120,
        ignorePattern: '^import',
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'class-methods-use-this': 0,
    'import/no-unresolved': [2, { ignore: ['next/'] }],
    'react/jsx-props-no-spreading': [
      'error',
      { exceptions: ['AuthComponent', 'Component', 'Apollo'] },
    ],
  },
};
