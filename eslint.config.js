import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
    {
        ignores: ['dist', 'node_modules', '.vite'],
    },
    ...tseslint.configs.strictTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.{ts,tsx}'],
    })),
    ...tseslint.configs.stylisticTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.{ts,tsx}'],
    })),
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.es2020,
            },
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsxA11y,
        },
        rules: {
            // React rules
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,

            // Custom React 19 / Best Practices
            'react/prop-types': 'off', // Not needed with TS
            'react/jsx-no-target-blank': 'error',
            'react/self-closing-comp': 'warn',
            'react/no-array-index-key': 'warn',
            'react/button-has-type': 'warn',
            'react/hook-use-state': 'warn',
            'react/no-unescaped-entities': 'off', // Often annoying with Spanish

            // React Refresh
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],

            // TypeScript specific improvements
            '@typescript-eslint/no-unused-vars': [
                'error',
                {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
            ],
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': [
                'error',
                {checksVoidReturn: {attributes: false}},
            ],

            // General best practices
            'no-console': ['warn', {allow: ['warn', 'error']}],
            'eqeqeq': ['error', 'always'],
            'object-curly-spacing': ['error', 'always'],
            'react/jsx-curly-brace-presence': [
                'error',
                {props: 'never', children: 'never'},
            ],
        },
    },
)
