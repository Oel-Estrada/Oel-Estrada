import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const { FlatCompat } = require('@eslint/eslintrc');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: require('@eslint/js').configs.recommended,
});

export default [
    ...compat.extends(
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ),
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
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
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
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // 1. React and React runtime APIs
                        [
                            '^react(?:$|/)',
                            '^react-dom(?:$|/)',
                            '^react/jsx-runtime$',
                            '^react/jsx-dev-runtime$',
                        ],
                        // 2. External libraries (npm packages, including scoped)
                        ['^@?\\w'],
                        // 3. Absolute project imports (alias @/)
                        ['^@/'],
                        // 4. Relative imports (parent then sibling)
                        ['^\\.\\./', '^\\./'],
                        // 5. Styles (CSS/SCSS)
                        ['^.+\\.s?css$'],
                        // 6. Assets (images, svgs, etc.)
                        ['^.+\\.(png|jpe?g|gif|svg|webp|avif|ico)$'],
                        // 7. Side effect imports
                        ['^\\u0000'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'prettier/prettier': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: { '@typescript-eslint/consistent-type-imports': 'error' },
    },
];
