/* eslint-disable */
const { FlatCompat } = require('@eslint/eslintrc');

// Use recommended config from @eslint/js for FlatCompat
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: require('@eslint/js').configs.recommended,
});

module.exports = [
    // extend legacy shareable configs via compatibility helper
    ...compat.extends(
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ),
    // global ignores previously in .eslintignore
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            'public/**',
            'pnpm-lock.yaml',
            '.vite',
        ],
    },
    // apply rules and plugins for source files
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
                // If you want type-aware linting, uncomment the next line and ensure tsconfig.json exists
                // project: path.resolve(__dirname, 'tsconfig.json'),
            },
        },
        plugins: {
            react: require('eslint-plugin-react'),
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
            'react-hooks': require('eslint-plugin-react-hooks'),
            'simple-import-sort': require('eslint-plugin-simple-import-sort'),
            prettier: require('eslint-plugin-prettier'),
        },
        settings: { react: { version: 'detect' } },
        rules: {
            'react/jsx-curly-brace-presence': [
                'error',
                { props: 'never', children: 'never' },
            ],
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'prettier/prettier': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
        },
    },
    // file-specific overrides
    {
        files: ['**/*.{ts,tsx}'],
        rules: { '@typescript-eslint/consistent-type-imports': 'error' },
    },
];
