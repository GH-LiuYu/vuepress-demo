// 导航栏配置
module.exports = [
  ['link', { rel: 'icon', href: '/vuepress/favicon.ico' }],
  // 移动栏优化
  ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  // 引入jquery
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
  }],
  // 引入鼠标点击脚本
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    // "src": "../js/MouseClickEffect.js"
  }]
]
