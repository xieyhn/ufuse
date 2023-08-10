<script setup lang="ts">
import { EyeCryptButton } from 'ufuse'
import { ref } from 'vue'

const crypt = ref(true)
</script>

<template>
  <div class="demo">
    <div class="flex items-center">
      <input :type="crypt ? 'password' : 'text'" value="000000">
      <!-- 指定尺寸 -->
      <EyeCryptButton v-model:crypt="crypt" class="w-6 h-6" />
    </div>
  </div>
</template>
