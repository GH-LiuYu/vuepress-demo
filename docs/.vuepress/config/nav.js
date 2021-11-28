// 导航栏配置
module.exports = [
  { text: '主页', link: '/',icon: 'reco-home'},
  { text: '分类',
    icon: 'reco-category',
    items: [
      { text: 'git', link: '/document/study/js/',icon: 'reco-document' },
      { text: 'css', link: '/document/css/',icon: 'reco-document' },
      { text: '文档', link: '/categories/git/',icon: 'reco-document' },
      { text: '博客', link: 'https://gh-liuyu.github.io/' ,icon: 'reco-blog'}
    ]
  },
  { text: '标签', link: '/tag/',icon: 'reco-tag' },
  { text: '时间线', link: '/timeline/', icon: 'reco-date' },
  { text: '工具',
    icon: 'reco-eye',
    items: [
      { text: 'git', link: '/tool/study/vue/',icon: 'reco-document' },
      { text: 'css', link: '/document/css/',icon: 'reco-document' },
      { text: '文档', link: '/categories/git/',icon: 'reco-document' },
      { text: '博客', link: 'https://gh-liuyu.github.io/' ,icon: 'reco-blog'}
    ]
  },
  { link: 'https://github.com/GH-LiuYu',icon: 'reco-github' },
]
