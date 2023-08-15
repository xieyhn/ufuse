import type { Ref } from 'vue'

export interface UseContainOptions {
  el: Ref<HTMLElement | undefined>
  /**
   * 元素设计宽度
   */
  designWidth: number
  /**
   * 元素设计高度
   */
  designHeight: number
}
