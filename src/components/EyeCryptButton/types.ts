export interface EyeCryptButtonProps {
  /**
   * 是否是加密状态
   */
  crypt: boolean
  /**
   * 动画持续时长，单位：毫秒
   * @default 300
   */
  duration?: number
  /**
   * 颜色，rgb/rgba 或 六位十六进制颜色
   * @example 'rgb(255, 0, 0)'
   * @example 'rgba(255, 0, 0, 1)'
   * @example '#FF0000'
   */
  color?: string
}

export interface EyeCryptButtonEvents {
  (event: 'update:crypt', crypt: boolean): void
}
