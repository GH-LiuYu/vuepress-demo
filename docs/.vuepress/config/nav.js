// 导航栏配置
module.exports = [
  { text: '主页', link: '/',icon: 'reco-home'},
  { text: '分类',
    icon: 'reco-category',
    items: [
      { text: '文档', link: '/documents/index',icon: 'reco-document' },
      { text: '博客', link: '/blog/index' ,icon: 'reco-blog'}
    ]
  },
  { text: '标签', link: '/tags/tag1/1/',icon: 'reco-tag' },
  { text: 'GitHub', link: 'https://github.com/GH-LiuYu',icon: 'reco-github' },
]
