// const path = require('path')
// function resolve (dir) {
// return path.join(__dirname, dir)
// }
// module.exports = {
//     lintOnSave: true,
//     chainWebpack: (config)=>{
//         config.resolve.alias
//             .set('public', resolve('public'))
//     },
//     configureWebpack:{
//         baseUrl: './',
//         productionSourceMap: false,
//         optimization: {
//             splitChunks: {
//             minSize: 10000,
//             maxSize: 250000,
//             }
//         }
//     },
// }
module.exports = {
  publicPath: './'
}
