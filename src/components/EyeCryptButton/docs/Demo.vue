<script setup lang="ts">
import EyeCryptButton from 'ufuse/src/components/EyeCryptButton/index.vue'
import { ref } from 'vue'

const crypt = ref(true)
</script>

<template>
  <div class="demo">
    <div class="flex items-center">
      <input :type="crypt ? 'password' : 'text'" value="000000">
      <!-- 指定尺寸 -->
      <EyeCryptButton v-model:crypt="crypt" color="#10b981" class="w-6 h-6" />
      <EyeCryptButton v-model:crypt="crypt" color="rgb(16, 185, 129)" class="w-6 h-6 ml-2" />
      <EyeCryptButton v-model:crypt="crypt" color="rgba(16, 185, 129, 0.5)" class="w-6 h-6 ml-2" />
    </div>
  </div>
</template>
