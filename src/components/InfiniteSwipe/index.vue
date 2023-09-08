<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import type { InfiniteSwipeEvents, InfiniteSwipeProps } from './types'

const props = withDefaults(
  defineProps<InfiniteSwipeProps>(),
  {
    interval: 0,
    duration: 1000,
  },
)
const emit = defineEmits<InfiniteSwipeEvents>()
const container = ref<HTMLElement>()
let mounted = false
let delayTween: gsap.core.Tween | null = null
let moveTween: gsap.core.Tween | null = null

function handleSwipe() {
  if (!mounted)
    return
  const rowHeight = (container.value!.children[0] as HTMLElement)?.offsetHeight ?? 0
  delayTween = gsap.delayedCall(props.interval / 1000, async () => {
    const willPushRows = props.onMore()
    const len = willPushRows.length
    if (len === 0) {
      handleSwipe()
      return
    }
    emit('update:modelValue', [...props.modelValue, ...willPushRows])
    // 等待 DOM 更新
    await nextTick()
    if (!mounted)
      return
      // 容器整体上移
    emit('swipe')
    moveTween = gsap.to(container.value!, {
      y: -rowHeight * len,
      duration: props.duration / 1000,
      ease: 'none',
      onComplete: () => {
        // 移除上移出去的元素
        emit('update:modelValue', props.modelValue.slice(len))
        // 将容器位置重置
        gsap.set(container.value!, { y: 0 })

        nextTick(handleSwipe)
      },
    })
  })
}

function handleMouseEnter() {
  if (!props.disabled && props.pauseOnHover) {
    moveTween?.pause()
    delayTween?.pause()
  }
}

function handleMouseLeave() {
  if (!props.disabled && props.pauseOnHover && moveTween?.paused()) {
    moveTween?.play()
    delayTween?.play()
  }
}

onMounted(() => {
  mounted = true
  watch(
    () => props.disabled,
    () => {
      if (!delayTween)
        handleSwipe()
      if (props.disabled)
        delayTween?.pause()
      else
        delayTween?.play()
    },
    { immediate: true },
  )
})

onBeforeUnmount(() => {
  mounted = false

  delayTween?.kill()
  moveTween?.kill()
})
</script>

<template>
  <div class="infinite-swipe">
    <div ref="container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.infinite-swipe {
  overflow: hidden;
}
</style>
