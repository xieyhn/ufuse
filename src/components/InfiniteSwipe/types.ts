export interface InfiniteSwipeProps {
  modelValue: unknown[]
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 每次加载数据的间隔时间，单位：毫秒
   * @default 0
   */
  interval?: number
  /**
   * 每一次移动时持续时间，单位：毫秒
   * @default 1000
   */
  duration?: number
  /**
   * 加载更多数据
   */
  onMore: () => unknown[]
}

export interface InfiniteSwipeEvents {
  (e: 'update:modelValue', value: unknown[]): void
  /**
   * 每次开始滑动时触发
   */
  (e: 'swipe'): void
}
