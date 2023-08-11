<script setup lang="ts">
import Lottie, { type AnimationItem } from 'lottie-web'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import type { EyeCryptButtonEvents, EyeCryptButtonProps } from './types'
import animationData from './source.json'

const props = withDefaults(
  defineProps<EyeCryptButtonProps>(),
  {
    duration: 300,
  },
)
const emit = defineEmits<EyeCryptButtonEvents>()
const container = ref<HTMLElement>()
const frame = { v: 0 }
let animation: AnimationItem | null = null
let tween: gsap.core.Tween | null = null

onMounted(() => {
  animation = Lottie.loadAnimation({
    container: container.value!,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData,
  })

  if (props.crypt)
    animation.goToAndStop(0, true)
  else
    animation.goToAndStop(10, true)

  watch(() => props.crypt, () => {
    tween?.kill()
    tween = gsap.to(frame, {
      v: props.crypt ? 0 : 10,
      ease: 'none',
      duration: props.duration / 1000,
      onUpdate: () => {
        animation?.goToAndStop(frame.v, true)
      },
    })
  })
})

onBeforeUnmount(() => {
  animation?.destroy()
  tween?.kill()
})
</script>

<template>
  <div ref="container" class="eye-crypt-button" @click="emit('update:crypt', !props.crypt)" />
</template>

<style lang="css">
.eye-crypt-button {
  cursor: pointer;
}
</style>
