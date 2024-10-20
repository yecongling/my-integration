module.exports = {
    parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
    extends: [
        'eslint:recommended', // ESLint 推荐规则
        'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
        'plugin:react/recommended', // React 推荐规则
        'airbnb', // 使用 Airbnb 的规范
        'plugin:prettier/recommended', // Prettier 推荐规则
    ],
    plugins: ['@typescript-eslint', 'react', 'prettier'], // 使用的插件
    parserOptions: {
        ecmaVersion: 2020, // 支持 ECMAScript 2020
        sourceType: 'module', // 使用 ES 模块
        ecmaFeatures: {
            jsx: true, // 支持 JSX 语法
        },
    },
    settings: {
        react: {
            version: 'detect', // 自动检测 React 版本
        },
    },
    env: {
        browser: true, // 浏览器全局变量
        node: true, // Node.js 全局变量
        es6: true, // 支持 ES6 全局变量
    },
    rules: {
        'prettier/prettier': 'error', // Prettier 格式化问题作为错误处理
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // 允许在 .tsx 文件中使用 JSX
        '@typescript-eslint/no-unused-vars': ['error'], // 禁止未使用的变量
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
            },
        ], // 忽略文件扩展名
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // 仅对 .ts 和 .tsx 文件应用 TypeScript 规则
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭对显式类型的强制要求
            },
        },
    ],
};