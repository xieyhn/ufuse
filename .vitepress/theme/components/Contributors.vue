<script setup lang="ts">
import { computed } from 'vue'

interface Contributor {
  name: string
}

const props = defineProps<{ contributors: string }>()

const items = computed<Contributor[]>(() => {
  return props.contributors.split(';').map((c) => {
    return { name: c }
  })
})
</script>

<template>
  <div class="flex flex-wrap gap-4 pt-2">
    <div v-for="i of items" :key="i.name" class="flex gap-2 items-center">
      {{ i.name }}
    </div>
  </div>
</template>
