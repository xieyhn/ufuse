<script setup lang="ts">
import Demo from './Demo.vue'
</script>

# useElementsAfterMount

useElementsAfterMount 可以收集一些 DOM 节点，等到组件挂载后对这些再执行一些操作。

> 在组件挂载时需要对一些元素做入场动画时候这很有用，这样就避免需要声明很多 ref 来获取这些元素。

## 使用

<<< ./Demo.vue

## 预览

<Demo />
