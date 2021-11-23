module.exports = {
    theme: 'reco',
    title: 'vuepress-theme-reco',
    description: '一款简洁而优雅的 vuepress 博客 & 文档 主题',

    themeConfig: {
        smoothScroll: true,
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/blog/index',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */ ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ],
        subSidebar:'auto',
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
        nav:
            [
                { text: '文档', link: '/',icon: 'reco-document'},
                { text: '博客', link: '/blog/index' ,icon: 'reco-blog'},
                { text: '标签', link: '/tags/tag1/1/',icon: 'reco-tag' },
                { text: 'GitHub', link: 'https://github.com/GH-LiuYu',icon: 'reco-github' },
                { text: '案例',
                    items: [
                        { text: '下拉1', link: '/docs/theme-reco/theme' },
                        { text: '下拉2', link: '/blogs/other/guide' }
                    ]
                },
            ],
    },
    plugins: [
        [
            'vuepress-plugin-sponsor',
            {
                theme: 'simple',
                alipay: '/logo.png',
                wechat: '/logo.png',
                qq: '/logo.png',
                paypal: 'https://www.paypal.me/yokefellow',
                duration: 2000
            }
        ]
    ]
}
