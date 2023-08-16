export interface AnimateDigitsProps {
  /**
   * 数值
   */
  value: number
  /**
   * 动画时长，单位：毫秒
   * @default 1000
   */
  duration?: number
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 数值格式化函数
   */
  formatter?: (value: number) => string
}
