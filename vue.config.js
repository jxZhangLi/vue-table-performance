const path = require('path')

module.exports = {
    transpileDependencies: [
        'element-ui'
    ],
    configureWebpack: {
        resolve: {
            alias: {
               // 'element-ui':  path.resolve(__dirname, 'node_modules/element-ui/src')
            }
        }
    }
}