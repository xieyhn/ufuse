<script setup lang="ts">
import { onBeforeUnmount, ref, watchEffect } from 'vue'
import gsap from 'gsap'
import type { AnimateDigitsEvent, AnimateDigitsProps } from './types'

const props = withDefaults(
  defineProps<AnimateDigitsProps>(),
  {
    duration: 1000,
    disabled: false,
    formatter: (v: number) => `${v}`,
  },
)
const emit = defineEmits<AnimateDigitsEvent>()
const value = ref(0)
let tween: gsap.core.Tween | null = null

watchEffect(() => {
  if (tween)
    tween.kill()

  if (props.disabled) {
    value.value = props.value
  }
  else {
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
