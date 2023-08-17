export interface AnimateDigitsProps {
  /**
   * 数值
   */
  value: number
  /**
   * 数值变化步长
   * @example 1 避免出现小数
   */
  step?: number
  /**
   * 动画时长，单位：毫秒
   * @default 1000
   */
  duration?: number
  /**
   * 是否只执行一次动画
   */
  once?: boolean
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 数值格式化函数
   */
  formatter?: (value: number) => number | string
}

export interface AnimateDigitsEvents {
  /**
   * 每一次数值变化动画完成时触发
   */
  (event: 'complete'): void
}
