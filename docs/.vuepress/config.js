const sidebar = require('./config/sidebar.js');
const nav = require('./config/nav.js');
const head = require('./config/head.js');
module.exports = {
    theme: 'reco',
    title: 'vuepress-theme-reco',
    description: '一款简洁而优雅的 vuepress 博客 & 文档 主题',
    head: head,
    themeConfig: {
        nav:nav,
        sidebar: sidebar,
        subSidebar:'auto',//生成打开页面的右侧栏
        style: '@vuepress-reco/style-default',
        logo: '/logo.png',
        author: '刘域',
        docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
        docsBranch: 'main',
        docsDir: 'example',
        lastUpdatedText: '',
        // series 为原 sidebar
        series: {
            '/docs/theme-reco/': [
                {
                    text: 'module one',
                    children: ['home', 'theme']
                },
                {
                    text: 'module two',
                    children: ['api', 'plugin']
                }
            ]
        },

    },
    plugins: {
        'vuepress-plugin-sponsor': {
            theme: 'simple',
            alipay: '/logo.png',
            wechat: '/logo.png',
            qq: '/logo.png',
            paypal: 'https://www.paypal.me/yokefellow',
            duration: 2000
        }
    }
}
