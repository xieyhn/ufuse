<script setup lang="ts">
import Demo from './Demo.vue'
</script>

# FadeTransition

FadeTransition 提供开箱使用的渐变动画

## 使用

<<< ./Demo.vue

## 预览

<Demo />

## CSS 变量

| 变量名        |      说明      |  缺省值 |
| ------------- | :-----------: | ----: |
| --ufuse-transition-duration  | 过渡持续时长 | 300ms |
| --ufuse-transition-timing-function | 过渡曲线 |  |

## 原 Transition 属性

如果想透传给 Transition 的属性，可以直接写在 FadeTransition 上，例如：

> TODO: 解决这里的 TypeScript 类型提示 :thinking:

```vue
<template>
  <FadeTransition mode="out-in" />
</template>
```
