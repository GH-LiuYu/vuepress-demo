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
  { text: '收藏', link: '/document/mark/',icon: 'reco-eye' },
  { text: '时间线', link: '/timeline/', icon: 'reco-date' },
  { text: '工具',
    icon: 'reco-eye',
    items: [
      { text: '在线markdown', link: 'https://www.zybuluo.com/mdeditor' ,icon: 'reco-blog'}
    ]
  },
  { text:'GitHub',link: 'https://github.com/GH-LiuYu',icon: 'reco-github' },
  { text: '关于我', link: '/document/about/',icon: 'reco-coding' },
]
