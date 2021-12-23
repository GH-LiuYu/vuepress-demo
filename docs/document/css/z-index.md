---
title: css 固定顶部栏之位置z-index属性
date: 2021-12-06
categories:
 - css
tags:
 - css
 - 固定顶部栏
---

#### z-index 属性用来干嘛的？
答：最要是叠层关系，最上的z-index 值最大

#### z-index 属性什么时候需要用到？
答：比如列表下拉时，需要导航栏顶部固定时，可以设置z-index 最大即最顶层即可
````
要使用，需要指定该DOM元素的position 属性，再添加z-index 值
z-index 的作用是作为层叠级，可以想象成一叠书，最上层的z-index值最大，如果想要在最上面就设置最大值即可以此类推
````













