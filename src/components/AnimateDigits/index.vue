<script setup lang="ts">
import { onBeforeUnmount, ref, watchEffect } from 'vue'
import gsap from 'gsap'
import type { AnimateDigitsEvents, AnimateDigitsProps } from './types'

const props = withDefaults(
  defineProps<AnimateDigitsProps>(),
  {
    duration: 1000,
    formatter: (v: number) => `${v}`,
  },
)
const emit = defineEmits<AnimateDigitsEvents>()
const value = ref(0)
let isRun = false
let tween: gsap.core.Tween | null = null

watchEffect(() => {
  if (tween)
    tween.kill()

  if (props.disabled || (props.once && isRun)) {
    value.value = props.value
  }
  else {
    isRun = true
    tween = gsap.to(value, {
      duration: props.duration / 1000,
      value: props.value,
      onComplete: () => emit('complete'),
    })
  }
})

onBeforeUnmount(() => {
  tween?.kill()
})
</script>

<template>
  <span>
    <span>{{ props.formatter(value) }}</span>
  </span>
</template>
