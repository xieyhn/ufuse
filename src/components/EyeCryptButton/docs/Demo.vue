<script setup lang="ts">
import EyeCryptButton from 'ufuse/src/components/EyeCryptButton/index.vue'
import { ref } from 'vue'

const crypt = ref(true)
const color = ref('rgba(0,0,0,1)')
</script>

<template>
  <div class="demo">
    <div class="flex items-center">
      <input :type="crypt ? 'password' : 'text'" value="000000">
      <!-- 指定尺寸 -->
      <EyeCryptButton v-model:crypt="crypt" :color="color" class="w-6 h-6" />
    </div>
  </div>
</template>
