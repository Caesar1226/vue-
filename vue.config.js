// const project = require('./factory.config')
const path = require('path')

module.exports = {
    lintOnSave: true,
    publicPath: './',
    configureWebpack: {
        // 解决引入的vue问题
        resolve: {
            alias: {
                '@': path.resolve('src'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve('src'),
                    use: ['cache-loader', 'thread-loader', 'babel-loader'],
                },
            ],
        },
    },
}
