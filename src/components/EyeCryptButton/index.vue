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

// 判断是否是十六进制颜色
function isHexColor(color: string) {
  const hexColorRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
  return hexColorRegex.test(color)
}

// rgba转换成 0 - 1
function rgbaTo01(rgba: string) {
  const rgbaArr = rgba.trim().split(',')
  if (rgbaArr.length !== 4)
    throw new Error('颜色值格式不正确')

  const r = Number.parseInt(rgbaArr[0].split('(')[1].trim())
  const g = Number.parseInt(rgbaArr[1].trim())
  const b = Number.parseInt(rgbaArr[2].trim())
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b))
    throw new Error('颜色值格式不正确')

  let alpha = Number.parseFloat(rgbaArr[3].trim()) as any
  if (Number.isNaN(alpha))
    throw new Error('颜色值格式不正确')

  const r01 = r / 255
  const g01 = g / 255
  const b01 = b / 255
  if (alpha < 0 || alpha > 1)
    alpha = 1

  return [r01, g01, b01, alpha]
}

// 十六进制转换成 0 - 1颜色
function hexTo01(hex: string) {
  if (hex.length === 4)
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)
  let alpha = Number.parseInt(hex.slice(7, 9), 16)

  if (Number.isNaN(alpha))
    alpha = 1

  else
    alpha = alpha / 255

  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b))
    throw new Error('颜色值格式不正确')
  const r01 = r / 255
  const g01 = g / 255
  const b01 = b / 255
  return [r01, g01, b01, alpha]
}

onMounted(() => {
  const json = JSON.parse(JSON.stringify(animationData)) as any

  if (props.color) {
    let color = [] as any
    if (isHexColor(props.color)) {
      color = hexTo01(props.color)
    }
    else {
      try {
        color = rgbaTo01(props.color)
      }
      catch (error: any) {
        console.error(error.message)
      }
    }
    json.layers.forEach((e: any) => {
      e.shapes[0].it[1].c.k = color
    })
  }

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
