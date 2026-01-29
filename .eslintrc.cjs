module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    settings: {
        react: { version: 'detect' },
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'simple-import-sort',
        'prettier',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        // Enforce using string literals instead of JSX expression wrappers for props/children: {'x'} -> "x"
        'react/jsx-curly-brace-presence': [
            'error',
            { props: 'never', children: 'never' },
        ],

        // React 17+ doesn't require React in scope for JSX
        'react/react-in-jsx-scope': 'off',

        // Hooks rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Import sorting
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',

        // Prettier integration
        'prettier/prettier': 'error',

        // Use TypeScript-specific no-unused-vars (disable base rule)
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/consistent-type-imports': 'error',
            },
        },
    ],
};
