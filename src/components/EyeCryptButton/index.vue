<script setup lang="ts">
import Lottie, { type AnimationItem } from 'lottie-web'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import type { EyeCryptButtonEvents, EyeCryptButtonProps } from './types'
import animationData from './source.json'

interface Color {
  r: number
  g: number
  b: number
  a: number
}

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

function isHexColor(color: string) {
  return color.startsWith('#') && color.length === 7
}

function isRGBAColor(color: string) {
  return /^rgba?\(/.test(color)
}

function parseHexColor(hex: string): Color {
  return {
    r: Number.parseInt(hex.slice(1, 3), 16),
    g: Number.parseInt(hex.slice(3, 5), 16),
    b: Number.parseInt(hex.slice(5, 7), 16),
    a: 1,
  }
}

function parseRGBAColor(rgba: string): Color | null {
  const matched = rgba.match(/rgba?\((.+)\)/)

  if (!matched)
    return null

  const [r, g, b, a = 1] = matched[1].split(',').map(i => Number(i.trim()))
  return {
    r,
    g,
    b,
    a,
  }
}

function replaceColor(json: any) {
  if (!props.color)
    return

  let parsedColor: Color | null = null

  if (isHexColor(props.color))
    parsedColor = parseHexColor(props.color)

  else if (isRGBAColor(props.color))
    parsedColor = parseRGBAColor(props.color)

  if (!parsedColor) {
    console.warn(`[EyeCryptButton] Invalid color: ${props.color}`)
    return
  }

  json.layers.forEach((e: any) => {
    e.shapes[0].it[1].c.k = [parsedColor!.r / 255, parsedColor!.g / 255, parsedColor!.b / 255, 1]
    e.shapes[0].it[1].o.k = parsedColor!.a * 100
  })
}

onMounted(() => {
  const json = JSON.parse(JSON.stringify(animationData)) as any
  replaceColor(json)

  animation = Lottie.loadAnimation({
    container: container.value!,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: json,
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
