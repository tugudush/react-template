import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        RequestInit: true,
        BodyInit: true,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      // JavaScript recommended rules
      ...js.configs.recommended.rules,

      // TypeScript recommended rules
      ...tsPlugin.configs.recommended.rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Prettier recommended rules
      ...prettierPlugin.configs.recommended.rules,

      // Import plugin rules
      ...importPlugin.configs.recommended.rules,

      // Additional rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Prettier formatting rule
      'prettier/prettier': 'warn',

      // Customize the quotes rule
      quotes: [
        'warn',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],

      // Allow one blank line after imports (commented out if Prettier handles it)
      // 'import/newline-after-import': ['warn', { count: 1 }],
    },
  },
]
