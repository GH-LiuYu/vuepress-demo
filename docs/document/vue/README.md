---
title: 基于vant组件库的移动项目
date: 2021-12-06
categories:
 - vue
tags:
 - vant
---

# 安装vue-cli
##  npm 安装
```
npm install -g @vue/cli
```
## 创建新项目
```
vue create hello-world //名字自取 选择默认选项就行了
```
## npm 安装vant 是基于vue3 项目
```
npm i vant@3
```

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

原始代码
```
import { Button } from 'vant';

// 编译后代码
import Button from 'vant/es/button';
import 'vant/es/button/style';
```













