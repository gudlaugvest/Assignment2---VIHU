import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,

  {
    rules: {
      camelcase: ['error', { properties: 'always' }],

      'no-restricted-imports': [
        'error',
        {
          name: 'moment',
          message:
            'Usage of moment.js is forbidden. Consider using date-fns or native Date API.',
        },
      ],

      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
];
