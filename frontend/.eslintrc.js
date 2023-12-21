module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*/.spec.js', '*/.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    'operator-linebreak': 0,
    'no-ternary': 0,
    /* Enforces the usage of Windows line endings: \r\n for CRLF */
    // 'linebreak-style': ['error', 'linux'],
    /* Restrict file extensions that may contain JSX */
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    /* This rule enforces consistent line breaks inside braces of object literals or destructuring assignments. */
    /* Enforce consistent usage of destructuring assignment of props, state, and context */
    'react/destructuring-assignment': 0,
    /* Prevent missing props validation in a React component definition */
    /* This rule will warn when it encounters a reference to an identifier that has not yet been declared. */
    'react/prop-types': 0,
    /* Enforce require() on the top-level module scope */
    'global-require': 0,
    /* This rule is aimed to enforce consistent indentation style */
    'no-use-before-define': 0,
    /* This rule enforces consistent line breaks inside braces of object literals or destructuring assignments. */
    'object-curly-newline': 0,
    /* Enforce consistent usage of destructuring assignment of props, state, and context */
    'react/jsx-indent': ['error', 2],
    /* This rule is aimed to enforce consistent indentation style */
    'react/jsx-indent-props': ['error', 2],
    /* Enforces that there is no spreading for any JSX attribute. This enhances readability of code by being more explicit about what props are received by the component. */
    'react/jsx-props-no-spreading': 'off',
    'max-len': [
      'error',
      {
        code: 150,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    /* Enforces the rule of https://reactjs.org/docs/hooks-rules.html */
    'react-hooks/rules-of-hooks': 'error',
    /* This is a new ESLint rule that verifies the list of dependencies for Hooks like useEffect and similar, protecting against the stale closure pitfalls. For most cases it has an autofix. */
    'react-hooks/exhaustive-deps': 'warn',
    // Conflict with prettier - rely on prettier to format on save
    /* This rules enforces an explicit type attribute for all the button elements and checks that its value is valid per spec */
    'react/button-has-type': 0,
    indent: 0,
    'react/state-in-constructor': 0,
    'react/jsx-fragments': 0,
    'consistent-return': 0,
    'guard-for-in': 0,
    'import/no-cycle': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-template': 0,
    'no-continue': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-wrap-multilines': 0,
    'prefer-destructuring': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-confusing-arrow': 0,
    'no-unused-vars': 'warn',
    'no-param-reassign': 'warn',
    'react/no-array-index-key': 0,
    'array-callback-return': 0,
    'react/jsx-curly-newline': 0,
    'no-plusplus': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-restricted-syntax': 0,
    'default-param-last': 0,
    camelcase: 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/require-default-props': 0,
    semi: ['error', 'always'],
  },
};
