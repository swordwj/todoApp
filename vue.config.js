module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    outputDir:'dist',//构建输出目录
    assetsDir:'assets',//静态资源目录(js,css,img,fonts)
    lintOnSave:false,//是否开启eslint保存检测,有效值: true || false || 'error'
    devServer:{
        open:true,//是否自动弹出
        host:'localhost',
        port:8080,//端口
        https:false,
        hotOnly:false,//热更新
    }
}