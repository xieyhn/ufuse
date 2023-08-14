<script setup lang="ts">
import { ref } from 'vue'
import vPull from 'ufuse/src/directives/vPull'

const key = ref(Date.now())
</script>

<template>
  <div class="demo">
    <button @click="key = Date.now()">
      重新渲染
    </button>
    <br>
    <div :key="key" class="mt-10 inline-flex flex-col">
      <span v-pull>从左到右</span>
      <br>
      <span v-pull="{ direction: 'r2l' }">从右到左</span>
      <br>
      <span v-pull="{ direction: 't2b' }">从上到下</span>
      <br>
      <span v-pull="{ direction: 'b2t' }">从下到上</span>
    </div>
  </div>
</template>
