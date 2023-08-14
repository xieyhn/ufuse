import { onBeforeUnmount, ref, watchEffect } from 'vue'
import type { UseContainOptions } from './types'

export default function useContain({ el, designWidth, designHeight }: UseContainOptions) {
  const scale = ref(1)
  const designRatio = designWidth / designHeight

  const handler = () => {
    const screenRatio = window.innerWidth / window.innerHeight

    if (screenRatio > designRatio)
      scale.value = window.innerHeight / designHeight
    else
      scale.value = window.innerWidth / designWidth
  }

  handler()

  watchEffect(() => {
    if (el.value) {
      el.value.style.position = 'absolute'
      el.value.style.left = '50%'
      el.value.style.top = '50%'
      el.value.style.transform = `translate(-50%, -50%) scale(${scale.value})`
    }
  })

  window.addEventListener('resize', handler)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handler)
  })
}
