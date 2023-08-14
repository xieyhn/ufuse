import type { Ref } from 'vue'

export interface UseContainOptions {
  el: Ref<HTMLElement | undefined>
  designWidth: number
  designHeight: number
}
