<script setup lang="ts">
import { onBeforeUnmount, ref, watchEffect } from 'vue'
import gsap from 'gsap'
import formatNumber from 'ufuse/utils/formatNumber'
import type { AnimateDigitsProps } from './types'

const props = withDefaults(
  defineProps<AnimateDigitsProps>(),
  {
    suffix: '',
    fractionDigits: 0,
    duration: 1000,
    disabled: false,
  },
)

const value = ref(0)
let tween: gsap.core.Tween | null = null

watchEffect(() => {
  if (tween)
    tween.kill()

  if (props.disabled) {
    value.value = props.n
  }
  else {
    tween = gsap.to(value, {
      duration: props.duration / 1000,
      value: props.n,
    })
  }
})

onBeforeUnmount(() => {
  tween?.kill()
})
</script>

<template>
  <span>
    <span>{{ formatNumber(value, props.fractionDigits) }}</span>
    <span v-if="props.suffix">{{ props.suffix }}</span>
  </span>
</template>
