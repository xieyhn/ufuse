<script setup lang="ts">
import { getCurrentInstance, onBeforeUnmount, onMounted, ref } from 'vue'
import type { SplineEventName } from '@splinetool/runtime'
import { Application } from '@splinetool/runtime'
import createPromise from 'ufuse/utils/createPromise'
import type { SplineViewProps } from './types'

const props = defineProps<SplineViewProps>()
const viewRef = ref<HTMLCanvasElement>()
const instance = getCurrentInstance()!
const events: Array<{ name: SplineEventName; callback?: (...args: any[]) => any }> = [
  { name: 'mouseDown', callback: props.onMouseDown },
  { name: 'mouseHover', callback: props.onMouseHover },
  { name: 'mouseUp', callback: props.onMouseUp },
  { name: 'keyUp', callback: props.onKeyUp },
  { name: 'keyDown', callback: props.onKeyDown },
  { name: 'start', callback: props.onStart },
  { name: 'lookAt', callback: props.onLookAt },
  { name: 'follow', callback: props.onFollow },
  { name: 'scroll', callback: props.onScroll },
]
let spline: Application | null = null
const { promise, resolve, reject } = createPromise<void>()

function handleSplineEvents(spline: Application) {
  events.forEach(({ name, callback }) => {
    if (callback)
      spline.addEventListener(name, callback)
  })
}

async function getSpline(): Promise<Application> {
  return promise.then(() => spline!)
}

onMounted(() => {
  spline = new Application(viewRef.value!)
  spline.load(props.scene)
    .then(() => {
      resolve()
      if (!instance.isUnmounted)
        handleSplineEvents(spline!)
    })
    .catch(() => {
      reject()
    })
})

onBeforeUnmount(() => {
  events.forEach(({ name, callback }) => {
    if (callback)
      spline?.removeEventListener(name, callback)
  })

  reject()
  spline?.dispose()
})

defineExpose({
  getSpline,
})
</script>

<template>
  <canvas ref="viewRef" />
</template>
