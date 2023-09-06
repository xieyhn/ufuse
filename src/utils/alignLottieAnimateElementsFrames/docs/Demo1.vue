<script setup lang="ts">
import { alignLottieAnimateElementsFrames } from 'ufuse/src/utils/alignLottieAnimateElementsFrames'
import LottieView from 'ufuse/src/components/LottieView/index.vue'
import demo1 from './demo1.json'

const data = alignLottieAnimateElementsFrames(JSON.parse(JSON.stringify(demo1)))

// 打开控制台可以看到修改后的 Lottie JSON 数据（有着 demo1 字样）。
// eslint-disable-next-line no-console
console.log('demo1: ', data)
</script>

<template>
  <LottieView class="demo w-[400px] h-[400px]" :data="data" loop />
</template>
