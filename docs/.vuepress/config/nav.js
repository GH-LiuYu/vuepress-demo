// 导航栏配置
module.exports = [
  { text: '主页', link: '/',icon: 'reco-home'},
  { text: '分类',
    icon: 'reco-category',
    items: [
      { text: 'git', link: '/categories/git/',icon: 'reco-document' },
      { text: '博客', link: '/categories/blog/' ,icon: 'reco-blog'}
    ]
  },
  { text: '标签', link: '/tag/',icon: 'reco-tag' },
  { text: '时间线', link: '/timeline/', icon: 'reco-date' },
  { text: '工具', link: '/tool',icon: 'reco-eye' },
  { link: 'https://github.com/GH-LiuYu',icon: 'reco-github' },
]
