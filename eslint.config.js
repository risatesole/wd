import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      // existing rules
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',

      // enforce naming conventions
      '@typescript-eslint/naming-convention': [
        'error',
        // variables, function names, constants → camelCase
        {
          selector: 'variableLike',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        // class, interface, type → PascalCase
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        // enum members → UPPER_CASE
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
      ],
    },
  },
]
