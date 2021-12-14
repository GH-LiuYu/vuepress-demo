---
title: 基于vuepress的博客搭建
date: 2021-12-06
categories:
 - vuepress
tags:
 - vuepress
---

## 安装vuepress

## vant 组件的引入
### 在.babelrc 或 babel.config.js 中添加配置

```
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

### 在项目中引入并使用组件


```
//原始代码
import { Button } from 'vant';

// 编译后代码
import Button from 'vant/es/button';
import 'vant/es/button/style';
```













