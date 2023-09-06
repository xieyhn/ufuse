import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import type { UseContainOptions } from './types'

export function useContain({ el, designWidth, designHeight }: UseContainOptions) {
  const scale = ref(1)
  const designRatio = designWidth / designHeight
  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    const container = el.value!.parentNode! as HTMLElement

    const handler = () => {
      const screenRatio = container.clientWidth / container.clientHeight

      if (screenRatio > designRatio)
        scale.value = container.clientHeight / designHeight
      else
        scale.value = container.clientWidth / designWidth
    }

    handler()

    watchEffect(() => {
      if (el.value) {
        el.value.style.width = `${designWidth}px`
        el.value.style.height = `${designHeight}px`
        el.value.style.position = 'absolute'
        el.value.style.left = '50%'
        el.value.style.top = '50%'
        el.value.style.transform = `translate(-50%, -50%) scale(${scale.value})`
      }
    })

    resizeObserver = new ResizeObserver(() => {
      handler()
    })

    resizeObserver.observe(container)
  })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
  })
}

export default useContain
