// eslint.config.mjs
import { flat } from '@eslint/js'

export default flat([
  // 파일/폴더 ignore
  { ignores: ['.eslintrc.js'] },

  // 언어 옵션
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      sourceType: 'module',
      globals: {
        React: 'readonly',
      },
    },
  },

  // 플러그인
  {
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'react-refresh': require('eslint-plugin-react-refresh'),
      import: require('eslint-plugin-import'),
      'react-native': require('eslint-plugin-react-native'),
      prettier: require('eslint-plugin-prettier'),
      boundaries: require('eslint-plugin-boundaries'),
    },
  },

  // extends
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react-native/all',
      'plugin:boundaries/recommended',
      'plugin:prettier/recommended',
    ],
  },

  // 룰
  {
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
      'import/no-unused-modules': ['warn', { unusedExports: true, missingExports: false }],
      'no-unused-expressions': ['error', { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false }],
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false }],
      'react-native/no-raw-text': [
        'error',
        { skip: ['HeaderText','ActionButton','SelectedEmotion','NavigationBar','EmotionList'] },
      ],
      'import/no-internal-modules': ['off', { allow: ['**/src/**'] }],
      'import/order': [
        'error',
        {
          groups: ['builtin','external','internal','parent','sibling','index'],
          pathGroups: [{ pattern: '@/**', group: 'internal', position: 'after' }],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
        },
      ],
      'boundaries/no-unknown-files': 'error',
    },
  },

  // import resolver 설정
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      react: { version: 'detect' },
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**' },
        { type: 'process', pattern: 'src/processes/**' },
        { type: 'page', pattern: 'src/pages/**' },
        { type: 'widget', pattern: 'src/widgets/**' },
        { type: 'feature', pattern: 'src/features/**' },
        { type: 'entity', pattern: 'src/entities/**' },
        { type: 'shared', pattern: 'src/shared/**' },
      ],
    },
  },
])