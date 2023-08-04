<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { AnimationItem } from 'lottie-web'
import Lottie from 'lottie-web'
import type { LottieViewProps } from './types'

const props = defineProps<LottieViewProps>()
const container = ref<HTMLElement>()
let animation: AnimationItem | null = null
let delayRunTimer: number | null = null

function runAnimation() {
  animation = Lottie.loadAnimation({
    container: container.value!,
    animationData: props.data,
    loop: props.loop ?? false,
    autoplay: true,
    renderer: props.renderer ?? 'svg',
  })

  if (typeof props.segments !== 'undefined')
    animation.playSegments(props.segments, false)
}

function destroyAnimation() {
  animation?.destroy()
}

onMounted(() => {
  if (typeof props.delay !== 'undefined')
    delayRunTimer = window.setTimeout(runAnimation, props.delay)
  else
    runAnimation()
})

onBeforeUnmount(() => {
  if (delayRunTimer)
    window.clearTimeout(delayRunTimer)

  if (typeof props.delayDestroy !== 'undefined')
    window.setTimeout(destroyAnimation, props.delayDestroy)
  else
    destroyAnimation()
})
</script>

<template>
  <div ref="container" />
</template>
