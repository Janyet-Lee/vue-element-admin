// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  // 以下为前端本地开发使用
  dev: {
    port: 9527, // 项目端口号
    target: '123' // 接口转发地址
  },
  // 以下为打包发布使用
  publicPath: ''
}
