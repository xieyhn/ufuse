<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    deps: string
    showLabel?: boolean
  }>(), {
    showLabel: true,
  },
)

const depsArr = computed(() => props.deps.split(',').map(dep => dep.trim()))
</script>

<template>
  <span class="inline-block">
    <span v-if="showLabel">依赖项：</span>
    <a
      v-for="dep in depsArr"
      :key="dep"
      class="mr-2"
      target="_bank"
      :href="`https://www.npmjs.com/package/${dep}`"
    >
      {{ dep }}
    </a>
  </span>
</template>
