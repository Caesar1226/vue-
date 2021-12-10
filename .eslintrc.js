module.exports = {
    root: true,

    env: {
        node: true,
        es6: true,
    },

    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],

    plugins: ['prettier'],

    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 6, //js的版本 },  rules: {
        quotes: [1, 'single'], //这个地方很迷，要为eslint配置类似于prettierrc的格式化代码，才会在vue的template中起作用
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}
