// 导航栏配置
module.exports = [

    //看板插件
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
    theme: [
      'whiteCat', 'miku', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
    ],
    clean: false,
    messages: {
      welcome: '欢迎来到我的世界', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
    },
    messageStyle: { right: '68px', bottom: '290px' },
    width: 250,
    height: 320
  }
  ],

  //公告插件
  // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
  //     title: '公告',
  //     body: [
  //         {
  //             type: 'title',
  //             content: '欢迎加我的QQ/vx 🎉🎉🎉',
  //             style: 'text-aligin: center;',
  //         },
  //         {
  //             type: 'text',
  //             content: 'VX：XHM3390',
  //             style: 'text-align: center;'
  //         },
  //         {
  //             type: 'image',
  //             src: '/zfb.jpg',
  //         }
  //     ],
  //     footer: [
  //         {
  //             type: 'button',
  //             text: '打赏',
  //             link: '/blog/donate'
  //         },
  //     ]
  // }],


  //播放器插件
  // [
  //     "@vuepress-reco/vuepress-plugin-bgm-player",{
  //     audios: [
  //         // 本地文件示例
  //         // {
  //         //   name: '장가갈 수 있을까',
  //         //   artist: '咖啡少年',
  //         //   url: '/bgm/1.mp3',
  //         //   cover: '/bgm/1.jpg'
  //         // },
  //         // 网络文件示例
  //         {
  //             name: '강남역 4번 출구',
  //             artist: 'Plastic / Fallin` Dild',
  //             url: 'https://assets.smallsunnyfox.com/music/2.mp3',
  //             cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
  //         },
  //         {
  //             name: '用胳膊当枕头',
  //             artist: '최낙타',
  //             url: 'https://assets.smallsunnyfox.com/music/3.mp3',
  //             cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
  //         }
  //     ]
  // }
  // ],


  //鼠标点击特效插件
  [
    "vuepress-plugin-cursor-effects",
    {
      size: 2,                    // size of the particle, default: 2
      shape: 'circle',  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    }
  ],


  //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
  [
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "王者归来",
      hideIcon: "/failure.ico",
      hideText: "(●—●)呜呜~~不要走",
      recoverTime: 2000
    }
  ],


  //图片放大插件 先安装在配置， npm install @vuepressplugin-medium-zoom --save
  [
    '@vuepressplugin-medium-zoom', {

  }
  ],


  //npm install vuepress-plugin-sakura -D  樱花插件
  ["sakura", {
    num: 20,  // 默认数量
    show: true, //  是否显示
    zIndex: -1,   // 层级
    img: {
      replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: '...'     // 绝对路径
    }
  }],


  //彩带特效npm install vuepress-plugin-ribbon-animation -D
  ["ribbon-animation", {
    size: 90,   // 默认数据
    opacity: 0.3,  //  透明度
    zIndex: -1,   //  层级
    opt: {
      // 色带HSL饱和度
      colorSaturation: "80%",
      // 色带HSL亮度量
      colorBrightness: "60%",
      // 带状颜色不透明度
      colorAlpha: 0.65,
      // 在HSL颜色空间中循环显示颜色的速度有多快
      colorCycleSpeed: 6,
      // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
      verticalPosition: "center",
      // 到达屏幕另一侧的速度有多快
      horizontalSpeed: 200,
      // 在任何给定时间，屏幕上会保留多少条带
      ribbonCount: 2,
      // 添加笔划以及色带填充颜色
      strokeSize: 0,
      // 通过页面滚动上的因子垂直移动色带
      parallaxAmount: -0.5,
      // 随着时间的推移，为每个功能区添加动画效果
      animateSections: true
    },
    ribbonShow: false, //  点击彩带  true显示  false为不显示
    ribbonAnimationShow: true  // 滑动彩带
  }],


  // 打赏
//    require('./plugins/DonateSimple/script.js'),
  ['reward', {
    btnText: '打赏', // 奖励按钮文字。
    title: '给作者赏一杯咖啡吧', // 第一个奖励文字。
    subTitle: '您的支持将是我继续更新下去的动力', // 第二奖励文字。
    rewardOption: [ // 您的QR码图片。
      {
        text: '微信赞赏码',
        url: '/wx.jpg' // ddd 图片到 docs/.vuepress/public
      },
      {
        text: '支付宝赞赏码',
        url: '/zfb.jpg' // ddd 图片到 docs/.vuepress/public
      }
    ],
//      showInMobile: true // 是否在移动端显示，默认值：false。
  }],


  //代码复制插件
  ["vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }
  ],


  //站点地图插件
  [
    "sitemap",
    {
      hostname: "https://gh-liuyu.github.io/", // 替换成你的地址
      exclude: ['/404.html'],
      dateFormatter: time => {
        return time
      }
    }
  ],


  //自动生成左侧栏,不能生成分组侧边栏，只能生成单组下多篇文章的侧边栏
  ["vuepress-plugin-auto-sidebar", {

  }],


  //配置github评论插件
  // ['@vssue/vuepress-plugin-vssue', {
  //         // set `platform` rather than `api`
  //         platform: 'github',
  //         // all other options of Vssue are allowed
  //         owner: 'GH-LiuYu',
  //         repo: 'vuepress-blog',
  //         clientId: 'e1a55af9fe51bc349a45',
  //         clientSecret: '7f80b4c7619cf6a11d42cfa361da084823dea67d',
  //     },
  //
  // ],
  //分享插件
  // ['social-share'],
  //二维码插件


  //站点二维码插件
  ['qrcode',{
    // "/" and "/zh/" correspond to the path set by locales
    labelText: {
      "/": "QRCode",
      "/zh/": "二维码",
    },
    size:'small' // QR code size
  }],


  //文章评论插件valine
  [
    'vuepress-plugin-comment',
    {
      choosen: 'valine',
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: '#valine-vuepress-comment',
        appId: 'aVeufCvaMrvXyTA4FvAX7r7C-gzGzoHsz',
        appKey: '79Oh2M7GVasYNvEWOD8bF8SX'
      }
    }
  ]



]
