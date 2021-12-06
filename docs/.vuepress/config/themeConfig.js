// 导航栏配置
const nav = require('./nav.js');
const sidebar = require('./sidebar.js');
module.exports = {
    //导航栏
    nav:nav,
    // sidebar: sidebar,//生成左侧边栏 --如插件已使用 此处可以不用
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
    //配置文章随机分配封面图
    covers: [
        'https://pan.zealsay.com/zealsay/cover/7.jpg',
        'https://pan.zealsay.com/zealsay/cover/1.jpg',
        'https://pan.zealsay.com/zealsay/cover/2.jpg',
        'https://pan.zealsay.com/zealsay/cover/3.jpg',
        'https://pan.zealsay.com/zealsay/cover/4.jpg',
        'https://pan.zealsay.com/zealsay/cover/5.jpg',
        'https://pan.zealsay.com/zealsay/cover/6.jpg',
    ],
    //底部栏备案信息*
    record: 'ICP 备案文案',

    recordLink: 'ICP 备案指向链接',

    cyberSecurityRecord: '公安部备案文案',

    cyberSecurityLink: '公安部备案指向链接',

    startYear: '2021', // 项目开始时间，只填写年份

    author: 'LIUYU',//作者姓名

    huawei: true,//华为文案

    authorAvatar: '/logo.jpg',//头像

    logo: '/logo.jpg',//左侧logo

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

}
