const sidebar = require('./config/sidebar.js');
const nav = require('./config/nav.js');
const head = require('./config/head.js');
module.exports = {
    theme: 'reco',
    title: '一只高星子',
    description: '穷人靠变异,富人靠科技',
    head: head,
    themeConfig: {
        nav:nav,//导航栏
        // sidebar: sidebar,//侧边栏
        subSidebar:'auto',//生成打开页面的右侧栏
        type: 'blog',//开启博客模式
        //添加博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/recoluan' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            ]
        },

        //底部栏备案信息*
        record: 'ICP 备案文案',
        recordLink: 'ICP 备案指向链接',
        cyberSecurityRecord: '公安部备案文案',
        cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2017',

        author: '小火汁',//作者姓名

        huawei: true,//华为文案

        authorAvatar: '/bg.jpg',//头像

        logo: '/bg3.jpg',//左侧logo

        //友好链接
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
        ]

    },
    plugins: [
        [
            '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
            theme: [
                'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
            ],
            clean: false,
            messages: {
                welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
            },
            messageStyle: { right: '68px', bottom: '290px' },
            width: 250,
            height: 320
        }
        ],
        ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
            title: '公告',
            body: [
                {
                    type: 'title',
                    content: '欢迎加我的QQ/vx 🎉🎉🎉',
                    style: 'text-aligin: center;',
                },
                {
                    type: 'text',
                    content: 'VX：XHM3390',
                    style: 'text-align: center;'
                },
                {
                    type: 'image',
                    src: '/zfb.jpg',
                }
            ],
            footer: [
                {
                    type: 'button',
                    text: '打赏',
                    link: '/blog/donate'
                },
            ]
        }],
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",{
            audios: [
                // 本地文件示例
                // {
                //   name: '장가갈 수 있을까',
                //   artist: '咖啡少年',
                //   url: '/bgm/1.mp3',
                //   cover: '/bgm/1.jpg'
                // },
                // 网络文件示例
                {
                    name: '강남역 4번 출구',
                    artist: 'Plastic / Fallin` Dild',
                    url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                    cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
                },
                {
                    name: '用胳膊当枕头',
                    artist: '최낙타',
                    url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                    cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
                }
            ]
        }
        ],
        [
            "vuepress-plugin-cursor-effects",
            {
                size: 2,                    // size of the particle, default: 2
                shape: 'circle',  // shape of the particle, default: 'star'
                zIndex: 999999999           // z-index property of the canvas, default: 999999999
            }
        ],
        ['@vuepress-reco/vuepress-plugin-pagation',{}]
    ],
}
