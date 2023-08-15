<script setup lang="ts">
import { ref } from 'vue'
import useContain from 'ufuse/src/hooks/useContain'

const el = ref<HTMLElement>()

useContain({ el, designWidth: 1920, designHeight: 1080 })
</script>

<template>
  <div class="demo">
    <div class="w-80 h-80 relative bg-neutral-500">
      <div ref="el" class="bg-red-200" />
    </div>
  </div>
</template>
