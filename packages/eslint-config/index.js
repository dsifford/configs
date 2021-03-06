module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        /**
         * core
         */
        'no-inner-declarations': 'off',
        'no-redeclare': 'off',

        /**
         * @typescript-eslint
         */
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/unbound-method': 'off',

        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
            },
        ],
        '@typescript-eslint/unified-signatures': 'error',

        /**
         * jsx-a11y
         */
        'jsx-a11y/no-onchange': 'off',

        /**
         * react
         */
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: true,
            },
        ],
    },
};
