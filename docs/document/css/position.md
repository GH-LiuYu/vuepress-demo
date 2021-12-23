---
title: position
date: 2021-12-06
categories:
 - css
tags:
 - css
 - position
---

#### position 之fixed 固定位置

可以想象成一张白纸，固定一只铆钉；铆钉定了就是固定了的位置，即使其他位置移动，它也不动
```
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
}
```

#### position 之 absolute
定位是相对应该Dom的上一父级的Dom 位置而言的
```
div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
```

#### position 之 relative
相对定位，意思是相对于自身偏移的位置
比如说 相对于自身向左偏移 30px,那么左边就空出30px
```
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```












