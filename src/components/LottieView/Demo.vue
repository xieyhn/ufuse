<script setup lang="ts">
import { LottieView } from 'ufuse'
import animationData from './loading.json'
</script>

<template>
  <div class="demo">
    <LottieView class="w-40 h-40" :data="animationData" loop />
  </div>
</template>
