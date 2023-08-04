<script setup lang="ts">
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
</script>

<template>
  <Transition name="fade" v-bind="attrs">
    <slot />
  </Transition>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: var(--ufuse-transition-duration, 300ms);
  transition-timing-function: var(--ufuse-transition-timing-function);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
