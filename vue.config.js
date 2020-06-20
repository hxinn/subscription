const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

function addStyleResource (rule) {
  rule.use('style-resource')
  .loader('style-resources-loader')
  .options({
      patterns: [
          path.resolve(__dirname, './src/assets/css/index.styl')
      ]
  })
}

module.exports = {
  outputDir: 'dist',
  // publicPath: '/',
  devServer: {
    port: 2088, // 端口
  },
  chainWebpack:(config)=>{
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    config.resolve.alias
    .set('@',resolve('./src'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
    .set('components',resolve('./src/components'))
  },
  // css 相关选项
  css: {
    /*为预处理器 loader 传递自定义选项*/
    loaderOptions: {
        sass: {
            data: `@import "@/assets/css/index.styl";`
        }
    }
},
};
