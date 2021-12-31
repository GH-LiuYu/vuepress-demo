---
title: 小程序教程
date: 2021-12-06
categories:
 - 微信
tags:
 - 微信
 - 小程序
---

1 下载安装微信开发者工具
2 打开新建项目-选择小程序-新建完成即可

## 底部导航栏配置
打开根目录app.json
增加静态static/images/nav 文件目录 存储图标
````
"tabBar": {
    "color": "#6e6d6b",
    "selectedColor": "#e64340",
    "borderStyle": "white",
    "backgroundColor": "#fff",
    "list": [{
      "pagePath":"pages/index/index",
      "iconPath": "/static/images/nav/home.png",
      "selectedIconPath": "/static/images/nav/home_no.png",
      "text":"首页"
    }, {
      "pagePath":"pages/logs/logs",
      "iconPath": "/static/images/nav/list.png",
      "selectedIconPath": "/static/images/nav/list.png",
      "text":"好友"
    }
    , {
      "pagePath":"pages/logs/logs",
      "iconPath": "/static/images/nav/menu.png",
      "selectedIconPath": "/static/images/nav/menu.png",
      "text":"发布"
    }
    , {
      "pagePath":"pages/logs/logs",
      "iconPath": "/static/images/nav/message.png",
      "selectedIconPath": "/static/images/nav/message.png",
      "text":"消息"
    }, {
      "pagePath":"pages/logs/logs",
      "iconPath": "/static/images/nav/mine.png",
      "selectedIconPath": "/static/images/nav/mine.png",
      "text":"我的"
    }
  ]
  },
````

### 使用自定义组件

step 1
新建component组件文件夹->新建demo(包括js,json,wxml,wxss)

step 2
在demo.json文件中添加
```
{
  "component": true
}
```
step 3 
在demo.js 文件中
````
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})
````

step 4 使用组件

````
使用自定义组件
使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径：

{
  "usingComponents": {
    "component-tag-name": "path/to/the/custom/component"
  }
}
````
















