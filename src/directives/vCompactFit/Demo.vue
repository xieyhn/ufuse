<script setup lang="ts">
import { vCompactFit } from 'ufuse'
</script>

<template>
  <div class="demo flex items-center">
    <span>|</span>
    <div class="w-[100px]">
      <!-- 将元素设置为非行内元素以便适用 transform，并根据实际业务需求调整 transform-origin -->
      <span v-compact-fit class="inline-block origin-left">1419501231.33</span>
    </div>
    <span>|</span>
    <div class="w-[100px] text-center">
      <!-- 如果元素宽度超出父元素宽度的 80%，则会被缩小至父元素宽度的 80% -->
      <span v-compact-fit="{ compactWidth: '80%' }" class="inline-block">1244444.33</span>
    </div>
    <span>|</span>
    <div class="w-[100px] text-center">
      <!-- 如果元素宽度超出 80px，则会被缩小至 80px -->
      <span v-compact-fit="{ compactWidth: 80 }" class="inline-block">1244444.33</span>
    </div>
    <span>|</span>
    <div class="w-[100px] text-center">
      <!-- 如果元素宽度没有超出，则什么都不做 -->
      <span v-compact-fit class="inline-block">12.33</span>
    </div>
    <span>|</span>
  </div>
</template>
