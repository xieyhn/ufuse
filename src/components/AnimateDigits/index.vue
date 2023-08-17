<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import gsap from 'gsap'
import type { AnimateDigitsEvents, AnimateDigitsProps } from './types'

const props = withDefaults(
  defineProps<AnimateDigitsProps>(),
  {
    duration: 1000,
    formatter: (v: number) => v,
  },
)
const emit = defineEmits<AnimateDigitsEvents>()
const value = ref(0)
let isRun = false
let tween: gsap.core.Tween | null = null

watch(() => props.value, () => {
  if (tween)
    tween.kill()

  if (props.disabled || (props.once && isRun)) {
    value.value = props.value
  }
  else {
    isRun = true
    const startValue = value.value
    const endValue = props.value
    const delta = endValue - startValue

    tween = gsap.to({}, {
      duration: props.duration / 1000,
      onUpdate: () => {
        const progress = tween!.progress()
        if (progress === 1) {
          value.value = endValue
          return
        }
        if (typeof props.step === 'undefined')
          value.value = progress * delta + startValue
        else
          value.value = Math.floor(progress * delta / props.step) * props.step + startValue
      },
      onComplete: () => emit('complete'),
    })
  }
}, { immediate: true })

onBeforeUnmount(() => {
  tween?.kill()
})
</script>

<template>
  <span>{{ props.formatter(value) }}</span>
</template>
