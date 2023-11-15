module.exports = {
  plugins: [
    'import',
    'unused-imports',
    'typescript-sort-keys',
    'sort-destructure-keys',
  ],
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'plugin:typescript-sort-keys/recommended',
    'google',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        // tsconfig 사용
        project: './tsconfig.json',
      },
    },
  },
  globals: {
    React: true,
  },
  rules: {
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'react/jsx-sort-props': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    indent: 'off',
    'prettier/prettier': ['error'],
    'require-jsdoc': 0,
    'object-curly-spacing': 0,
    'max-len': [2, { code: 150 }],
    'quote-props': ['error', 'as-needed'],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    camelcase: ['warn'],
    'no-unused-vars': ['warn'],
    'no-undef': ['warn'],
    'no-throw-literal': ['off'],
    'no-useless-escape': ['off'],
    'sort-imports': [
      // 모듈 내에서 import문 정렬 옵션
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      // import 우선순위 및 그룹화 옵션
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**,next*,next*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@steadioTypes/*',
            group: 'type',
          },
          {
            pattern: '@assets/**/*.svg',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next', 'unknown'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
