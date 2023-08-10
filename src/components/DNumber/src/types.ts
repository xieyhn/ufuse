export interface DNumberProps {
  /**
   * 数值
   */
  n: number
  /**
   * 指定后缀字符
   */
  suffix?: string
  /**
   * 保留小数位数
   * @default 0
   */
  fractionDigits?: number
  /**
   * 动画时长，单位：毫秒
   * @default 600
   */
  duration?: number
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
}
