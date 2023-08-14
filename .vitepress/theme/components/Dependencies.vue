<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  deps: string
}>()

const depsArr = computed(() => props.deps.split(',').map(dep => dep.trim()))
</script>

<template>
  <p>依赖项：<a v-for="dep in depsArr" :key="dep" target="_bank" :href="`https://www.npmjs.com/package/${dep}`">{{ dep }}</a></p>
</template>
