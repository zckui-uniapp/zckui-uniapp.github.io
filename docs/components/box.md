---
title: Box 盒子
aside: true
---

# 模板

## 基础用法

```html
<template>
  <zck-box>
    哈哈哈
    <tempalte #footer>
      页脚
    </tempalte>
  </zck-box>
</template>
```

## API

### Props

| 参数 | 说明                                      | 类型     | 默认值   |
| ---- | ----------------------------------------- | -------- | -------- |
| title | 标题 | `string` | - |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | `event: MouseEvent` |

### Slots

| 名称    | 说明       |
| ------- | ---------- |
| header | 头部内容 |
| default | 内容 |
| footer | 底部内容 |
