<script setup lang="ts">
import { ref } from 'vue'
import FadeTransition from 'ufuse/components/FadeTransition/index.vue'

const flag = ref(false)
</script>

<template>
  <div class="demo">
    <div class="w-32 h-32 shadow-lg" @click="flag = !flag">
      <FadeTransition>
        <div v-if="flag" class="w-32 h-32 bg-white absolute" />
        <div v-else class="w-32 h-32 bg-black absolute" />
      </FadeTransition>
    </div>
  </div>
</template>
